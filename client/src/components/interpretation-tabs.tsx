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
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl p-6 border border-amber-400/30">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Compass className="text-amber-400 mr-2" size={20} />
                당신의 인생 설계도
              </h4>
              <div className="bg-white/10 rounded-lg p-4 mb-4">
                <p className="text-white/90 leading-relaxed text-lg">
                  당신의 핵심 에너지는 <strong className="text-amber-400">{matrixPoints.coreEnergy}번 {coreEnergyCard.name}</strong>입니다. 
                  이는 당신이 <span className="text-amber-300 font-medium">{coreEnergyCard.coreTraits}</span>을 가진 사람임을 의미합니다.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-400/30">
                  <h5 className="font-semibold text-purple-300 mb-2 text-center">영적 목적</h5>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">
                      {matrixPoints.spiritualPurpose}
                    </div>
                    <p className="text-white text-sm">{spiritualPurposeCard.name}</p>
                  </div>
                </div>
                <div className="bg-amber-500/20 rounded-lg p-4 border border-amber-400/30">
                  <h5 className="font-semibold text-amber-300 mb-2 text-center">핵심 에너지</h5>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">
                      {matrixPoints.coreEnergy}
                    </div>
                    <p className="text-white text-sm">{coreEnergyCard.name}</p>
                  </div>
                </div>
                <div className="bg-green-500/20 rounded-lg p-4 border border-green-400/30">
                  <h5 className="font-semibold text-green-300 mb-2 text-center">재능</h5>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">
                      {matrixPoints.talent}
                    </div>
                    <p className="text-white text-sm">{talentCard.name}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-3 flex items-center">
                    <Lightbulb className="text-yellow-400 mr-2" size={16} />
                    핵심 강점
                  </h5>
                  <ul className="text-white/80 text-sm space-y-2">
                    {coreEnergyCard.keyTraits.map((trait, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-2 mt-1">✓</span>
                        <span>{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-3 flex items-center">
                    <Route className="text-blue-400 mr-2" size={16} />
                    성장 포인트
                  </h5>
                  <ul className="text-white/80 text-sm space-y-2">
                    {coreEnergyCard.developmentAreas.map((area, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">→</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-indigo-900/40 to-purple-900/40 rounded-lg border border-indigo-400/30">
                <h5 className="text-lg font-semibold text-white mb-2">💡 인생 가이드</h5>
                <p className="text-white/90 text-sm leading-relaxed">
                  {coreEnergyCard.lifeDirection} 이러한 특성을 바탕으로 당신은 {spiritualPurposeCard.shortDescription}라는 영적 목적을 가지고 있으며, 
                  {talentCard.shortDescription}라는 재능을 통해 세상에 기여할 수 있습니다. 
                  다만 {karmaCard.shortDescription}라는 카르마 과제를 극복해야 진정한 성장을 이룰 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'personality' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 rounded-xl p-6 border border-purple-400/30">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Eye className="text-purple-400 mr-2" size={20} />
                성격 분석 - 당신은 어떤 사람인가요?
              </h4>
              
              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <h5 className="text-lg font-semibold text-white mb-3">🔮 핵심 성격 특성</h5>
                <p className="text-white/90 leading-relaxed">
                  영적 목적을 나타내는 <strong className="text-purple-400">{matrixPoints.spiritualPurpose}번 {spiritualPurposeCard.name}</strong>가 상단에 위치하여, 
                  당신은 <span className="text-purple-300 font-medium">{spiritualPurposeCard.personalityDescription}</span>
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {spiritualPurposeCard.personalityAspects.map((aspect, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4 text-center border border-purple-400/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <div className="text-white text-2xl">{aspect.icon}</div>
                    </div>
                    <h5 className="font-semibold text-white mb-2">{aspect.title}</h5>
                    <p className="text-white/80 text-sm leading-relaxed">{aspect.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-700/20 rounded-lg p-4 border border-indigo-400/30">
                  <h5 className="font-semibold text-indigo-300 mb-3 flex items-center">
                    <span className="mr-2">🌟</span>
                    타인이 보는 당신
                  </h5>
                  <ul className="text-white/80 text-sm space-y-2">
                    {spiritualPurposeCard.keyTraits.slice(0, 3).map((trait, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-indigo-400 mr-2 mt-1">•</span>
                        <span>{trait}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-violet-500/20 to-violet-700/20 rounded-lg p-4 border border-violet-400/30">
                  <h5 className="font-semibold text-violet-300 mb-3 flex items-center">
                    <span className="mr-2">💭</span>
                    내면의 모습
                  </h5>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {coreEnergyCard.personalityDescription} 
                    이는 당신의 내면에 깊이 자리잡은 본질적 특성입니다.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-lg border border-purple-400/30">
                <h5 className="text-lg font-semibold text-white mb-2">🎭 성격 통합 분석</h5>
                <p className="text-white/90 text-sm leading-relaxed">
                  당신의 성격은 <strong className="text-purple-400">{spiritualPurposeCard.name}</strong>의 영적 특성과 
                  <strong className="text-amber-400">{coreEnergyCard.name}</strong>의 핵심 에너지가 조화를 이루고 있습니다. 
                  이는 겉으로는 {spiritualPurposeCard.coreTraits}을 보여주지만, 
                  내면에는 {coreEnergyCard.coreTraits}라는 강력한 동력이 있음을 의미합니다.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'talents' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-500/20 to-green-700/20 rounded-xl p-6 border border-green-400/30">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Wand2 className="text-green-400 mr-2" size={20} />
                천부적 재능 - 당신만의 특별한 능력
              </h4>
              
              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <h5 className="text-lg font-semibold text-white mb-3">🌟 재능의 핵심</h5>
                <p className="text-white/90 leading-relaxed">
                  재능을 나타내는 <strong className="text-green-400">{matrixPoints.talent}번 {talentCard.name}</strong>가 우측에 위치하여, 
                  당신은 <span className="text-green-300 font-medium">{talentCard.talentDescription}</span>
                </p>
              </div>

              <div className="grid gap-4 mb-6">
                {talentCard.talents.map((talent, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4 border border-green-400/20">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                        <div className="text-white text-xl">{talent.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-white mb-2 text-lg">{talent.title}</h5>
                        <p className="text-white/80 text-sm leading-relaxed">{talent.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg p-4 border border-emerald-400/30">
                  <h5 className="font-semibold text-emerald-300 mb-3 flex items-center">
                    <span className="mr-2">💼</span>
                    추천 직업 분야
                  </h5>
                  <ul className="text-white/80 text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1">•</span>
                      <span>창조적 분야 (예술, 디자인, 문학)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1">•</span>
                      <span>상담 및 치유 관련 직업</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1">•</span>
                      <span>리더십이 필요한 관리직</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2 mt-1">•</span>
                      <span>교육 및 멘토링 분야</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg p-4 border border-cyan-400/30">
                  <h5 className="font-semibold text-cyan-300 mb-3 flex items-center">
                    <span className="mr-2">🚀</span>
                    재능 발전 방법
                  </h5>
                  <ul className="text-white/80 text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2 mt-1">→</span>
                      <span>꾸준한 실습과 연습</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2 mt-1">→</span>
                      <span>관련 분야 전문가와의 네트워킹</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2 mt-1">→</span>
                      <span>체계적인 학습과 자격증 취득</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-2 mt-1">→</span>
                      <span>실제 프로젝트 참여 경험</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-green-900/40 to-teal-900/40 rounded-lg border border-green-400/30">
                <h5 className="text-lg font-semibold text-white mb-2">✨ 재능 활용 가이드</h5>
                <p className="text-white/90 text-sm leading-relaxed">
                  당신의 <strong className="text-green-400">{talentCard.name}</strong> 재능은 단순히 개인적 성취를 위한 것이 아닙니다. 
                  이 재능을 통해 타인을 돕고, 사회에 기여할 때 진정한 만족과 성공을 경험하게 됩니다. 
                  특히 {talentCard.talents[0]?.title}과 같은 영역에서 당신만의 독특한 방식으로 세상에 긍정적 영향을 미칠 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'karma' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-xl p-6 border border-red-400/30">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Infinity className="text-red-400 mr-2" size={20} />
                카르마와 인생 과제 - 성장을 위한 도전
              </h4>
              
              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <h5 className="text-lg font-semibold text-white mb-3">🔄 카르마의 의미</h5>
                <p className="text-white/90 leading-relaxed">
                  카르마를 나타내는 <strong className="text-red-400">{matrixPoints.karma}번 {karmaCard.name}</strong>이 하단에 위치하여, 
                  당신의 인생 과제는 <span className="text-red-300 font-medium">{karmaCard.karmaDescription}</span>
                </p>
                <div className="mt-4 p-3 bg-red-900/30 rounded-lg border border-red-400/20">
                  <p className="text-white/80 text-sm">
                    카르마는 극복해야 할 부정적 요소가 아니라, 당신이 더 높은 차원으로 성장하기 위해 주어진 신성한 과제입니다.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg p-4 border border-orange-400/30">
                  <h5 className="font-semibold text-orange-300 mb-3 flex items-center">
                    <TriangleAlert className="text-orange-400 mr-2" size={16} />
                    극복해야 할 패턴
                  </h5>
                  <ul className="space-y-3 text-white/80 text-sm">
                    {karmaCard.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start bg-white/5 rounded p-2">
                        <span className="text-orange-400 mr-2 mt-1 font-bold">⚠</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-lg p-4 border border-emerald-400/30">
                  <h5 className="font-semibold text-emerald-300 mb-3 flex items-center">
                    <Star className="text-emerald-400 mr-2" size={16} />
                    성장의 방향
                  </h5>
                  <ul className="space-y-3 text-white/80 text-sm">
                    {karmaCard.growthDirections.map((direction, index) => (
                      <li key={index} className="flex items-start bg-white/5 rounded p-2">
                        <span className="text-emerald-400 mr-2 mt-1 font-bold">✨</span>
                        <span>{direction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-lg p-4 border border-violet-400/30 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl">🧘</span>
                  </div>
                  <h6 className="font-semibold text-white mb-2">영적 성장</h6>
                  <p className="text-white/70 text-xs">내면의 평화와 균형을 찾아가는 과정</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg p-4 border border-blue-400/30 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl">🤝</span>
                  </div>
                  <h6 className="font-semibold text-white mb-2">관계 개선</h6>
                  <p className="text-white/70 text-xs">타인과의 건강한 관계 형성</p>
                </div>
                <div className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-lg p-4 border border-amber-400/30 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl">⚖️</span>
                  </div>
                  <h6 className="font-semibold text-white mb-2">균형 찾기</h6>
                  <p className="text-white/70 text-xs">삶의 모든 영역에서 조화 이루기</p>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-red-900/40 to-orange-900/40 rounded-lg border border-red-400/30">
                <h5 className="text-lg font-semibold text-white mb-2">🎯 카르마 극복 실행 계획</h5>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h6 className="font-medium text-red-300 mb-2">일일 실천사항</h6>
                    <ul className="text-white/80 text-sm space-y-1">
                      <li>• 자기 성찰과 명상 시간 갖기</li>
                      <li>• 감사하는 마음 표현하기</li>
                      <li>• 타인에게 먼저 이해하려 노력하기</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-medium text-orange-300 mb-2">장기 목표</h6>
                    <ul className="text-white/80 text-sm space-y-1">
                      <li>• 부정적 패턴 인식하고 변화시키기</li>
                      <li>• 영적 성장을 위한 학습 지속하기</li>
                      <li>• 봉사와 나눔을 통한 성장하기</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'relationships' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-pink-500/20 to-pink-700/20 rounded-xl p-6 border border-pink-400/30">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Heart className="text-pink-400 mr-2" size={20} />
                인간관계와 사랑 - 당신의 관계 설계도
              </h4>
              
              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <h5 className="text-lg font-semibold text-white mb-3">💕 관계 스타일</h5>
                <p className="text-white/90 leading-relaxed">
                  당신의 매트릭스는 <span className="text-pink-300 font-medium">{coreEnergyCard.relationshipStyle}</span>을 보여줍니다.
                  이는 당신이 관계에서 추구하는 가치와 패턴을 나타냅니다.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-lg p-4 border border-emerald-400/30">
                  <h5 className="font-semibold text-emerald-300 mb-4 flex items-center">
                    <span className="mr-2">🌟</span>
                    관계에서의 강점
                  </h5>
                  <ul className="space-y-3 text-white/80 text-sm">
                    {coreEnergyCard.relationshipStrengths.map((strength, index) => (
                      <li key={index} className="flex items-start bg-white/5 rounded p-2">
                        <span className="text-emerald-400 mr-2 mt-1 font-bold">✓</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg p-4 border border-amber-400/30">
                  <h5 className="font-semibold text-amber-300 mb-4 flex items-center">
                    <span className="mr-2">⚠️</span>
                    주의해야 할 점
                  </h5>
                  <ul className="space-y-3 text-white/80 text-sm">
                    {coreEnergyCard.relationshipChallenges.map((challenge, index) => (
                      <li key={index} className="flex items-start bg-white/5 rounded p-2">
                        <span className="text-amber-400 mr-2 mt-1 font-bold">!</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-lg p-4 border border-violet-400/30 mb-6">
                <h5 className="font-semibold text-violet-300 mb-4 flex items-center">
                  <span className="mr-2">💫</span>
                  호환성이 높은 타입
                </h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {coreEnergyCard.compatibleTypes.map((type, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-r from-blue-500/30 to-indigo-500/30 text-white px-3 py-2 rounded-lg text-sm text-center border border-blue-400/30"
                    >
                      {type}
                    </div>
                  ))}
                </div>
                <p className="text-white/70 text-sm mt-3">
                  이러한 타입들과는 자연스럽게 조화를 이루며 서로를 보완하는 관계를 형성할 수 있습니다.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-lg p-4 border border-rose-400/30 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl">💑</span>
                  </div>
                  <h6 className="font-semibold text-white mb-2">연애 관계</h6>
                  <p className="text-white/70 text-xs">로맨틱하고 깊이 있는 사랑을 추구</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg p-4 border border-cyan-400/30 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl">👥</span>
                  </div>
                  <h6 className="font-semibold text-white mb-2">친구 관계</h6>
                  <p className="text-white/70 text-xs">진실되고 신뢰할 수 있는 우정</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-400/30 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white text-xl">👨‍👩‍👧‍👦</span>
                  </div>
                  <h6 className="font-semibold text-white mb-2">가족 관계</h6>
                  <p className="text-white/70 text-xs">따뜻하고 보호적인 가족 사랑</p>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-r from-pink-900/40 to-purple-900/40 rounded-lg border border-pink-400/30">
                <h5 className="text-lg font-semibold text-white mb-2">💝 관계 개선 가이드</h5>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h6 className="font-medium text-pink-300 mb-2">건강한 관계를 위한 팁</h6>
                    <ul className="text-white/80 text-sm space-y-1">
                      <li>• 상대방의 입장에서 생각해보기</li>
                      <li>• 솔직하고 열린 대화하기</li>
                      <li>• 서로의 차이점 인정하고 존중하기</li>
                      <li>• 감사의 마음 자주 표현하기</li>
                    </ul>
                  </div>
                  <div>
                    <h6 className="font-medium text-purple-300 mb-2">갈등 해결 방법</h6>
                    <ul className="text-white/80 text-sm space-y-1">
                      <li>• 감정이 격해질 때 잠시 시간 갖기</li>
                      <li>• 비난보다는 자신의 감정 표현하기</li>
                      <li>• 문제의 핵심에 집중하기</li>
                      <li>• 타협점 찾기 위해 노력하기</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
