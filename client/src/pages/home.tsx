import { useState } from "react";
import { Star, User, Heart, HelpCircle, UserCircle, Sparkles } from "lucide-react";
import ModeSelection from "@/components/mode-selection";
import InputForm from "@/components/input-form";
import MatrixVisualization from "@/components/matrix-visualization";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<'selection' | 'input' | 'results'>('selection');
  const [selectedMode, setSelectedMode] = useState<'personal' | 'couple' | null>(null);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleModeSelect = (mode: 'personal' | 'couple') => {
    // Always use personal mode for now
    setSelectedMode('personal');
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
      <nav className="bg-black/10 backdrop-blur-md border-b border-white/10 sticky top-0 z-10 shadow-md">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <Star className="text-white" size={20} />
              </div>
              <div>
                <h1 className="font-serif text-xl sm:text-2xl font-bold text-white">운명의 매트릭스</h1>
                <p className="text-xs sm:text-sm text-white/70">타로로 읽는 인생 로드맵</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-5">
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10 w-10 h-10 p-0 sm:w-auto sm:h-auto sm:px-4 sm:py-2 rounded-lg">
                <HelpCircle size={20} className="sm:mr-0 md:mr-2" />
                <span className="hidden md:inline font-medium">도움말</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10 w-10 h-10 p-0 sm:w-auto sm:h-auto sm:px-4 sm:py-2 rounded-lg">
                <UserCircle size={20} className="sm:mr-0 md:mr-2" />
                <span className="hidden md:inline font-medium">계정</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - 분석 결과 페이지에서는 표시하지 않음 */}
      {currentStep !== 'results' && (
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
              <circle cx="450" cy="230" r="1.8" fill="white" opacity="0.7"/>
              <circle cx="300" cy="320" r="1.6" fill="white" opacity="0.65"/>
              <circle cx="180" cy="280" r="1.7" fill="white" opacity="0.7"/>
              <circle cx="620" cy="250" r="1.5" fill="white" opacity="0.6"/>
              <line x1="100" y1="100" x2="200" y2="150" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              <line x1="200" y1="150" x2="350" y2="80" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              <line x1="350" y1="80" x2="500" y2="120" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              <line x1="500" y1="120" x2="650" y2="90" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              <line x1="450" y1="230" x2="500" y2="120" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              <line x1="300" y1="320" x2="450" y2="230" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              <line x1="180" y1="280" x2="300" y2="320" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            </svg>
          </div>
          
          <div className="mt-4 sm:mt-8 relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              <span className="gradient-text">22개의 아르카나</span>로<br/>
              당신의 인생을 읽어보세요
            </h2>
            <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8 mx-auto leading-relaxed max-w-2xl">
              <span className="text-gold-400 font-semibold inline-block bg-gold-500/10 px-3 py-1 rounded-full mb-4 sm:mb-5">10,000+ 사용자가 경험한 정확도</span><br/>
              타로, 수비학, 카발라의 고대 지혜를 현대적으로 재해석한 <span className="text-gold-400 font-semibold">운명의 매트릭스</span>는<br className="sm:hidden"/> 당신만의 고유한 에너지 패턴을 분석하여<br className="hidden sm:block"/>
              진정한 자아와 삶의 목적을 발견하도록 안내합니다
            </p>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-5xl mx-auto mt-10">
            <div className="glass-card p-6 sm:p-8 group hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 transform rotate-12 group-hover:rotate-0 transition-all duration-300 shadow-lg">
                <User className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4 text-center">성격 분석</h3>
              <p className="text-white/80 text-sm sm:text-base text-center leading-relaxed">내면의 자아와 외적 자아의 조화를 통해 당신의 타고난 성향과 표현 방식을 깊이 있게 이해합니다</p>
            </div>
            <div className="glass-card p-6 sm:p-8 group hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-rose-gold-400 to-rose-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 transform rotate-12 group-hover:rotate-0 transition-all duration-300 shadow-lg">
                <Star className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4 text-center">재능 발견</h3>
              <p className="text-white/80 text-sm sm:text-base text-center leading-relaxed">당신만의 고유한 재능과 잠재력을 드러내어 자신이 가진 특별한 강점과 직업적 적성을 파악합니다</p>
            </div>
            <div className="glass-card p-6 sm:p-8 group hover:transform hover:translate-y-[-5px] transition-all duration-300">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gold-400 to-rose-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-5 sm:mb-6 transform rotate-12 group-hover:rotate-0 transition-all duration-300 shadow-lg">
                <Sparkles className="text-white" size={32} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4 text-center">삶의 목적</h3>
              <p className="text-white/80 text-sm sm:text-base text-center leading-relaxed">과거 생으로부터 이어진 카르마 패턴을 이해하고 현생에서의 진정한 영적 사명을 발견합니다</p>
            </div>
          </div>
        </div>
      </section>
      )}

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
      <footer className="bg-black/15 backdrop-blur-md border-t border-white/10 py-8 sm:py-10 mt-auto">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-3 sm:space-x-4 mb-5 sm:mb-6">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center transform rotate-12">
                <Star className="text-white" size={16} />
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white">운명의 매트릭스</h3>
            </div>
            <p className="text-white/70 mb-5 sm:mb-6 text-sm sm:text-base max-w-xl mx-auto">
              타로, 수비학, 카발라, 차크라 원리를 결합한 현대적 운명 분석 시스템으로 당신만의 고유한 에너지 청사진을 발견하세요
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-white/60 text-sm mb-6 sm:mb-8">
              <a href="#" className="hover:text-gold-400 transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-gold-400 transition-colors">이용약관</a>
              <a href="#" className="hover:text-gold-400 transition-colors">고객지원</a>
            </div>
            
            {/* 소셜 미디어 링크 */}
            <div className="flex justify-center items-center space-x-5 mt-5 mb-5">
              <a href="https://instagram.com/운명의매트릭스" aria-label="인스타그램" className="text-white/60 hover:text-gold-400 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://pf.kakao.com/_운명의매트릭스" aria-label="카카오톡 채널" className="text-white/60 hover:text-gold-400 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3c-5.5 0-10 3.5-10 7.8 0 2.5 1.6 4.7 4 6.1-.2.6-.8 2.1-1 2.5-.2.4 0 .5.3.3.2-.1 2.5-1.7 3.5-2.4.7.2 1.5.3 2.3.4 0 0 .4 0 .6 0 5.5 0 10-3.5 10-7.8 0-4.3-4.5-7.9-10-7.9z"/>
                </svg>
              </a>
              <a href="https://blog.naver.com/운명의매트릭스" aria-label="네이버 블로그" className="text-white/60 hover:text-gold-400 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.273 12.845L7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845z"/>
                </svg>
              </a>
            </div>
            <p className="text-white/50 text-xs sm:text-sm mt-5 sm:mt-6">© 2025 운명의 매트릭스. 모든 권리 보유.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
