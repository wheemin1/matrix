import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModeSelectionProps {
  onModeSelect: (mode: 'personal' | 'couple') => void;
}

export default function ModeSelection({ onModeSelect }: ModeSelectionProps) {
  return (
    <div className="glass-card p-6 sm:p-10 mb-8 sm:mb-10">
      <div className="text-center mb-8 sm:mb-10">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
          당신만의 <span className="gradient-text">숨겨진 운명 코드</span>를 발견하세요
        </h3>
        <p className="text-sm sm:text-base text-white/80 max-w-lg mx-auto leading-relaxed">
          22개의 아르카나가 펼치는 당신의 인생 지도로
          <span className="hidden sm:inline"> 타고난 재능과 숨겨진 잠재력,</span> 진정한 삶의 목적을 찾아보세요
        </p>
        <div className="mt-4 text-white/60 text-xs sm:text-sm">
          <span className="bg-white/10 rounded-full px-3 py-1 inline-block">
            10,000+ 사용자가 발견한 자신만의 운명 패턴
          </span>
        </div>
      </div>
      
      <div className="flex justify-center max-w-md mx-auto px-2 sm:px-4">
        <Button
          onClick={() => onModeSelect('personal')}
          className="mystical-button rounded-xl p-5 sm:p-6 h-auto flex items-center justify-center gap-3 border border-transparent focus:outline-none group touch-manipulation w-full text-lg sm:text-xl"
          aria-label="운명 분석 시작하기"
        >
          <Sparkles className="text-white" size={24} />
          <span className="font-semibold">나의 운명 지도 펼치기</span>
        </Button>
      </div>
    </div>
  );
}
