import { useState, useEffect } from "react";
import { Stars, Share, Download, RotateCcw, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import InterpretationTabs from "./interpretation-tabs";
import { getTarotCard } from "@/lib/tarot-data";

interface MatrixVisualizationProps {
  result: any;
  onNewAnalysis: () => void;
}

export default function MatrixVisualization({ result, onNewAnalysis }: MatrixVisualizationProps) {
  const [showLoading, setShowLoading] = useState(true);
  const [showMatrix, setShowMatrix] = useState(false);
  const [showInterpretations, setShowInterpretations] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate loading animation
    const timer1 = setTimeout(() => {
      setShowLoading(false);
      setShowMatrix(true);
    }, 3000);

    const timer2 = setTimeout(() => {
      setShowInterpretations(true);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handlePointClick = (pointNumber: number) => {
    setSelectedPoint(pointNumber);
    const card = getTarotCard(pointNumber);
    toast({
      title: `${pointNumber}번 - ${card.name}`,
      description: card.shortDescription,
    });
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "공유 링크 복사됨",
        description: "분석 결과 링크가 클립보드에 복사되었습니다.",
      });
    } catch (error) {
      toast({
        title: "링크 복사 실패",
        description: "링크 복사 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    }
  };

  const handleInstagramShare = async () => {
    try {
      const canvas = document.createElement('canvas');
      // 여기에 결과 이미지 생성 로직 추가
      // 이미지 데이터를 스토리에 공유하기 위한 URL 생성
      const imageUrl = canvas.toDataURL('image/png');
      
      // 모바일에서 인스타그램 스토리 공유
      if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        window.location.href = `instagram://story-camera?media=${encodeURIComponent(imageUrl)}`;
      } else {
        toast({
          title: "PC에서 공유하기",
          description: "인스타그램 스토리 공유는 모바일에서만 가능합니다. 대신 이미지를 다운로드해서 공유해보세요.",
          variant: "default",
        });
      }
    } catch (error) {
      toast({
        title: "공유 실패",
        description: "인스타그램 스토리 공유 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    }
  };

  const handleDownload = () => {
    toast({
      title: "PDF 생성 중",
      description: "분석 결과 PDF를 준비하고 있습니다.",
    });
  };

  if (showLoading) {
    return (
      <div className="glass-card p-8 sm:p-16 text-center">
        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 relative">
          <div className="absolute inset-0 border-4 border-white/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-yellow-400 rounded-full border-t-transparent animate-spin"></div>
          <div className="absolute inset-2 border-4 border-purple-400 rounded-full border-b-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">운명의 매트릭스를 계산하고 있습니다...</h3>
        <p className="text-sm sm:text-base text-white/70">잠시만 기다려주세요. 우주의 에너지를 읽어내는 중입니다.</p>
      </div>
    );
  }

  const matrixPoints = result.mode === 'couple' ? result.matrixPoints.person1 : result.matrixPoints;
  const title = result.mode === 'couple' 
    ? `${result.person1.name}과 ${result.person2.name}의 데스티니 매트릭스`
    : `${result.name}의 데스티니 매트릭스`;

  return (
    <div className="space-y-4 sm:space-y-6 max-w-full">
      {showMatrix && (
        <div className="glass-card p-4 sm:p-6 md:p-8">
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{title}</h3>
            <p className="text-sm text-white/70">각 숫자를 클릭하면 상세한 해석을 볼 수 있습니다</p>
          </div>
          
          {/* Enhanced Matrix Chart */}
          <div className="flex justify-center mb-8 px-2 sm:px-0">
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-full border border-white/10 transform-gpu touch-manipulation">
              {/* Outer Circle with Age Markers */}
              <div className="absolute inset-0 border-2 border-white/30 rounded-full"></div>
              
              {/* Age Markers around the circle */}
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30) - 90; // Start from top
                  const radian = (angle * Math.PI) / 180;
                  const radius = 90; // Percentage based on viewport size
                  const x = 50 + radius * Math.cos(radian); // Percentage
                  const y = 50 + radius * Math.sin(radian); // Percentage
                  const age = [20, 30, 40, 50, 60, 70, 10, 80, 90, 0, 100, 110][i];
                  
                  return (
                    <div
                      key={i}
                      className="absolute text-[8px] sm:text-xs text-white/60 font-medium"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {age}
                      <div className="text-[6px] sm:text-[10px] text-white/40">세</div>
                    </div>
                  );
                })}
              </div>
              
              {/* Inner geometric structure */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
                  </linearGradient>
                </defs>
                <g stroke="url(#lineGradient)" strokeWidth="1.5" fill="none">
                  {/* Outer diamond */}
                  <polygon points="250,60 420,250 250,420 80,250" />
                  {/* Inner diamond */}
                  <polygon points="250,120 360,250 250,380 140,250" />
                  {/* Central cross */}
                  <line x1="250" y1="120" x2="250" y2="380" />
                  <line x1="140" y1="250" x2="360" y2="250" />
                  {/* Diagonal connections */}
                  <line x1="250" y1="120" x2="360" y2="250" />
                  <line x1="360" y1="250" x2="250" y2="380" />
                  <line x1="250" y1="380" x2="140" y2="250" />
                  <line x1="140" y1="250" x2="250" y2="120" />
                  {/* Heart symbol in center */}
                  <path d="M240 240 c0,-8 8,-12 10,-4 c2,-8 10,-4 10,4 c0,6 -10,16 -10,16 s-10,-10 -10,-16 z" fill="rgba(255,20,147,0.8)" />
                </g>
              </svg>
              
              {/* Matrix Points with enhanced styling */}
              {/* Top - Spiritual Purpose */}
              <div 
                className="matrix-point absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg cursor-pointer transition-all duration-300 border-2 border-white/40 shadow-xl hover:scale-110 active:scale-95 touch-manipulation"
                style={{
                  left: '50%',
                  top: '12%',
                  transform: 'translate(-50%, -50%)',
                  background: 'linear-gradient(135deg, #8B5CF6, #6366F1)',
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)'
                }}
                onClick={() => handlePointClick(matrixPoints.spiritualPurpose)}
              >
                {matrixPoints.spiritualPurpose}
              </div>
              
              {/* Right - Talent */}
              <div 
                className="matrix-point absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg cursor-pointer transition-all duration-300 border-2 border-white/40 shadow-xl hover:scale-110 active:scale-95 touch-manipulation"
                style={{
                  right: '12%',
                  top: '50%',
                  transform: 'translate(50%, -50%)',
                  background: 'linear-gradient(135deg, #10B981, #059669)',
                  boxShadow: '0 0 20px rgba(16, 185, 129, 0.4)'
                }}
                onClick={() => handlePointClick(matrixPoints.talent)}
              >
                {matrixPoints.talent}
              </div>
              
              {/* Bottom - Karma */}
              <div 
                className="matrix-point absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg cursor-pointer transition-all duration-300 border-2 border-white/40 shadow-xl hover:scale-110 active:scale-95 touch-manipulation"
                style={{
                  left: '50%',
                  bottom: '12%',
                  transform: 'translate(-50%, 50%)',
                  background: 'linear-gradient(135deg, #EF4444, #DC2626)',
                  boxShadow: '0 0 20px rgba(239, 68, 68, 0.4)'
                }}
                onClick={() => handlePointClick(matrixPoints.karma)}
              >
                {matrixPoints.karma}
              </div>
              
              {/* Left - Behavior */}
              <div 
                className="matrix-point absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg cursor-pointer transition-all duration-300 border-2 border-white/40 shadow-xl hover:scale-110 active:scale-95 touch-manipulation"
                style={{
                  left: '12%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)'
                }}
                onClick={() => handlePointClick(matrixPoints.behavior)}
              >
                {matrixPoints.behavior}
              </div>
              
              {/* Center - Core Energy */}
              <div 
                className="matrix-point absolute w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl cursor-pointer transition-all duration-300 border-2 sm:border-3 border-white/50 shadow-2xl hover:scale-110 active:scale-95 touch-manipulation"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'linear-gradient(135deg, #F59E0B, #D97706)',
                  boxShadow: '0 0 30px rgba(245, 158, 11, 0.6)'
                }}
                onClick={() => handlePointClick(matrixPoints.coreEnergy)}
              >
                {matrixPoints.coreEnergy}
              </div>
              
              {/* Additional inner points */}
              <div 
                className="matrix-point absolute w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm cursor-pointer transition-all duration-300 border border-white/30 shadow-lg hover:scale-110 active:scale-95 touch-manipulation"
                style={{
                  left: '72%',
                  top: '28%',
                  transform: 'translate(-50%, -50%)',
                  background: 'linear-gradient(135deg, #3B82F6, #2563EB)'
                }}
                onClick={() => handlePointClick(matrixPoints.additional1)}
              >
                {matrixPoints.additional1}
              </div>
              <div 
                className="matrix-point absolute w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm cursor-pointer transition-all duration-300 border border-white/30 shadow-lg hover:scale-110 active:scale-95 touch-manipulation"
                style={{
                  left: '72%',
                  top: '72%',
                  transform: 'translate(-50%, -50%)',
                  background: 'linear-gradient(135deg, #F97316, #EA580C)'
                }}
                onClick={() => handlePointClick(matrixPoints.additional2)}
              >
                {matrixPoints.additional2}
              </div>
              <div 
                className="matrix-point absolute w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm cursor-pointer transition-all duration-300 border border-white/30 shadow-lg hover:scale-110 active:scale-95 touch-manipulation"
                style={{
                  left: '28%',
                  top: '72%',
                  transform: 'translate(-50%, -50%)',
                  background: 'linear-gradient(135deg, #EC4899, #DB2777)'
                }}
                onClick={() => handlePointClick(matrixPoints.additional3)}
              >
                {matrixPoints.additional3}
              </div>
              <div 
                className="matrix-point absolute w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm cursor-pointer transition-all duration-300 border border-white/30 shadow-lg hover:scale-110 active:scale-95 touch-manipulation"
                style={{
                  left: '28%',
                  top: '28%',
                  transform: 'translate(-50%, -50%)',
                  background: 'linear-gradient(135deg, #06B6D4, #0891B2)'
                }}
                onClick={() => handlePointClick(matrixPoints.additional4)}
              >
                {matrixPoints.additional4}
              </div>
              
              {/* Outer ring points */}
              <div 
                className="matrix-point absolute w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm cursor-pointer transition-all duration-300 border-2 border-white/30 shadow-lg hover:scale-110 active:scale-95 touch-manipulation"
                style={{
                  left: '50%',
                  top: '2%',
                  transform: 'translate(-50%, -50%)',
                  background: 'linear-gradient(135deg, #6366F1, #4F46E5)'
                }}
                onClick={() => handlePointClick(matrixPoints.outer1)}
              >
                {matrixPoints.outer1}
              </div>
              <div 
                className="matrix-point absolute w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm cursor-pointer transition-all duration-300 border-2 border-white/30 shadow-lg hover:scale-110 active:scale-95 touch-manipulation"
                style={{
                  right: '2%',
                  top: '50%',
                  transform: 'translate(50%, -50%)',
                  background: 'linear-gradient(135deg, #14B8A6, #0D9488)'
                }}
                onClick={() => handlePointClick(matrixPoints.outer2)}
              >
                {matrixPoints.outer2}
              </div>
              <div 
                className="matrix-point absolute w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm cursor-pointer transition-all duration-300 border-2 border-white/30 shadow-lg hover:scale-110 active:scale-95 touch-manipulation"
                style={{
                  left: '50%',
                  bottom: '2%',
                  transform: 'translate(-50%, 50%)',
                  background: 'linear-gradient(135deg, #F59E0B, #D97706)'
                }}
                onClick={() => handlePointClick(matrixPoints.outer3)}
              >
                {matrixPoints.outer3}
              </div>
              <div 
                className="matrix-point absolute w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm cursor-pointer transition-all duration-300 border-2 border-white/30 shadow-lg hover:scale-110 active:scale-95 touch-manipulation"
                style={{
                  left: '2%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'linear-gradient(135deg, #059669, #047857)'
                }}
                onClick={() => handlePointClick(matrixPoints.outer4)}
              >
                {matrixPoints.outer4}
              </div>
            </div>
          </div>
          
          {/* Enhanced Analysis Table */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-xl p-4 sm:p-6 border border-white/10 backdrop-blur-sm">
            <h4 className="text-xl font-bold text-white mb-4 sm:mb-6 text-center">타로카드 분석</h4>
            
            <div className="w-full">
              <table className="w-full min-w-full table-auto">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-2 sm:p-3 text-white font-semibold">타로카드 이름</th>
                    <th className="text-center p-2 sm:p-3 text-white font-semibold">물리적</th>
                    <th className="text-center p-2 sm:p-3 text-white font-semibold">에너지</th>
                    <th className="text-center p-2 sm:p-3 text-white font-semibold">감정</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { name: getTarotCard(matrixPoints.spiritualPurpose).name.split('(')[0], number: matrixPoints.spiritualPurpose, color: 'from-purple-500 to-purple-700' },
                    { name: getTarotCard(matrixPoints.talent).name.split('(')[0], number: matrixPoints.talent, color: 'from-green-500 to-green-700' },
                    { name: getTarotCard(matrixPoints.behavior).name.split('(')[0], number: matrixPoints.behavior, color: 'from-blue-500 to-blue-700' },
                    { name: getTarotCard(matrixPoints.karma).name.split('(')[0], number: matrixPoints.karma, color: 'from-red-500 to-red-700' },
                    { name: getTarotCard(matrixPoints.coreEnergy).name.split('(')[0], number: matrixPoints.coreEnergy, color: 'from-yellow-500 to-yellow-700' },
                    { name: getTarotCard(matrixPoints.additional1).name.split('(')[0], number: matrixPoints.additional1, color: 'from-orange-500 to-orange-700' },
                    { name: getTarotCard(matrixPoints.additional2).name.split('(')[0], number: matrixPoints.additional2, color: 'from-pink-500 to-pink-700' }
                  ].map((card, index) => (
                    <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="p-2 sm:p-3 flex items-center">
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center text-white font-bold text-xs mr-2 sm:mr-3`}>
                          {card.number}
                        </div>
                        <span className="text-white font-medium text-xs sm:text-sm">{card.name}</span>
                      </td>
                      <td className="text-center p-2 sm:p-3 text-white text-xs sm:text-sm">{Math.floor(Math.random() * 10) + 10}</td>
                      <td className="text-center p-2 sm:p-3 text-white text-xs sm:text-sm">{Math.floor(Math.random() * 15) + 5}</td>
                      <td className="text-center p-2 sm:p-3 text-white text-xs sm:text-sm">{Math.floor(Math.random() * 12) + 8}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="bg-white/5 rounded-lg p-3 sm:p-4">
                <h5 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 flex items-center">
                  <span className="text-yellow-400 mr-2">⭐</span>
                  개인적 측면
                </h5>
                <div className="space-y-2 text-xs sm:text-sm text-white/80">
                  <p><span className="text-yellow-400 font-medium">핵심 특질:</span> {getTarotCard(matrixPoints.coreEnergy).coreTraits}</p>
                  <p><span className="text-purple-400 font-medium">영적 목적:</span> {getTarotCard(matrixPoints.spiritualPurpose).shortDescription}</p>
                  <p><span className="text-green-400 font-medium">재능:</span> {getTarotCard(matrixPoints.talent).shortDescription}</p>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-3 sm:p-4">
                <h5 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 flex items-center">
                  <span className="text-pink-400 mr-2">💫</span>
                  사회적 측면
                </h5>
                <div className="space-y-2 text-xs sm:text-sm text-white/80">
                  <p><span className="text-blue-400 font-medium">행동 패턴:</span> {getTarotCard(matrixPoints.behavior).coreTraits}</p>
                  <p><span className="text-red-400 font-medium">카르마 과제:</span> {getTarotCard(matrixPoints.karma).shortDescription}</p>
                  <p><span className="text-orange-400 font-medium">관계 스타일:</span> {getTarotCard(matrixPoints.coreEnergy).relationshipStyle.slice(0, 50)}...</p>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/20">
              <h5 className="text-base sm:text-lg font-semibold text-white mb-2 flex items-center">
                <span className="text-indigo-400 mr-2">🔮</span>
                핵심 매트릭스 총합
              </h5>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-3 sm:mt-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-yellow-400">{(matrixPoints.coreEnergy + matrixPoints.spiritualPurpose + matrixPoints.talent + matrixPoints.karma) % 22 || 22}</div>
                  <div className="text-xs text-white/60">하늘</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-400">{(matrixPoints.talent + matrixPoints.additional1) % 22 || 22}</div>
                  <div className="text-xs text-white/60">지구</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-blue-400">{(matrixPoints.behavior + matrixPoints.additional2) % 22 || 22}</div>
                  <div className="text-xs text-white/60">남성</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-pink-400">{(matrixPoints.karma + matrixPoints.additional3) % 22 || 22}</div>
                  <div className="text-xs text-white/60">여성</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showInterpretations && (
        <>
          <InterpretationTabs matrixPoints={matrixPoints} mode={result.mode} />
          
          {/* Action Buttons */}
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <div className="flex flex-wrap justify-center gap-3 sm:space-x-4">
              <Button
                onClick={handleShare}
                className="mystical-button from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base"
              >
                <Share className="mr-2" size={16} />
                결과 공유
              </Button>
              <Button
                onClick={handleDownload}
                className="mystical-button from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base"
              >
                <Download className="mr-2" size={16} />
                PDF 저장
              </Button>
              <Button
                onClick={onNewAnalysis}
                className="mystical-button from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base"
              >
                <RotateCcw className="mr-2" size={16} />
                새 분석
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <Button
                onClick={handleInstagramShare}
                className="mystical-button from-pink-500 via-purple-500 to-yellow-500 hover:from-pink-400 hover:via-purple-400 hover:to-yellow-400 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base"
              >
                <Instagram className="mr-2" size={16} />
                인스타그램 스토리로 공유
              </Button>
              <span className="text-yellow-400 text-xs sm:text-sm font-medium animate-pulse">✨ 인스타에서 유행중!</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
