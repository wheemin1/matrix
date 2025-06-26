import { User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModeSelectionProps {
  onModeSelect: (mode: 'personal' | 'couple') => void;
}

export default function ModeSelection({ onModeSelect }: ModeSelectionProps) {
  return (
    <div className="glass-card p-8 mb-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">분석 유형을 선택해주세요</h3>
        <p className="text-white/70">개인 분석 또는 커플 분석 중 선택하여 시작하세요</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <Button
          onClick={() => onModeSelect('personal')}
          className="mystical-button from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 rounded-xl p-8 h-auto flex flex-col border-2 border-transparent hover:border-white/30 group"
        >
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
            <User className="text-white" size={32} />
          </div>
          <h4 className="text-xl font-semibold text-white mb-2">개인 분석</h4>
          <p className="text-white/80 text-sm text-center">
            나만의 운명 매트릭스를 통해<br/>성격, 재능, 인생 목적을 분석
          </p>
        </Button>
        
        <Button
          onClick={() => onModeSelect('couple')}
          className="mystical-button from-pink-600 to-pink-800 hover:from-pink-500 hover:to-pink-700 rounded-xl p-8 h-auto flex flex-col border-2 border-transparent hover:border-white/30 group"
        >
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
            <Heart className="text-white" size={32} />
          </div>
          <h4 className="text-xl font-semibold text-white mb-2">커플 분석</h4>
          <p className="text-white/80 text-sm text-center">
            두 사람의 매트릭스를 비교하여<br/>관계의 조화와 호환성을 분석
          </p>
        </Button>
      </div>
    </div>
  );
}
