import { useState } from "react";
import { Stars, Compass, Lightbulb, Route, Eye, Wand2, Infinity, TriangleAlert, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getTarotCard } from "@/lib/tarot-data";

interface InterpretationTabsProps {
  matrixPoints: any;
  mode: 'personal' | 'couple';
}

export default function InterpretationTabs({ matrixPoints, mode }: InterpretationTabsProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '전체 개요', icon: Compass },
    { id: 'personality', label: '성격 분석', icon: Eye },
    { id: 'talents', label: '재능', icon: Wand2 },
    { id: 'karma', label: '카르마', icon: Infinity },
    { id: 'relationships', label: '관계', icon: Heart },
  ];

  const coreEnergyCard = getTarotCard(matrixPoints.coreEnergy);
  const spiritualPurposeCard = getTarotCard(matrixPoints.spiritualPurpose);
  const talentCard = getTarotCard(matrixPoints.talent);
  const karmaCard = getTarotCard(matrixPoints.karma);

  return (
    <div className="glass-card p-8">
      <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
        <Stars className="text-yellow-400 mr-2" size={24} />
        상세 해석
      </h3>
      
      {/* Interpretation Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "ghost"}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white'
                  : 'bg-white/10 text-white/70 hover:text-white hover:bg-white/20'
              }`}
            >
              <Icon className="mr-2" size={16} />
              {tab.label}
            </Button>
          );
        })}
      </div>
      
      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'overview' && (
          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Compass className="text-yellow-400 mr-2" size={20} />
              인생의 전체적인 방향성
            </h4>
            <p className="text-white/80 leading-relaxed mb-4">
              당신의 데스티니 매트릭스에 따르면, 핵심 에너지인 <strong className="text-yellow-400">{matrixPoints.coreEnergy}번 {coreEnergyCard.name}</strong>가 중심에 위치하여 {coreEnergyCard.coreTraits}를 나타냅니다. 이는 당신이 인생에서 {coreEnergyCard.lifeDirection}임을 의미합니다.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2 flex items-center">
                  <Lightbulb className="text-yellow-400 mr-2" size={16} />
                  주요 특징
                </h5>
                <ul className="text-white/70 text-sm space-y-1">
                  {coreEnergyCard.keyTraits.map((trait, index) => (
                    <li key={index}>• {trait}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2 flex items-center">
                  <Route className="text-blue-400 mr-2" size={16} />
                  발전 방향
                </h5>
                <ul className="text-white/70 text-sm space-y-1">
                  {coreEnergyCard.developmentAreas.map((area, index) => (
                    <li key={index}>• {area}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'personality' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-xl p-6 border border-purple-400/30">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Eye className="text-purple-400 mr-2" size={20} />
                성격의 핵심 특성
              </h4>
              <p className="text-white/80 leading-relaxed mb-4">
                영적 목적을 나타내는 <strong className="text-purple-400">{matrixPoints.spiritualPurpose}번 {spiritualPurposeCard.name}</strong>가 상단에 위치하여, 당신은 {spiritualPurposeCard.personalityDescription}
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {spiritualPurposeCard.personalityAspects.map((aspect, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <div className="text-white text-xl">{aspect.icon}</div>
                    </div>
                    <h5 className="font-semibold text-white mb-2">{aspect.title}</h5>
                    <p className="text-white/70 text-sm">{aspect.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'talents' && (
          <div className="bg-gradient-to-br from-green-500/20 to-green-700/20 rounded-xl p-6 border border-green-400/30">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Wand2 className="text-green-400 mr-2" size={20} />
              숨겨진 재능과 잠재력
            </h4>
            <p className="text-white/80 leading-relaxed mb-6">
              재능을 나타내는 <strong className="text-green-400">{matrixPoints.talent}번 {talentCard.name}</strong>가 우측에 위치하여, 당신은 {talentCard.talentDescription}
            </p>
            <div className="space-y-4">
              {talentCard.talents.map((talent, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="text-white text-sm">{talent.icon}</div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-2">{talent.title}</h5>
                      <p className="text-white/70 text-sm">{talent.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'karma' && (
          <div className="bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-xl p-6 border border-red-400/30">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Infinity className="text-red-400 mr-2" size={20} />
              카르마와 인생 과제
            </h4>
            <p className="text-white/80 leading-relaxed mb-6">
              카르마를 나타내는 <strong className="text-red-400">{matrixPoints.karma}번 {karmaCard.name}</strong>이 하단에 위치하여, 당신의 인생 과제는 {karmaCard.karmaDescription}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-white mb-3 flex items-center">
                  <TriangleAlert className="text-yellow-400 mr-2" size={16} />
                  극복해야 할 과제
                </h5>
                <ul className="space-y-2 text-white/70 text-sm">
                  {karmaCard.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-400 mr-2">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-3 flex items-center">
                  <Star className="text-yellow-400 mr-2" size={16} />
                  성장 방향
                </h5>
                <ul className="space-y-2 text-white/70 text-sm">
                  {karmaCard.growthDirections.map((direction, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>{direction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'relationships' && (
          <div className="bg-gradient-to-br from-pink-500/20 to-pink-700/20 rounded-xl p-6 border border-pink-400/30">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Heart className="text-pink-400 mr-2" size={20} />
              인간관계와 사랑
            </h4>
            <p className="text-white/80 leading-relaxed mb-6">
              당신의 매트릭스는 {coreEnergyCard.relationshipStyle}을 보여줍니다.
            </p>
            <div className="space-y-6">
              <div className="bg-white/5 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-3">연애 관계에서의 특징</h5>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-green-400 font-medium mb-2">강점</p>
                    <ul className="text-white/70 space-y-1">
                      {coreEnergyCard.relationshipStrengths.map((strength, index) => (
                        <li key={index}>• {strength}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-orange-400 font-medium mb-2">주의점</p>
                    <ul className="text-white/70 space-y-1">
                      {coreEnergyCard.relationshipChallenges.map((challenge, index) => (
                        <li key={index}>• {challenge}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-3">호환성이 높은 타입</h5>
                <div className="flex flex-wrap gap-2">
                  {coreEnergyCard.compatibleTypes.map((type, index) => (
                    <span 
                      key={index}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
