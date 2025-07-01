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
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <Star className="text-white" size={16} />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-white">운명의 매트릭스</h1>
                <p className="text-[10px] sm:text-xs text-white/70">타로로 읽는 인생 로드맵</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white w-8 h-8 p-0 sm:w-auto sm:h-auto sm:p-2">
                <HelpCircle size={18} className="sm:mr-0 md:mr-2" />
                <span className="hidden md:inline">도움말</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white w-8 h-8 p-0 sm:w-auto sm:h-auto sm:p-2">
                <UserCircle size={18} className="sm:mr-0 md:mr-2" />
                <span className="hidden md:inline">계정</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-10 sm:pt-16 pb-6 sm:pb-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Constellation background */}
          <div className="constellation-bg hidden sm:block">
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
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="gradient-text">운명의 매트릭스</span>로<br/>
            당신의 인생을 읽어보세요
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-3 sm:mb-4 mx-auto leading-relaxed">
            <span className="text-yellow-400 font-semibold inline-block bg-yellow-400/10 px-2 py-1 rounded mb-2 sm:mb-3 animate-pulse">인스타그램에서 유행중!</span><br/>
            MBTI, 타로, 사주를 결합해 고유한 22가지 아르카나 코드를 찾아드립니다. 성격, 재능, 연애 스타일까지<br className="sm:hidden"/> 타로 아르카나가 만들어내는 매트릭스를 통해<br className="hidden sm:block"/>
            당신의 진정한 운명과 숨겨진 재능을 발견하세요
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="glass-card p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <User className="text-white" size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">개인 분석</h3>
              <p className="text-white/70 text-xs sm:text-sm">나만의 매트릭스로 성격, 재능, 인생 목적을 깊이 있게 분석</p>
            </div>
            <div className="glass-card p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Heart className="text-white" size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">커플 분석</h3>
              <p className="text-white/70 text-xs sm:text-sm">두 사람의 매트릭스를 비교하여 관계의 조화와 성장 포인트 발견</p>
            </div>
            <div className="glass-card p-4 sm:p-6 sm:col-span-2 md:col-span-1 md:col-start-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Star className="text-white" size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">상세 해석</h3>
              <p className="text-white/70 text-xs sm:text-sm">각 포인트별 의미와 실생활 적용 방법까지 자세한 가이드 제공</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 pb-10 sm:pb-16">
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
      <footer className="bg-black/30 backdrop-blur-md border-t border-white/10 py-6 sm:py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <Star className="text-white" size={12} />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">운명의 매트릭스</h3>
            </div>
            <p className="text-white/60 mb-3 sm:mb-4 text-xs sm:text-sm">MBTI, 타로, 사주를 결합한 한국인을 위한 운명 분석 서비스</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-white/40 text-xs">
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
              <a href="#" className="hover:text-white transition-colors">고객지원</a>
            </div>
            
            {/* 소셜 미디어 링크 */}
            <div className="flex justify-center items-center space-x-4 mt-4 mb-3">
              <a href="https://instagram.com/운명의매트릭스" aria-label="인스타그램" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://pf.kakao.com/_운명의매트릭스" aria-label="카카오톡 채널" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3c-5.5 0-10 3.5-10 7.8 0 2.5 1.6 4.7 4 6.1-.2.6-.8 2.1-1 2.5-.2.4 0 .5.3.3.2-.1 2.5-1.7 3.5-2.4.7.2 1.5.3 2.3.4 0 0 .4 0 .6 0 5.5 0 10-3.5 10-7.8 0-4.3-4.5-7.9-10-7.9z"/>
                </svg>
              </a>
              <a href="https://blog.naver.com/운명의매트릭스" aria-label="네이버 블로그" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.273 12.845L7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845z"/>
                </svg>
              </a>
            </div>
            <p className="text-white/40 text-[10px] sm:text-xs mt-3 sm:mt-4">© 2025 운명의 매트릭스. 한국인을 위한 운명 분석 서비스.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
