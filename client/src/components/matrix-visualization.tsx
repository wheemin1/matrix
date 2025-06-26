import { useState, useEffect } from "react";
import { Stars, Share, Download, RotateCcw } from "lucide-react";
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

  const handleShare = () => {
    toast({
      title: "공유 링크 복사됨",
      description: "분석 결과 링크가 클립보드에 복사되었습니다.",
    });
  };

  const handleDownload = () => {
    toast({
      title: "PDF 생성 중",
      description: "분석 결과 PDF를 준비하고 있습니다.",
    });
  };

  if (showLoading) {
    return (
      <div className="glass-card p-16 text-center">
        <div className="w-24 h-24 mx-auto mb-6 relative">
          <div className="absolute inset-0 border-4 border-white/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-yellow-400 rounded-full border-t-transparent animate-spin"></div>
          <div className="absolute inset-2 border-4 border-purple-400 rounded-full border-b-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">운명의 매트릭스를 계산하고 있습니다...</h3>
        <p className="text-white/70">잠시만 기다려주세요. 우주의 에너지를 읽어내는 중입니다.</p>
      </div>
    );
  }

  const matrixPoints = result.mode === 'couple' ? result.matrixPoints.person1 : result.matrixPoints;
  const title = result.mode === 'couple' 
    ? `${result.person1.name}과 ${result.person2.name}의 데스티니 매트릭스`
    : `${result.name}의 데스티니 매트릭스`;

  return (
    <div className="space-y-8">
      {showMatrix && (
        <div className="glass-card p-8 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/70">각 숫자를 클릭하면 상세한 해석을 볼 수 있습니다</p>
          </div>
          
          {/* Matrix Chart */}
          <div className="flex justify-center mb-8">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Outer Circle */}
              <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
              
              {/* Inner Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                <g stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none">
                  {/* Diamond shape */}
                  <polygon points="200,50 350,200 200,350 50,200" />
                  {/* Cross lines */}
                  <line x1="200" y1="50" x2="200" y2="350" />
                  <line x1="50" y1="200" x2="350" y2="200" />
                  {/* Diagonal lines */}
                  <line x1="200" y1="50" x2="350" y2="200" />
                  <line x1="350" y1="200" x2="200" y2="350" />
                  <line x1="200" y1="350" x2="50" y2="200" />
                  <line x1="50" y1="200" x2="200" y2="50" />
                </g>
              </svg>
              
              {/* Matrix Points */}
              <div 
                className="matrix-point top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-purple-500 to-purple-700"
                onClick={() => handlePointClick(matrixPoints.spiritualPurpose)}
              >
                {matrixPoints.spiritualPurpose}
              </div>
              <div 
                className="matrix-point top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-green-500 to-green-700"
                onClick={() => handlePointClick(matrixPoints.talent)}
              >
                {matrixPoints.talent}
              </div>
              <div 
                className="matrix-point bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-gradient-to-br from-red-500 to-red-700"
                onClick={() => handlePointClick(matrixPoints.karma)}
              >
                {matrixPoints.karma}
              </div>
              <div 
                className="matrix-point top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-purple-500 to-purple-700"
                onClick={() => handlePointClick(matrixPoints.behavior)}
              >
                {matrixPoints.behavior}
              </div>
              
              {/* Center Point */}
              <div 
                className="matrix-point top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-yellow-500 to-yellow-700 w-12 h-12 text-lg"
                onClick={() => handlePointClick(matrixPoints.coreEnergy)}
              >
                {matrixPoints.coreEnergy}
              </div>
              
              {/* Additional Points */}
              <div 
                className="matrix-point top-1/3 right-1/3 bg-gradient-to-br from-blue-500 to-blue-700"
                onClick={() => handlePointClick(matrixPoints.additional1)}
              >
                {matrixPoints.additional1}
              </div>
              <div 
                className="matrix-point bottom-1/3 right-1/3 bg-gradient-to-br from-orange-500 to-orange-700"
                onClick={() => handlePointClick(matrixPoints.additional2)}
              >
                {matrixPoints.additional2}
              </div>
              <div 
                className="matrix-point bottom-1/3 left-1/3 bg-gradient-to-br from-pink-500 to-pink-700"
                onClick={() => handlePointClick(matrixPoints.additional3)}
              >
                {matrixPoints.additional3}
              </div>
              <div 
                className="matrix-point top-1/3 left-1/3 bg-gradient-to-br from-cyan-500 to-cyan-700"
                onClick={() => handlePointClick(matrixPoints.additional4)}
              >
                {matrixPoints.additional4}
              </div>
              
              {/* Outer Ring Points */}
              <div 
                className="matrix-point top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-indigo-500 to-indigo-700"
                onClick={() => handlePointClick(matrixPoints.outer1)}
              >
                {matrixPoints.outer1}
              </div>
              <div 
                className="matrix-point top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-teal-500 to-teal-700"
                onClick={() => handlePointClick(matrixPoints.outer2)}
              >
                {matrixPoints.outer2}
              </div>
              <div 
                className="matrix-point bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-gradient-to-br from-amber-500 to-amber-700"
                onClick={() => handlePointClick(matrixPoints.outer3)}
              >
                {matrixPoints.outer3}
              </div>
              <div 
                className="matrix-point top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-emerald-500 to-emerald-700"
                onClick={() => handlePointClick(matrixPoints.outer4)}
              >
                {matrixPoints.outer4}
              </div>
            </div>
          </div>
          
          {/* Matrix Legend */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/5 rounded-lg p-3">
              <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full mx-auto mb-2"></div>
              <p className="text-white text-sm font-medium">핵심 에너지</p>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mx-auto mb-2"></div>
              <p className="text-white text-sm font-medium">영적 목적</p>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-700 rounded-full mx-auto mb-2"></div>
              <p className="text-white text-sm font-medium">재능</p>
            </div>
            <div className="bg-white/5 rounded-lg p-3">
              <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-700 rounded-full mx-auto mb-2"></div>
              <p className="text-white text-sm font-medium">카르마</p>
            </div>
          </div>
        </div>
      )}

      {showInterpretations && (
        <>
          <InterpretationTabs matrixPoints={matrixPoints} mode={result.mode} />
          
          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <Button
              onClick={handleShare}
              className="mystical-button from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-medium"
            >
              <Share className="mr-2" size={16} />
              결과 공유하기
            </Button>
            <Button
              onClick={handleDownload}
              className="mystical-button from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-6 py-3 rounded-lg font-medium"
            >
              <Download className="mr-2" size={16} />
              PDF로 저장
            </Button>
            <Button
              onClick={onNewAnalysis}
              className="mystical-button from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-white px-6 py-3 rounded-lg font-medium"
            >
              <RotateCcw className="mr-2" size={16} />
              새로운 분석
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
