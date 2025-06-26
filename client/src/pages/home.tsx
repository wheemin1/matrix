import { useState } from "react";
import { Star, User, Heart, HelpCircle, UserCircle } from "lucide-react";
import ModeSelection from "@/components/mode-selection";
import InputForm from "@/components/input-form";
import MatrixVisualization from "@/components/matrix-visualization";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<'selection' | 'input' | 'results'>('selection');
  const [selectedMode, setSelectedMode] = useState<'personal' | 'couple' | null>(null);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleModeSelect = (mode: 'personal' | 'couple') => {
    setSelectedMode(mode);
    setCurrentStep('input');
  };

  const handleAnalysisComplete = (result: any) => {
    setAnalysisResult(result);
    setCurrentStep('results');
  };

  const handleNewAnalysis = () => {
    setCurrentStep('selection');
    setSelectedMode(null);
    setAnalysisResult(null);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <Star className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">데스티니 매트릭스</h1>
                <p className="text-xs text-white/70">타로로 읽는 인생 로드맵</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white">
                <HelpCircle size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white">
                <UserCircle size={20} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Constellation background */}
          <div className="constellation-bg">
            <svg className="w-full h-full" viewBox="0 0 800 600">
              <circle cx="100" cy="100" r="2" fill="white" opacity="0.8"/>
              <circle cx="200" cy="150" r="1.5" fill="white" opacity="0.6"/>
              <circle cx="350" cy="80" r="2" fill="white" opacity="0.7"/>
              <circle cx="500" cy="120" r="1.5" fill="white" opacity="0.5"/>
              <circle cx="650" cy="90" r="2" fill="white" opacity="0.8"/>
              <line x1="100" y1="100" x2="200" y2="150" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              <line x1="200" y1="150" x2="350" y2="80" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              <line x1="350" y1="80" x2="500" y2="120" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            </svg>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="gradient-text">운명의 매트릭스</span>로<br/>
            당신의 인생을 읽어보세요
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            22개의 타로 아르카나가 만들어내는 신비로운 매트릭스를 통해<br/>
            당신의 진정한 운명과 숨겨진 재능을 발견하세요
          </p>
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">개인 분석</h3>
              <p className="text-white/70 text-sm">나만의 매트릭스로 성격, 재능, 인생 목적을 깊이 있게 분석</p>
            </div>
            <div className="glass-card p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">커플 분석</h3>
              <p className="text-white/70 text-sm">두 사람의 매트릭스를 비교하여 관계의 조화와 성장 포인트 발견</p>
            </div>
            <div className="glass-card p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">상세 해석</h3>
              <p className="text-white/70 text-sm">각 포인트별 의미와 실생활 적용 방법까지 자세한 가이드 제공</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-16">
        {currentStep === 'selection' && (
          <ModeSelection onModeSelect={handleModeSelect} />
        )}
        
        {currentStep === 'input' && selectedMode && (
          <InputForm 
            mode={selectedMode} 
            onAnalysisComplete={handleAnalysisComplete}
            onBack={() => setCurrentStep('selection')}
          />
        )}
        
        {currentStep === 'results' && analysisResult && (
          <MatrixVisualization 
            result={analysisResult}
            onNewAnalysis={handleNewAnalysis}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <Star className="text-white" size={16} />
              </div>
              <h3 className="text-lg font-bold text-white">데스티니 매트릭스</h3>
            </div>
            <p className="text-white/60 mb-4">22개의 타로 아르카나로 읽는 당신만의 운명</p>
            <div className="flex justify-center space-x-6 text-white/40 text-sm">
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
              <a href="#" className="hover:text-white transition-colors">고객지원</a>
            </div>
            <p className="text-white/40 text-xs mt-4">© 2024 Destiny Matrix. Based on Natalia Ladini's system.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
