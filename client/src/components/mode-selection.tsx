import { User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModeSelectionProps {
  onModeSelect: (mode: 'personal' | 'couple') => void;
}

export default function ModeSelection({ onModeSelect }: ModeSelectionProps) {
  return (
    <div className="glass-card p-4 sm:p-8 mb-6 sm:mb-8">
      <div className="text-center mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">분석 유형을 선택해주세요</h3>
        <p className="text-sm sm:text-base text-white/70">개인 분석 또는 커플 분석 중 선택하여 시작하세요</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-2xl mx-auto px-2 sm:px-4">
        <Button
          onClick={() => onModeSelect('personal')}
          className="mystical-button from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 active:from-purple-700 active:to-purple-900 rounded-xl p-5 sm:p-8 h-auto flex flex-col border-2 border-transparent hover:border-white/30 focus:border-white/50 focus:outline-none group min-h-[130px] sm:min-h-[160px] touch-manipulation w-full"
          aria-label="개인 분석 모드 선택하기"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-white/30 transition-colors">
            <User className="text-white" size={28} />
          </div>
          <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">개인 분석</h4>
          <p className="text-white/80 text-xs sm:text-sm text-center leading-relaxed">
            나만의 운명 매트릭스를 통해<br/>성격, 재능, 인생 목적을 분석
          </p>
        </Button>
        
        <Button
          onClick={() => onModeSelect('couple')}
          className="mystical-button from-pink-600 to-pink-800 hover:from-pink-500 hover:to-pink-700 active:from-pink-700 active:to-pink-900 rounded-xl p-5 sm:p-8 h-auto flex flex-col border-2 border-transparent hover:border-white/30 focus:border-white/50 focus:outline-none group min-h-[130px] sm:min-h-[160px] touch-manipulation w-full"
          aria-label="커플 분석 모드 선택하기"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-white/30 transition-colors">
            <Heart className="text-white" size={28} />
          </div>
          <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">커플 분석</h4>
          <p className="text-white/80 text-xs sm:text-sm text-center leading-relaxed">
            두 사람의 매트릭스를 비교하여<br/>관계의 조화와 호환성을 분석
          </p>
        </Button>
      </div>
    </div>
  );
}
