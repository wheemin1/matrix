// Comprehensive Tarot Card Database for Destiny Matrix Analysis
// Based on traditional Major Arcana meanings adapted for Korean Destiny Matrix system

export interface TarotCard {
  number: number;
  name: string;
  shortDescription: string;
  coreTraits: string;
  lifeDirection: string;
  keyTraits: string[];
  developmentAreas: string[];
  personalityDescription: string;
  personalityAspects: {
    icon: string;
    title: string;
    description: string;
  }[];
  talentDescription: string;
  talents: {
    icon: string;
    title: string;
    description: string;
  }[];
  karmaDescription: string;
  challenges: string[];
  growthDirections: string[];
  relationshipStyle: string;
  relationshipStrengths: string[];
  relationshipChallenges: string[];
  compatibleTypes: string[];
}

const tarotCards: { [key: number]: TarotCard } = {
  1: {
    number: 1,
    name: "마법사(The Magician)",
    shortDescription: "의지력과 창조적 능력을 상징하는 카드",
    coreTraits: "강한 의지력과 창조적 능력",
    lifeDirection: "자신의 의지로 현실을 창조해나가는 사람",
    keyTraits: [
      "뛰어난 집중력과 의지력",
      "창조적이고 혁신적인 사고",
      "목표를 현실화하는 능력",
      "강한 리더십과 카리스마"
    ],
    developmentAreas: [
      "겸손함과 인내심 기르기",
      "타인과의 협력 능력 향상",
      "감정적 균형 유지하기",
      "장기적 비전 수립하기"
    ],
    personalityDescription: "강한 의지력과 창조적 능력을 가진 천상의 마법사 같은 성격입니다.",
    personalityAspects: [
      {
        icon: "⚡",
        title: "의지력",
        description: "목표를 향한 강한 추진력과 집중력을 가지고 있습니다"
      },
      {
        icon: "🎨",
        title: "창조성",
        description: "새로운 아이디어를 현실로 만들어내는 재능이 있습니다"
      },
      {
        icon: "👑",
        title: "리더십",
        description: "타인을 이끌고 영감을 주는 천부적 리더십을 가지고 있습니다"
      }
    ],
    talentDescription: "현실을 창조하고 변화시키는 특별한 능력을 가지고 있습니다.",
    talents: [
      {
        icon: "🎯",
        title: "목표 달성 능력",
        description: "명확한 목표를 설정하고 이를 현실화하는 뛰어난 능력으로, 기업가정신이나 프로젝트 관리 분야에서 탁월한 성과를 낼 수 있습니다."
      },
      {
        icon: "💡",
        title: "혁신적 사고",
        description: "기존의 틀을 벗어난 창의적 해결책을 제시하는 능력으로, 연구개발이나 창작 분야에서 큰 성공을 거둘 수 있습니다."
      }
    ],
    karmaDescription: "자만과 독선을 극복하고 진정한 지혜를 얻는 것입니다.",
    challenges: [
      "자만심과 오만함 극복하기",
      "타인의 의견을 수용하는 겸손함 기르기",
      "즉흥적 결정보다 신중한 계획 세우기",
      "개인적 성취와 사회적 책임의 균형"
    ],
    growthDirections: [
      "내면의 지혜와 직관력 개발",
      "타인을 위한 봉사정신 함양",
      "지속적인 학습과 자기개발",
      "정신적, 영적 성장 추구"
    ],
    relationshipStyle: "강한 매력과 카리스마로 사람들을 끌어들이지만, 때로는 지배적일 수 있는 관계 스타일",
    relationshipStrengths: [
      "강한 매력과 카리스마",
      "파트너에게 영감과 동기 부여",
      "적극적이고 열정적인 사랑",
      "관계에서의 주도권과 안정감 제공"
    ],
    relationshipChallenges: [
      "지나친 통제욕과 독점욕",
      "파트너의 의견을 무시할 가능성",
      "자아 중심적 사고에서 벗어나기",
      "감정적 깊이보다 성취에 집중하는 경향"
    ],
    compatibleTypes: ["여황제 (3번)", "황제 (4번)", "힘 (8번)", "별 (17번)"]
  },
  2: {
    number: 2,
    name: "여사제(The High Priestess)",
    shortDescription: "직관과 내면의 지혜를 상징하는 카드",
    coreTraits: "깊은 직관력과 신비로운 지혜",
    lifeDirection: "내면의 목소리에 귀 기울이며 직관으로 살아가는 사람",
    keyTraits: [
      "뛰어난 직감과 육감",
      "깊은 공감능력과 이해심",
      "신비롭고 매력적인 분위기",
      "내면의 평화와 고요함"
    ],
    developmentAreas: [
      "논리적 사고력 향상",
      "적극적 행동력 기르기",
      "현실적 판단력 개발",
      "소통 능력 향상"
    ],
    personalityDescription: "깊은 직관력과 내면의 지혜를 가진 신비로운 성격입니다.",
    personalityAspects: [
      {
        icon: "🌙",
        title: "직관력",
        description: "상황을 직관적으로 파악하고 숨겨진 진실을 알아차리는 능력이 뛰어납니다"
      },
      {
        icon: "💎",
        title: "내면의 지혜",
        description: "깊은 사색과 명상을 통해 얻은 내면의 지혜가 풍부합니다"
      },
      {
        icon: "🌊",
        title: "공감능력",
        description: "타인의 감정과 상황을 잘 이해하고 공감하는 능력이 탁월합니다"
      }
    ],
    talentDescription: "숨겨진 진실을 보는 눈과 깊은 상담 능력을 가지고 있습니다.",
    talents: [
      {
        icon: "🔮",
        title: "상담 및 치유 능력",
        description: "타인의 마음을 읽고 치유하는 천부적 재능으로, 심리상담이나 치료 분야에서 탁월한 능력을 발휘할 수 있습니다."
      },
      {
        icon: "📚",
        title: "연구 및 탐구 능력",
        description: "깊이 있는 연구와 탐구를 통해 새로운 지식을 발견하는 능력으로, 학문이나 연구 분야에서 뛰어난 성과를 거둘 수 있습니다."
      }
    ],
    karmaDescription: "현실 도피와 소극성을 극복하고 적극적으로 행동하는 것입니다.",
    challenges: [
      "지나친 내향성과 소극적 태도",
      "현실 도피와 회피 성향",
      "의사결정의 우유부단함",
      "감정적 기복과 불안정성"
    ],
    growthDirections: [
      "직관과 논리의 균형적 사용",
      "적극적인 행동력과 실행력 개발",
      "타인과의 소통 능력 향상",
      "현실적 목표 설정과 달성"
    ],
    relationshipStyle: "깊고 신비로운 매력으로 상대방을 끌어들이지만, 때로는 이해하기 어려울 수 있는 관계 스타일",
    relationshipStrengths: [
      "깊은 공감과 이해심",
      "신비롭고 매혹적인 매력",
      "파트너의 감정을 잘 읽고 배려",
      "정신적, 영적 교감 추구"
    ],
    relationshipChallenges: [
      "감정 표현의 어려움",
      "지나친 수동성과 의존성",
      "현실적 문제 해결 회피",
      "감정적 기복으로 인한 불안정성"
    ],
    compatibleTypes: ["마법사 (1번)", "은둔자 (9번)", "달 (18번)", "심판 (20번)"]
  },
  3: {
    number: 3,
    name: "여황제(The Empress)",
    shortDescription: "풍요와 창조성, 모성애를 상징하는 카드",
    coreTraits: "풍부한 창조성과 따뜻한 모성애",
    lifeDirection: "사랑과 아름다움으로 세상을 풍요롭게 만드는 사람",
    keyTraits: [
      "풍부한 감성과 예술적 재능",
      "강한 모성애와 보호본능",
      "자연스러운 매력과 아름다움",
      "관대하고 포용력이 넓음"
    ],
    developmentAreas: [
      "현실적 판단력 향상",
      "자기관리와 절제력 기르기",
      "독립성과 자립심 강화",
      "목표 지향적 사고 개발"
    ],
    personalityDescription: "풍부한 창조성과 따뜻한 모성애를 가진 풍요로운 성격입니다.",
    personalityAspects: [
      {
        icon: "🌸",
        title: "창조성",
        description: "예술적 감각과 창조적 능력이 뛰어나며 아름다운 것을 추구합니다"
      },
      {
        icon: "💝",
        title: "모성애",
        description: "타인을 보살피고 돌보는 강한 모성적 본능을 가지고 있습니다"
      },
      {
        icon: "🌺",
        title: "관대함",
        description: "넓은 포용력과 관대한 마음으로 많은 사람들을 품어줍니다"
      }
    ],
    talentDescription: "창조와 양육의 특별한 재능을 가지고 있습니다.",
    talents: [
      {
        icon: "🎭",
        title: "예술적 창조 능력",
        description: "뛰어난 예술적 감각과 창조 능력으로, 디자인, 음악, 문학 등 창작 분야에서 독특하고 아름다운 작품을 만들어낼 수 있습니다."
      },
      {
        icon: "👥",
        title: "케어 및 교육 능력",
        description: "타인을 돌보고 가르치는 천부적 재능으로, 교육, 의료, 사회복지 분야에서 많은 사람들에게 도움과 희망을 줄 수 있습니다."
      }
    ],
    karmaDescription: "지나친 감정 의존과 소유욕을 극복하고 건전한 독립성을 기르는 것입니다.",
    challenges: [
      "지나친 감정 의존성과 집착",
      "현실감각 부족과 비현실적 기대",
      "과도한 소유욕과 독점욕",
      "자기중심적 사고와 이기심"
    ],
    growthDirections: [
      "독립적이고 자립적인 사고 개발",
      "현실적 목표 설정과 달성 능력",
      "균형 잡힌 감정 관리 능력",
      "타인을 위한 무조건적 사랑 실천"
    ],
    relationshipStyle: "따뜻하고 애정 깊은 관계를 추구하지만, 때로는 과보호적일 수 있는 관계 스타일",
    relationshipStrengths: [
      "따뜻하고 포용력 있는 사랑",
      "파트너를 위한 희생과 헌신",
      "자연스럽고 편안한 분위기 조성",
      "가정적이고 안정적인 관계 추구"
    ],
    relationshipChallenges: [
      "지나친 간섭과 과보호",
      "감정적 의존성과 질투심",
      "현실적 문제보다 감정 우선",
      "상대방의 독립성 제한"
    ],
    compatibleTypes: ["황제 (4번)", "연인 (6번)", "정의 (11번)", "태양 (19번)"]
  },
  4: {
    number: 4,
    name: "황제(The Emperor)",
    shortDescription: "권위와 안정성, 체계적 사고를 상징하는 카드",
    coreTraits: "강한 리더십과 체계적 사고력",
    lifeDirection: "질서와 안정을 바탕으로 체계적으로 목표를 달성하는 사람",
    keyTraits: [
      "뛰어난 리더십과 통솔력",
      "체계적이고 논리적인 사고",
      "강한 책임감과 신뢰성",
      "안정성과 보안 추구"
    ],
    developmentAreas: [
      "유연성과 적응력 기르기",
      "감정 표현과 공감 능력 향상",
      "창의적 사고 개발",
      "권위에 대한 겸손함 배우기"
    ],
    personalityDescription: "강한 리더십과 체계적 사고를 가진 권위적인 성격입니다.",
    personalityAspects: [
      {
        icon: "👑",
        title: "리더십",
        description: "자연스럽게 리더의 역할을 맡고 타인을 이끄는 능력이 뛰어납니다"
      },
      {
        icon: "🏗️",
        title: "체계성",
        description: "모든 일을 체계적이고 논리적으로 접근하며 질서를 중시합니다"
      },
      {
        icon: "🛡️",
        title: "안정성",
        description: "안정적이고 믿을 수 있는 성격으로 주변 사람들에게 신뢰를 줍니다"
      }
    ],
    talentDescription: "조직 관리와 시스템 구축의 탁월한 능력을 가지고 있습니다.",
    talents: [
      {
        icon: "🏢",
        title: "경영 및 관리 능력",
        description: "조직을 효율적으로 운영하고 관리하는 뛰어난 능력으로, 경영진이나 관리직에서 탁월한 성과를 거둘 수 있습니다."
      },
      {
        icon: "⚖️",
        title: "시스템 구축 능력",
        description: "복잡한 시스템을 체계적으로 구축하고 운영하는 능력으로, 법률, 정치, 공공행정 분야에서 뛰어난 능력을 발휘할 수 있습니다."
      }
    ],
    karmaDescription: "권위주의와 고집을 극복하고 진정한 섬김의 리더십을 배우는 것입니다.",
    challenges: [
      "권위주의적 태도와 독선",
      "지나친 통제욕과 고집",
      "감정 표현의 어려움과 경직성",
      "변화에 대한 저항과 보수성"
    ],
    growthDirections: [
      "겸손하고 섬기는 리더십 개발",
      "유연성과 창의성 함양",
      "감정적 소통 능력 향상",
      "타인의 의견을 수용하는 열린 마음"
    ],
    relationshipStyle: "안정적이고 보호적인 관계를 추구하지만, 때로는 권위적일 수 있는 관계 스타일",
    relationshipStrengths: [
      "안정적이고 신뢰할 수 있는 파트너",
      "가족과 파트너에 대한 강한 보호본능",
      "현실적이고 책임감 있는 태도",
      "장기적 관계에 대한 헌신"
    ],
    relationshipChallenges: [
      "지나친 통제욕과 권위적 태도",
      "감정 표현의 서툼과 경직성",
      "파트너의 자유와 독립성 제한",
      "변화를 받아들이기 어려워함"
    ],
    compatibleTypes: ["여황제 (3번)", "마법사 (1번)", "전차 (7번)", "세계 (21번)"]
  },
  5: {
    number: 5,
    name: "교황(The Hierophant)",
    shortDescription: "전통과 지혜, 영적 가르침을 상징하는 카드",
    coreTraits: "깊은 지혜와 영적 통찰력",
    lifeDirection: "전통적 가치와 영적 지혜로 타인을 이끄는 사람",
    keyTraits: [
      "깊은 철학적 사고와 지혜",
      "강한 도덕성과 윤리의식",
      "전통과 문화에 대한 존중",
      "가르치고 이끄는 능력"
    ],
    developmentAreas: [
      "고정관념과 편견 극복",
      "새로운 변화 수용하기",
      "개방적 사고 개발",
      "실용적 접근법 배우기"
    ],
    personalityDescription: "깊은 지혜와 영적 통찰력을 가진 스승 같은 성격입니다.",
    personalityAspects: [
      {
        icon: "📿",
        title: "영성",
        description: "깊은 영적 통찰력과 종교적, 철학적 사고를 가지고 있습니다"
      },
      {
        icon: "📖",
        title: "지혜",
        description: "오랜 경험과 학습을 통해 얻은 깊은 지혜를 소유하고 있습니다"
      },
      {
        icon: "🎓",
        title: "가르침",
        description: "타인을 가르치고 올바른 길로 인도하는 천부적 능력이 있습니다"
      }
    ],
    talentDescription: "가르침과 상담을 통해 타인의 성장을 돕는 특별한 능력을 가지고 있습니다.",
    talents: [
      {
        icon: "👨‍🏫",
        title: "교육 및 상담 능력",
        description: "깊은 지혜와 경험을 바탕으로 타인을 가르치고 상담하는 뛰어난 능력으로, 교육자나 상담사로서 많은 사람들의 성장을 도울 수 있습니다."
      },
      {
        icon: "⛪",
        title: "영적 지도 능력",
        description: "영적, 종교적 지도력으로 사람들의 내면적 성장과 치유를 이끄는 능력으로, 종교계나 영성 분야에서 중요한 역할을 할 수 있습니다."
      }
    ],
    karmaDescription: "교조주의와 경직성을 극복하고 열린 마음으로 새로운 지혜를 받아들이는 것입니다.",
    challenges: [
      "교조주의와 융통성 부족",
      "변화에 대한 저항과 보수성",
      "타인에게 가치관을 강요하는 성향",
      "현실감각 부족과 이상주의"
    ],
    growthDirections: [
      "열린 마음으로 새로운 지혜 수용",
      "유연하고 포용적인 사고 개발",
      "실용적이고 현실적인 접근법",
      "다양성과 차이를 인정하는 태도"
    ],
    relationshipStyle: "깊이 있고 영적인 교감을 추구하지만, 때로는 교훈적일 수 있는 관계 스타일",
    relationshipStrengths: [
      "깊이 있는 정신적 교감",
      "도덕적이고 윤리적인 관계 추구",
      "파트너의 성장과 발전을 지원",
      "안정적이고 진실한 사랑"
    ],
    relationshipChallenges: [
      "지나친 교훈과 훈계",
      "경직된 사고와 융통성 부족",
      "파트너의 자유로운 표현 제한",
      "감정보다 이성을 우선시하는 경향"
    ],
    compatibleTypes: ["여사제 (2번)", "은둔자 (9번)", "절제 (14번)", "심판 (20번)"]
  },
  6: {
    number: 6,
    name: "연인(The Lovers)",
    shortDescription: "사랑과 선택, 조화를 상징하는 카드",
    coreTraits: "깊은 사랑과 조화로운 관계 추구",
    lifeDirection: "사랑과 아름다운 관계를 통해 조화로운 삶을 만들어가는 사람",
    keyTraits: [
      "뛰어난 감수성과 로맨틱함",
      "조화와 균형을 추구하는 성향",
      "강한 매력과 사교성",
      "아름다움과 예술에 대한 감각"
    ],
    developmentAreas: [
      "결정력과 주관 강화",
      "현실적 판단력 향상",
      "독립성과 자립심 기르기",
      "갈등 해결 능력 개발"
    ],
    personalityDescription: "깊은 사랑과 조화로운 관계를 추구하는 로맨틱한 성격입니다.",
    personalityAspects: [
      {
        icon: "💕",
        title: "사랑",
        description: "깊고 순수한 사랑을 추구하며 관계에서 진정한 행복을 찾습니다"
      },
      {
        icon: "⚖️",
        title: "조화",
        description: "모든 관계에서 균형과 조화를 중시하며 갈등을 피하려 합니다"
      },
      {
        icon: "✨",
        title: "매력",
        description: "자연스러운 매력과 사교성으로 많은 사람들에게 사랑받습니다"
      }
    ],
    talentDescription: "사람들 사이의 조화와 소통을 이끌어내는 특별한 능력을 가지고 있습니다.",
    talents: [
      {
        icon: "🤝",
        title: "중재 및 조정 능력",
        description: "갈등하는 사람들 사이에서 중재자 역할을 하며 화해를 이끌어내는 뛰어난 능력으로, 상담, 중재, 외교 분야에서 탁월한 성과를 낼 수 있습니다."
      },
      {
        icon: "🎨",
        title: "미적 감각과 창작 능력",
        description: "뛰어난 미적 감각과 예술적 재능으로, 디자인, 패션, 미용, 예술 분야에서 아름다운 작품과 서비스를 제공할 수 있습니다."
      }
    ],
    karmaDescription: "우유부단함과 타인 의존성을 극복하고 독립적인 판단력을 기르는 것입니다.",
    challenges: [
      "결정력 부족과 우유부단함",
      "타인에게 과도하게 의존하는 성향",
      "갈등 회피와 현실 도피 경향",
      "감정적 기복과 불안정성"
    ],
    growthDirections: [
      "독립적이고 주체적인 사고 개발",
      "명확한 기준과 가치관 정립",
      "갈등을 건설적으로 해결하는 능력",
      "자기 자신을 사랑하는 법 배우기"
    ],
    relationshipStyle: "깊고 로맨틱한 사랑을 추구하지만, 때로는 의존적일 수 있는 관계 스타일",
    relationshipStrengths: [
      "깊고 로맨틱한 사랑 표현",
      "파트너와의 조화와 균형 추구",
      "상대방을 위한 희생과 배려",
      "아름답고 감동적인 관계 창조"
    ],
    relationshipChallenges: [
      "과도한 의존성과 집착",
      "갈등 상황에서의 회피",
      "결정을 파트너에게 맡기는 경향",
      "이상과 현실의 괴리로 인한 실망"
    ],
    compatibleTypes: ["여황제 (3번)", "정의 (11번)", "별 (17번)", "태양 (19번)"]
  },
  7: {
    number: 7,
    name: "전차(The Chariot)",
    shortDescription: "의지력과 승리, 목표 달성을 상징하는 카드",
    coreTraits: "강한 의지력과 목표 달성 능력",
    lifeDirection: "명확한 목표를 가지고 의지력으로 승리를 쟁취하는 사람",
    keyTraits: [
      "뛰어난 의지력과 결단력",
      "목표 지향적이고 추진력 있음",
      "강한 자제력과 통제력",
      "승부욕과 경쟁심이 강함"
    ],
    developmentAreas: [
      "감정과 이성의 균형 맞추기",
      "인내심과 지구력 기르기",
      "타인과의 협력 능력 향상",
      "장기적 비전 수립"
    ],
    personalityDescription: "강한 의지력과 목표 달성 능력을 가진 승리자의 성격입니다.",
    personalityAspects: [
      {
        icon: "🏆",
        title: "승리 의지",
        description: "어떤 어려움도 극복하고 목표를 달성하려는 강한 의지를 가지고 있습니다"
      },
      {
        icon: "🎯",
        title: "목표 지향",
        description: "명확한 목표를 설정하고 이를 달성하기 위해 체계적으로 행동합니다"
      },
      {
        icon: "⚡",
        title: "추진력",
        description: "빠른 실행력과 강한 추진력으로 변화를 주도해나갑니다"
      }
    ],
    talentDescription: "변화를 주도하고 목표를 달성하는 뛰어난 실행력을 가지고 있습니다.",
    talents: [
      {
        icon: "🚀",
        title: "프로젝트 관리 능력",
        description: "복잡한 프로젝트를 체계적으로 관리하고 성공적으로 완수하는 뛰어난 능력으로, 기업 경영이나 프로젝트 매니지먼트 분야에서 탁월한 성과를 거둘 수 있습니다."
      },
      {
        icon: "🎖️",
        title: "위기 관리 능력",
        description: "위기 상황에서도 침착함을 잃지 않고 문제를 해결하는 능력으로, 위기관리나 응급 상황 대응 분야에서 뛰어난 리더십을 발휘할 수 있습니다."
      }
    ],
    karmaDescription: "성급함과 독단적 행동을 극복하고 협력과 인내를 배우는 것입니다.",
    challenges: [
      "성급함과 조급한 판단",
      "독단적 행동과 고집",
      "감정 통제의 어려움",
      "타인과의 협력 부족"
    ],
    growthDirections: [
      "감정과 이성의 균형 유지",
      "인내심과 지구력 개발",
      "타인과의 협력과 소통",
      "장기적 관점에서의 계획 수립"
    ],
    relationshipStyle: "열정적이고 적극적인 관계를 추구하지만, 때로는 지배적일 수 있는 관계 스타일",
    relationshipStrengths: [
      "열정적이고 적극적인 사랑",
      "파트너를 위한 강한 보호 의지",
      "목표를 함께 달성하려는 의지",
      "변화와 모험을 추구하는 관계"
    ],
    relationshipChallenges: [
      "지나친 통제욕과 독점욕",
      "성급함으로 인한 갈등",
      "감정적 폭발과 충동적 행동",
      "파트너의 의견을 무시하는 경향"
    ],
    compatibleTypes: ["황제 (4번)", "마법사 (1번)", "힘 (8번)", "세계 (21번)"]
  },
  8: {
    number: 8,
    name: "힘(Strength)",
    shortDescription: "내면의 힘과 용기, 인내를 상징하는 카드",
    coreTraits: "내면의 강인함과 온화한 힘",
    lifeDirection: "내면의 힘으로 어려움을 극복하고 타인을 치유하는 사람",
    keyTraits: [
      "강인한 정신력과 인내심",
      "온화하고 자비로운 성격",
      "자기 통제력과 절제력",
      "치유와 회복의 능력"
    ],
    developmentAreas: [
      "자기 주장과 적극성 기르기",
      "현실적 판단력 향상",
      "경계 설정 능력 개발",
      "리더십 역량 강화"
    ],
    personalityDescription: "내면의 강인함과 온화한 힘을 가진 치유자의 성격입니다.",
    personalityAspects: [
      {
        icon: "💪",
        title: "내면의 힘",
        description: "외적 어려움을 내면의 강인함으로 극복하는 불굴의 정신력을 가지고 있습니다"
      },
      {
        icon: "🕊️",
        title: "온화함",
        description: "강함 속에 온화함을 품고 있어 타인을 편안하게 만들어줍니다"
      },
      {
        icon: "🌿",
        title: "치유력",
        description: "상처받은 마음을 치유하고 희망을 주는 특별한 능력이 있습니다"
      }
    ],
    talentDescription: "타인을 치유하고 회복시키는 특별한 능력을 가지고 있습니다.",
    talents: [
      {
        icon: "🏥",
        title: "치유 및 회복 능력",
        description: "신체적, 정신적 상처를 치유하는 뛰어난 능력으로, 의료, 간호, 치료 분야에서 많은 사람들에게 희망과 치유를 제공할 수 있습니다."
      },
      {
        icon: "🎯",
        title: "동물 및 자연과의 교감",
        description: "동물과 자연과 깊이 교감하는 능력으로, 수의학, 농업, 환경 보호 분야에서 특별한 성과를 거둘 수 있습니다."
      }
    ],
    karmaDescription: "과도한 희생정신과 자기 소외를 극복하고 건강한 자아를 찾는 것입니다.",
    challenges: [
      "지나친 희생정신과 자기 무시",
      "경계 설정의 어려움",
      "수동적 태도와 소극성",
      "자기 주장의 부족"
    ],
    growthDirections: [
      "건강한 자기사랑과 자존감",
      "적절한 경계 설정 능력",
      "자기 의견을 표현하는 용기",
      "균형 잡힌 희생과 배려"
    ],
    relationshipStyle: "따뜻하고 헌신적인 관계를 추구하지만, 때로는 과도하게 희생적일 수 있는 관계 스타일",
    relationshipStrengths: [
      "무조건적이고 희생적인 사랑",
      "파트너의 상처와 아픔을 치유",
      "인내심과 포용력으로 관계 유지",
      "안정적이고 신뢰할 수 있는 파트너"
    ],
    relationshipChallenges: [
      "지나친 희생으로 자신을 잃음",
      "파트너의 문제를 대신 짊어지려 함",
      "자기 의견 표현의 어려움",
      "불균형한 관계에 빠지기 쉬움"
    ],
    compatibleTypes: ["전차 (7번)", "은둔자 (9번)", "절제 (14번)", "태양 (19번)"]
  },
  9: {
    number: 9,
    name: "은둔자(The Hermit)",
    shortDescription: "내면의 탐구와 지혜, 영적 성장을 상징하는 카드",
    coreTraits: "깊은 내면 탐구와 영적 지혜",
    lifeDirection: "고독한 성찰을 통해 지혜를 얻고 타인을 인도하는 사람",
    keyTraits: [
      "깊은 사색과 내면 탐구",
      "독립적이고 자립적인 성향",
      "풍부한 지혜와 통찰력",
      "영적 성장과 깨달음 추구"
    ],
    developmentAreas: [
      "사회적 소통 능력 향상",
      "적극적 행동력 기르기",
      "실용적 접근법 개발",
      "타인과의 협력 능력 강화"
    ],
    personalityDescription: "깊은 내면 탐구와 영적 지혜를 추구하는 현자의 성격입니다.",
    personalityAspects: [
      {
        icon: "🔍",
        title: "탐구심",
        description: "진리와 지혜를 찾기 위해 끊임없이 내면을 탐구하고 공부합니다"
      },
      {
        icon: "🧘",
        title: "독립성",
        description: "혼자만의 시간을 소중히 여기며 독립적으로 사고하고 행동합니다"
      },
      {
        icon: "💎",
        title: "지혜",
        description: "오랜 성찰과 경험을 통해 얻은 깊은 지혜와 통찰력을 가지고 있습니다"
      }
    ],
    talentDescription: "깊은 연구와 탐구를 통해 새로운 지식을 발견하는 능력을 가지고 있습니다.",
    talents: [
      {
        icon: "📚",
        title: "연구 및 학술 능력",
        description: "깊이 있는 연구와 학술적 탐구를 통해 새로운 지식을 발견하는 뛰어난 능력으로, 학자나 연구원으로서 학문 발전에 큰 기여를 할 수 있습니다."
      },
      {
        icon: "🔮",
        title: "상담 및 영적 지도 능력",
        description: "깊은 지혜와 통찰력으로 타인의 고민을 해결해주는 능력으로, 상담사나 영적 지도자로서 많은 사람들에게 방향을 제시할 수 있습니다."
      }
    ],
    karmaDescription: "고립과 소외를 극복하고 지혜를 세상과 나누는 것입니다.",
    challenges: [
      "사회적 고립과 소외감",
      "지나친 내향성과 소극성",
      "현실 도피와 회피 성향",
      "타인과의 소통 어려움"
    ],
    growthDirections: [
      "지혜를 타인과 나누는 용기",
      "사회적 소통과 참여",
      "실용적 문제 해결 능력",
      "균형 잡힌 사회적 관계"
    ],
    relationshipStyle: "깊이 있는 정신적 교감을 추구하지만, 때로는 거리감을 두는 관계 스타일",
    relationshipStrengths: [
      "깊이 있는 정신적 교감",
      "진정성 있고 의미 있는 관계",
      "파트너의 성장을 지원하는 지혜",
      "독립적이면서도 깊은 사랑"
    ],
    relationshipChallenges: [
      "감정 표현의 어려움",
      "사회적 관계에서의 소극성",
      "지나친 독립성으로 인한 거리감",
      "현실적 문제 해결 회피"
    ],
    compatibleTypes: ["여사제 (2번)", "교황 (5번)", "힘 (8번)", "달 (18번)"]
  },
  10: {
    number: 10,
    name: "운명의 수레바퀴(Wheel of Fortune)",
    shortDescription: "변화와 순환, 운명의 전환을 상징하는 카드",
    coreTraits: "변화 적응력과 순환의 지혜",
    lifeDirection: "삶의 변화와 순환을 이해하고 적응하며 성장하는 사람",
    keyTraits: [
      "뛰어난 적응력과 유연성",
      "변화에 대한 긍정적 태도",
      "직관력과 통찰력",
      "균형감과 조화 추구"
    ],
    developmentAreas: [
      "계획성과 목표 의식 강화",
      "안정성과 지속성 기르기",
      "현실적 판단력 향상",
      "주도적 행동력 개발"
    ],
    personalityDescription: "변화와 순환의 법칙을 이해하고 받아들이는 지혜로운 성격입니다.",
    personalityAspects: [
      {
        icon: "🔄",
        title: "적응력",
        description: "변화하는 환경에 빠르게 적응하고 새로운 상황을 받아들입니다"
      },
      {
        icon: "🌀",
        title: "순환 인식",
        description: "삶의 기복과 순환을 자연스럽게 받아들이고 균형을 유지합니다"
      },
      {
        icon: "🎲",
        title: "직관력",
        description: "상황을 직관적으로 파악하고 적절한 타이밍을 알아차립니다"
      }
    ],
    talentDescription: "변화를 기회로 만들고 새로운 가능성을 발견하는 능력을 가지고 있습니다.",
    talents: [
      {
        icon: "💼",
        title: "기회 포착 능력",
        description: "변화하는 상황에서 새로운 기회를 빠르게 포착하고 활용하는 뛰어난 능력으로, 투자, 마케팅, 기업 기획 분야에서 탁월한 성과를 거둘 수 있습니다."
      },
      {
        icon: "🌐",
        title: "네트워킹 및 연결 능력",
        description: "다양한 사람들과 상황을 연결하고 새로운 관계를 만들어내는 능력으로, 중개업, 컨설팅, 국제 업무 분야에서 뛰어난 능력을 발휘할 수 있습니다."
      }
    ],
    karmaDescription: "운에만 의존하지 않고 주체적으로 운명을 개척하는 것입니다.",
    challenges: [
      "계획성 부족과 즉흥적 행동",
      "안정성과 지속성 부족",
      "외부 환경에만 의존하는 경향",
      "목표 의식과 방향성 부족"
    ],
    growthDirections: [
      "체계적인 계획과 목표 설정",
      "내적 안정성과 중심 확립",
      "주도적이고 능동적인 행동",
      "장기적 비전과 지속적 노력"
    ],
    relationshipStyle: "다양하고 변화하는 관계를 즐기지만, 때로는 불안정할 수 있는 관계 스타일",
    relationshipStrengths: [
      "다양한 사람들과 어울리는 능력",
      "관계의 변화를 자연스럽게 수용",
      "새로운 경험과 모험을 함께 추구",
      "상황에 따른 유연한 대응"
    ],
    relationshipChallenges: [
      "관계에서의 불안정성",
      "commitment에 대한 어려움",
      "감정의 기복과 변덕",
      "깊이 있는 관계 형성의 어려움"
    ],
    compatibleTypes: ["마법사 (1번)", "연인 (6번)", "정의 (11번)", "세계 (21번)"]
  },
  11: {
    number: 11,
    name: "정의(Justice)",
    shortDescription: "공정함과 균형, 도덕적 판단을 상징하는 카드",
    coreTraits: "강한 정의감과 공정한 판단력",
    lifeDirection: "공정함과 진실을 추구하며 균형 잡힌 삶을 사는 사람",
    keyTraits: [
      "강한 정의감과 도덕성",
      "공정하고 객관적인 판단력",
      "균형감과 조화 추구",
      "진실과 정직함을 중시"
    ],
    developmentAreas: [
      "유연성과 관용 기르기",
      "감정적 표현 능력 향상",
      "창의적 사고 개발",
      "인간미와 따뜻함 표현"
    ],
    personalityDescription: "강한 정의감과 공정한 판단력을 가진 균형잡힌 성격입니다.",
    personalityAspects: [
      {
        icon: "⚖️",
        title: "공정성",
        description: "모든 상황을 공정하고 객관적으로 판단하며 편견 없이 접근합니다"
      },
      {
        icon: "🎯",
        title: "원칙주의",
        description: "명확한 원칙과 기준을 가지고 일관된 행동을 보입니다"
      },
      {
        icon: "🤝",
        title: "신뢰성",
        description: "정직하고 신뢰할 수 있는 성격으로 많은 사람들의 존경을 받습니다"
      }
    ],
    talentDescription: "갈등을 조정하고 공정한 해결책을 찾는 뛰어난 능력을 가지고 있습니다.",
    talents: [
      {
        icon: "⚖️",
        title: "법률 및 중재 능력",
        description: "복잡한 법적 문제를 해결하고 갈등을 중재하는 뛰어난 능력으로, 법조인, 중재자, 조정위원으로서 공정한 판결과 해결책을 제시할 수 있습니다."
      },
      {
        icon: "📊",
        title: "분석 및 평가 능력",
        description: "객관적이고 체계적인 분석을 통해 정확한 평가를 내리는 능력으로, 감사, 평가, 컨설팅 분야에서 신뢰할 수 있는 전문가가 될 수 있습니다."
      }
    ],
    karmaDescription: "경직성과 융통성 부족을 극복하고 인간적 따뜻함을 배우는 것입니다.",
    challenges: [
      "지나친 완벽주의와 경직성",
      "융통성 부족과 고집",
      "감정 표현의 어려움",
      "인간적 따뜻함 부족"
    ],
    growthDirections: [
      "유연하고 관대한 사고 개발",
      "감정적 소통과 표현 능력",
      "창의적이고 혁신적인 접근",
      "인간미와 따뜻함 표현"
    ],
    relationshipStyle: "공정하고 균형 잡힌 관계를 추구하지만, 때로는 차가울 수 있는 관계 스타일",
    relationshipStrengths: [
      "공정하고 평등한 관계 추구",
      "정직하고 신뢰할 수 있는 파트너",
      "갈등을 합리적으로 해결",
      "안정적이고 일관된 사랑"
    ],
    relationshipChallenges: [
      "감정보다 이성을 우선시",
      "완벽주의로 인한 부담감",
      "융통성 부족으로 인한 경직성",
      "따뜻한 감정 표현의 어려움"
    ],
    compatibleTypes: ["여황제 (3번)", "연인 (6번)", "운명의 수레바퀴 (10번)", "절제 (14번)"]
  },
  12: {
    number: 12,
    name: "매달린 사람(The Hanged Man)",
    shortDescription: "희생과 관점의 전환, 내적 성장을 상징하는 카드",
    coreTraits: "희생정신과 다른 관점에서 보는 지혜",
    lifeDirection: "희생과 인내를 통해 새로운 깨달음을 얻는 사람",
    keyTraits: [
      "강한 희생정신과 이타심",
      "다양한 관점에서 보는 능력",
      "인내심과 끈기",
      "내적 성장과 깨달음 추구"
    ],
    developmentAreas: [
      "적극성과 행동력 기르기",
      "자기 주장과 의견 표현",
      "현실적 판단력 향상",
      "자기 가치 인식 강화"
    ],
    personalityDescription: "희생정신과 다른 관점에서 보는 지혜를 가진 성찰적인 성격입니다.",
    personalityAspects: [
      {
        icon: "🤲",
        title: "희생정신",
        description: "타인을 위해 자신을 희생할 줄 아는 이타적인 마음을 가지고 있습니다"
      },
      {
        icon: "🔄",
        title: "관점 전환",
        description: "상황을 다양한 각도에서 바라보며 새로운 해석을 찾아냅니다"
      },
      {
        icon: "🧘‍♂️",
        title: "인내심",
        description: "어려운 상황에서도 참고 견디며 기다릴 줄 아는 인내심이 있습니다"
      }
    ],
    talentDescription: "어려운 상황에서도 새로운 가능성을 발견하는 특별한 통찰력을 가지고 있습니다.",
    talents: [
      {
        icon: "💡",
        title: "창의적 문제해결 능력",
        description: "기존의 방식과 다른 독창적인 접근으로 문제를 해결하는 뛰어난 능력으로, 창작, 디자인, 연구개발 분야에서 혁신적인 아이디어를 제시할 수 있습니다."
      },
      {
        icon: "🎭",
        title: "예술적 표현 능력",
        description: "고통과 희생을 예술로 승화시키는 특별한 능력으로, 문학, 영화, 음악 등 예술 분야에서 깊이 있고 감동적인 작품을 창조할 수 있습니다."
      }
    ],
    karmaDescription: "자기 희생에만 머물지 않고 적극적으로 세상을 변화시키는 것입니다.",
    challenges: [
      "지나친 희생정신과 자기 무시",
      "수동적 태도와 소극성",
      "현실 도피와 회피 경향",
      "자기 가치를 낮게 평가"
    ],
    growthDirections: [
      "건강한 자기사랑과 자존감",
      "적극적이고 능동적인 행동",
      "현실적 목표 설정과 실행",
      "자신의 가치와 능력 인정"
    ],
    relationshipStyle: "헌신적이고 희생적인 관계를 추구하지만, 때로는 일방적일 수 있는 관계 스타일",
    relationshipStrengths: [
      "무조건적이고 헌신적인 사랑",
      "파트너를 위한 희생과 배려",
      "깊이 있고 의미 있는 관계",
      "어려운 시기에도 함께하는 의지"
    ],
    relationshipChallenges: [
      "일방적이고 불균형한 관계",
      "자기 의견 표현의 어려움",
      "지나친 희생으로 인한 소외",
      "수동적 태도로 인한 갈등"
    ],
    compatibleTypes: ["힘 (8번)", "은둔자 (9번)", "죽음 (13번)", "달 (18번)"]
  },
  13: {
    number: 13,
    name: "죽음(Death)",
    shortDescription: "변화와 재생, 새로운 시작을 상징하는 카드",
    coreTraits: "변화와 재생의 에너지",
    lifeDirection: "끊임없는 변화와 재생을 통해 새로운 자아로 거듭나는 사람",
    keyTraits: [
      "강한 변화 의지와 혁신성",
      "재생과 회복의 능력",
      "깊은 통찰력과 직관력",
      "과감한 결단력과 용기"
    ],
    developmentAreas: [
      "안정성과 지속성 기르기",
      "점진적 변화 방법 학습",
      "타인에 대한 배려심 향상",
      "감정적 안정감 확보"
    ],
    personalityDescription: "끊임없는 변화와 재생을 통해 성장하는 변화의 달인입니다.",
    personalityAspects: [
      {
        icon: "🦋",
        title: "변화",
        description: "끊임없이 자신을 변화시키고 새로운 모습으로 거듭나는 능력이 있습니다"
      },
      {
        icon: "🌱",
        title: "재생",
        description: "어떤 좌절이나 실패에서도 다시 일어나는 강한 회복력을 가지고 있습니다"
      },
      {
        icon: "⚡",
        title: "혁신",
        description: "기존의 틀을 깨고 새로운 방식을 창조하는 혁신적 사고를 가지고 있습니다"
      }
    ],
    talentDescription: "낡은 것을 새롭게 변화시키고 재생시키는 특별한 능력을 가지고 있습니다.",
    talents: [
      {
        icon: "🔄",
        title: "조직 변화 관리 능력",
        description: "침체된 조직이나 시스템을 혁신하고 변화시키는 뛰어난 능력으로, 기업 구조조정이나 혁신 관리 분야에서 탁월한 성과를 거둘 수 있습니다."
      },
      {
        icon: "🏥",
        title: "치유 및 재활 능력",
        description: "손상된 것을 회복시키고 재생시키는 능력으로, 의료, 재활, 치료 분야에서 환자들의 회복과 재생을 도울 수 있습니다."
      }
    ],
    karmaDescription: "파괴적 변화가 아닌 건설적 변화를 통해 성장하는 것입니다.",
    challenges: [
      "지나친 급진성과 파괴적 성향",
      "안정성 부족과 불안감",
      "타인에 대한 고려 부족",
      "감정적 기복과 극단성"
    ],
    growthDirections: [
      "점진적이고 건설적인 변화",
      "안정성과 변화의 균형",
      "타인을 배려하는 변화 추진",
      "감정적 안정감과 평정심"
    ],
    relationshipStyle: "강렬하고 변화무쌍한 관계를 추구하지만, 때로는 불안정할 수 있는 관계 스타일",
    relationshipStrengths: [
      "강렬하고 깊이 있는 사랑",
      "관계의 문제를 근본적으로 해결",
      "파트너와 함께 성장하고 변화",
      "새로운 경험과 자극 제공"
    ],
    relationshipChallenges: [
      "급격한 변화로 인한 불안감",
      "관계에서의 극단적 행동",
      "안정성 부족으로 인한 갈등",
      "파트너에게 변화를 강요하는 경향"
    ],
    compatibleTypes: ["매달린 사람 (12번)", "탑 (16번)", "달 (18번)", "심판 (20번)"]
  },
  14: {
    number: 14,
    name: "절제(Temperance)",
    shortDescription: "조화와 균형, 중용을 상징하는 카드",
    coreTraits: "조화로운 균형감과 중용의 지혜",
    lifeDirection: "모든 것의 균형을 맞추며 조화롭게 살아가는 사람",
    keyTraits: [
      "뛰어난 균형감과 조화 추구",
      "온화하고 평화로운 성격",
      "인내심과 절제력",
      "치유와 회복의 능력"
    ],
    developmentAreas: [
      "결단력과 추진력 기르기",
      "적극성과 주도성 향상",
      "명확한 목표 의식 확립",
      "리더십 역량 개발"
    ],
    personalityDescription: "모든 것의 균형을 맞추며 조화롭게 살아가는 평화로운 성격입니다.",
    personalityAspects: [
      {
        icon: "⚖️",
        title: "균형감",
        description: "모든 상황에서 균형을 찾고 극단을 피하는 지혜로운 판단력을 가지고 있습니다"
      },
      {
        icon: "🕊️",
        title: "평화",
        description: "갈등을 조정하고 평화로운 분위기를 만드는 천부적 능력이 있습니다"
      },
      {
        icon: "💧",
        title: "치유",
        description: "상처받은 마음을 달래고 치유하는 부드러운 에너지를 가지고 있습니다"
      }
    ],
    talentDescription: "서로 다른 것들을 조화롭게 융합하고 균형을 맞추는 특별한 능력을 가지고 있습니다.",
    talents: [
      {
        icon: "🤝",
        title: "갈등 조정 및 중재 능력",
        description: "대립하는 의견들을 조화롭게 통합하고 갈등을 해결하는 뛰어난 능력으로, 중재자, 상담사, 외교관으로서 평화로운 해결책을 제시할 수 있습니다."
      },
      {
        icon: "🎨",
        title: "창작 및 융합 능력",
        description: "서로 다른 요소들을 조화롭게 결합하여 새로운 것을 창조하는 능력으로, 디자인, 음악, 요리 등 융합적 창작 분야에서 독특한 작품을 만들어낼 수 있습니다."
      }
    ],
    karmaDescription: "우유부단함과 소극성을 극복하고 적극적인 행동력을 기르는 것입니다.",
    challenges: [
      "우유부단함과 결정력 부족",
      "지나친 수동성과 소극성",
      "갈등 회피와 현실 도피",
      "자기 주장의 부족"
    ],
    growthDirections: [
      "명확한 판단과 결단력",
      "적극적이고 주도적인 행동",
      "건설적인 갈등 해결",
      "자신의 의견을 분명히 표현"
    ],
    relationshipStyle: "조화롭고 평화로운 관계를 추구하지만, 때로는 갈등을 회피할 수 있는 관계 스타일",
    relationshipStrengths: [
      "조화롭고 평화로운 관계",
      "파트너와의 균형 잡힌 소통",
      "갈등을 부드럽게 해결",
      "안정적이고 편안한 분위기"
    ],
    relationshipChallenges: [
      "갈등 상황에서의 회피",
      "자기 의견 표현의 어려움",
      "우유부단한 결정으로 인한 답답함",
      "너무 수동적인 관계 태도"
    ],
    compatibleTypes: ["교황 (5번)", "힘 (8번)", "정의 (11번)", "별 (17번)"]
  },
  15: {
    number: 15,
    name: "악마(The Devil)",
    shortDescription: "유혹과 속박, 물질적 집착을 상징하는 카드",
    coreTraits: "강한 카리스마와 깊은 통찰력",
    lifeDirection: "내면의 그림자를 직면하고 진정한 자유를 찾는 사람",
    keyTraits: [
      "강렬한 매력과 카리스마",
      "깊은 심리 통찰력",
      "물질적 성공 능력",
      "강한 의지력과 집념"
    ],
    developmentAreas: [
      "집착과 욕망 조절하기",
      "영적 가치 인식하기",
      "타인에 대한 배려심 기르기",
      "겸손함과 감사하는 마음"
    ],
    personalityDescription: "강렬한 매력과 깊은 통찰력을 가지고 있지만 때로는 집착에 빠질 수 있는 성격입니다.",
    personalityAspects: [
      {
        icon: "🔥",
        title: "강렬함",
        description: "강렬한 에너지와 카리스마로 사람들을 끌어당기는 매력이 있습니다"
      },
      {
        icon: "👁️",
        title: "통찰력",
        description: "타인의 숨겨진 동기와 욕망을 꿰뚫어 보는 깊은 통찰력을 가지고 있습니다"
      },
      {
        icon: "💎",
        title: "성취욕",
        description: "물질적, 사회적 성공에 대한 강한 욕구와 이를 달성하는 능력이 있습니다"
      }
    ],
    talentDescription: "타인의 숨겨진 욕망을 파악하고 강력한 영향력을 행사하는 능력을 가지고 있습니다.",
    talents: [
      {
        icon: "💼",
        title: "비즈니스 및 협상 능력",
        description: "강력한 설득력과 협상 능력으로 비즈니스에서 큰 성공을 거둘 수 있으며, 투자, 부동산, 금융 분야에서 탁월한 성과를 낼 수 있습니다."
      },
      {
        icon: "🎭",
        title: "심리 분석 및 상담 능력",
        description: "인간의 어두운 면과 무의식을 이해하는 깊은 통찰력으로, 심리치료나 상담 분야에서 다른 사람들이 해결하기 어려운 문제들을 다룰 수 있습니다."
      }
    ],
    karmaDescription: "물질적 집착과 이기심을 극복하고 진정한 영적 자유를 얻는 것입니다.",
    challenges: [
      "물질적 욕망과 집착",
      "권력욕과 지배욕",
      "이기적이고 자기중심적 사고",
      "윤리적 기준의 모호함"
    ],
    growthDirections: [
      "영적 가치와 내면 성장",
      "타인을 위한 봉사와 배려",
      "겸손함과 감사하는 마음",
      "진정한 자유와 해방 추구"
    ],
    relationshipStyle: "강렬하고 열정적인 관계를 추구하지만, 때로는 소유욕이 강할 수 있는 관계 스타일",
    relationshipStrengths: [
      "강렬하고 열정적인 사랑",
      "파트너에 대한 강한 보호욕",
      "깊이 있고 진실한 관계",
      "파트너의 숨겨진 면을 이해"
    ],
    relationshipChallenges: [
      "지나친 소유욕과 질투심",
      "통제하려는 성향",
      "물질적 조건을 중시하는 경향",
      "감정적 조작을 할 가능성"
    ],
    compatibleTypes: ["마법사 (1번)", "전차 (7번)", "죽음 (13번)", "탑 (16번)"]
  },
  16: {
    number: 16,
    name: "탑(The Tower)",
    shortDescription: "파괴와 해방, 급격한 변화를 상징하는 카드",
    coreTraits: "혁명적 변화와 깨달음의 에너지",
    lifeDirection: "기존의 틀을 깨고 진정한 자유와 진실을 찾는 사람",
    keyTraits: [
      "혁명적이고 파격적인 사고",
      "강한 자유 의지와 독립성",
      "진실을 추구하는 용기",
      "급격한 변화 적응력"
    ],
    developmentAreas: [
      "안정성과 지속성 기르기",
      "타인에 대한 배려심 향상",
      "점진적 변화 방법 학습",
      "감정적 균형 유지하기"
    ],
    personalityDescription: "기존의 틀을 깨고 새로운 진실을 추구하는 혁명가적 성격입니다.",
    personalityAspects: [
      {
        icon: "⚡",
        title: "혁명성",
        description: "기존의 시스템과 관념을 과감히 뒤엎는 혁명적 에너지를 가지고 있습니다"
      },
      {
        icon: "🔓",
        title: "자유",
        description: "어떤 속박이나 제약도 받지 않으려는 강한 자유 의지를 가지고 있습니다"
      },
      {
        icon: "💡",
        title: "깨달음",
        description: "순간적으로 진실을 깨닫고 새로운 통찰을 얻는 능력이 뛰어납니다"
      }
    ],
    talentDescription: "기존 시스템의 문제점을 파악하고 혁신적인 해결책을 제시하는 능력을 가지고 있습니다.",
    talents: [
      {
        icon: "🚀",
        title: "혁신 및 개혁 능력",
        description: "기존의 낡은 시스템을 개혁하고 혁신하는 뛰어난 능력으로, 스타트업이나 혁신적 기업에서 새로운 패러다임을 만들어낼 수 있습니다."
      },
      {
        icon: "📢",
        title: "사회 비판 및 개선 능력",
        description: "사회의 문제점을 날카롭게 지적하고 개선 방안을 제시하는 능력으로, 언론, 시민운동, 사회개혁 분야에서 중요한 역할을 할 수 있습니다."
      }
    ],
    karmaDescription: "파괴적 에너지를 건설적으로 승화시키고 진정한 혁신을 이루는 것입니다.",
    challenges: [
      "지나친 급진성과 파괴성",
      "안정성 부족과 불안감",
      "타인에 대한 고려 부족",
      "감정적 폭발과 극단성"
    ],
    growthDirections: [
      "건설적이고 점진적인 변화",
      "안정성과 혁신의 균형",
      "타인을 배려하는 개혁 추진",
      "감정적 안정감과 평정심"
    ],
    relationshipStyle: "자유롭고 독립적인 관계를 추구하지만, 때로는 예측불가할 수 있는 관계 스타일",
    relationshipStrengths: [
      "자유롭고 독립적인 관계",
      "새로운 경험과 자극 제공",
      "진실하고 솔직한 소통",
      "관계의 문제를 근본적으로 해결"
    ],
    relationshipChallenges: [
      "급격한 변화로 인한 불안감",
      "관계에서의 예측 불가능성",
      "안정성 부족으로 인한 갈등",
      "파트너에게 변화를 강요하는 경향"
    ],
    compatibleTypes: ["죽음 (13번)", "악마 (15번)", "달 (18번)", "심판 (20번)"]
  },
  17: {
    number: 17,
    name: "별(The Star)",
    shortDescription: "희망과 영감, 미래에 대한 신념을 상징하는 카드",
    coreTraits: "희망과 영감을 주는 빛나는 에너지",
    lifeDirection: "희망을 잃지 않고 꿈을 현실로 만들어가는 사람",
    keyTraits: [
      "밝은 희망과 낙관주의",
      "영감을 주는 카리스마",
      "예술적 감각과 창조성",
      "미래에 대한 확신"
    ],
    developmentAreas: [
      "현실적 판단력 향상",
      "체계적인 계획 수립",
      "인내심과 지구력 기르기",
      "실용적 접근법 개발"
    ],
    personalityDescription: "희망과 영감을 주는 빛나는 에너지를 가진 꿈꾸는 이상주의자입니다.",
    personalityAspects: [
      {
        icon: "⭐",
        title: "희망",
        description: "어떤 어려운 상황에서도 희망을 잃지 않고 긍정적으로 생각합니다"
      },
      {
        icon: "💫",
        title: "영감",
        description: "타인에게 영감과 동기를 주는 특별한 에너지를 가지고 있습니다"
      },
      {
        icon: "🌟",
        title: "이상",
        description: "아름다운 이상과 꿈을 품고 이를 실현하려는 강한 의지가 있습니다"
      }
    ],
    talentDescription: "타인에게 희망과 영감을 주며 꿈을 현실로 만드는 특별한 능력을 가지고 있습니다.",
    talents: [
      {
        icon: "🎨",
        title: "예술적 창작 능력",
        description: "뛰어난 예술적 감각과 창조력으로 아름답고 영감을 주는 작품을 만들어내는 능력으로, 예술, 디자인, 엔터테인먼트 분야에서 많은 사람들에게 감동을 줄 수 있습니다."
      },
      {
        icon: "💡",
        title: "비전 제시 및 동기부여 능력",
        description: "밝은 미래 비전을 제시하고 사람들에게 희망과 동기를 부여하는 능력으로, 교육자나 코치, 리더로서 많은 사람들의 성장을 도울 수 있습니다."
      }
    ],
    karmaDescription: "현실과 이상의 괴리를 극복하고 실제적인 성과를 만들어내는 것입니다.",
    challenges: [
      "현실감각 부족과 비현실적 기대",
      "계획성 부족과 즉흥적 행동",
      "인내심 부족과 성급함",
      "실용성보다 이상 우선"
    ],
    growthDirections: [
      "현실적이고 체계적인 계획",
      "꾸준함과 인내심 개발",
      "실용적 접근법과 실행력",
      "이상과 현실의 균형"
    ],
    relationshipStyle: "로맨틱하고 이상적인 관계를 추구하지만, 때로는 비현실적일 수 있는 관계 스타일",
    relationshipStrengths: [
      "로맨틱하고 꿈같은 사랑",
      "파트너에게 희망과 영감 제공",
      "아름답고 이상적인 관계 추구",
      "미래에 대한 긍정적 비전 공유"
    ],
    relationshipChallenges: [
      "현실적 문제 해결 어려움",
      "이상과 현실의 괴리로 인한 실망",
      "계획성 부족으로 인한 불안정",
      "파트너에게 과도한 기대"
    ],
    compatibleTypes: ["연인 (6번)", "절제 (14번)", "태양 (19번)", "세계 (21번)"]
  },
  18: {
    number: 18,
    name: "달(The Moon)",
    shortDescription: "직감과 무의식, 신비로운 힘을 상징하는 카드",
    coreTraits: "신비로운 직감과 무의식의 지혜",
    lifeDirection: "직감과 직관에 의존하며 신비로운 세계를 탐구하는 사람",
    keyTraits: [
      "뛰어난 직감과 육감",
      "신비롭고 몽환적인 분위기",
      "강한 상상력과 창조성",
      "무의식과 꿈의 세계에 민감"
    ],
    developmentAreas: [
      "논리적 사고력 향상",
      "현실적 판단력 개발",
      "명확한 소통 능력",
      "안정성과 지속성 기르기"
    ],
    personalityDescription: "신비로운 직감과 무의식의 지혜를 가진 몽환적인 성격입니다.",
    personalityAspects: [
      {
        icon: "🌙",
        title: "직감",
        description: "논리를 뛰어넘는 뛰어난 직감과 육감으로 상황을 파악합니다"
      },
      {
        icon: "🔮",
        title: "신비성",
        description: "신비롭고 몽환적인 분위기로 사람들을 매혹시키는 특별한 매력이 있습니다"
      },
      {
        icon: "💭",
        title: "상상력",
        description: "풍부한 상상력과 창조적 영감으로 독특한 아이디어를 만들어냅니다"
      }
    ],
    talentDescription: "무의식의 세계를 탐구하고 신비로운 영역에서 특별한 통찰을 얻는 능력을 가지고 있습니다.",
    talents: [
      {
        icon: "🎭",
        title: "예술적 표현 능력",
        description: "무의식과 꿈의 세계를 예술로 표현하는 독특한 능력으로, 초현실주의적 예술이나 환상적인 작품을 통해 사람들에게 새로운 경험을 제공할 수 있습니다."
      },
      {
        icon: "🔍",
        title: "심층 심리 분석 능력",
        description: "무의식의 깊은 층을 탐구하고 숨겨진 진실을 찾아내는 능력으로, 심리학이나 정신분석 분야에서 다른 사람들이 발견하지 못하는 통찰을 제공할 수 있습니다."
      }
    ],
    karmaDescription: "환상과 현실을 구분하고 직감을 현실적으로 활용하는 지혜를 배우는 것입니다.",
    challenges: [
      "현실과 환상의 구분 어려움",
      "논리적 사고의 부족",
      "불안감과 두려움",
      "의사소통의 모호함"
    ],
    growthDirections: [
      "직감과 논리의 균형적 활용",
      "명확하고 구체적인 표현",
      "현실적 목표 설정과 실행",
      "안정감과 확신 개발"
    ],
    relationshipStyle: "신비롭고 감성적인 관계를 추구하지만, 때로는 이해하기 어려울 수 있는 관계 스타일",
    relationshipStrengths: [
      "깊고 신비로운 감성적 교감",
      "파트너의 무의식적 욕구 이해",
      "로맨틱하고 몽환적인 분위기",
      "직감적으로 파트너를 배려"
    ],
    relationshipChallenges: [
      "감정의 기복과 불안정성",
      "명확한 의사표현의 어려움",
      "현실적 문제 해결 회피",
      "질투심과 의심이 많음"
    ],
    compatibleTypes: ["여사제 (2번)", "은둔자 (9번)", "매달린 사람 (12번)", "탑 (16번)"]
  },
  19: {
    number: 19,
    name: "태양(The Sun)",
    shortDescription: "기쁨과 성공, 생명력을 상징하는 카드",
    coreTraits: "밝은 에너지와 긍정적 생명력",
    lifeDirection: "기쁨과 성공을 통해 자신과 타인을 빛나게 하는 사람",
    keyTraits: [
      "밝고 긍정적인 에너지",
      "자신감과 카리스마",
      "성공에 대한 강한 의지",
      "타인을 행복하게 하는 능력"
    ],
    developmentAreas: [
      "겸손함과 배려심 기르기",
      "실패에 대한 대처 능력",
      "깊이 있는 사고 개발",
      "타인의 어려움에 대한 이해"
    ],
    personalityDescription: "밝고 긍정적인 에너지로 주변을 행복하게 만드는 태양 같은 성격입니다.",
    personalityAspects: [
      {
        icon: "☀️",
        title: "밝음",
        description: "언제나 밝고 긍정적인 에너지로 주변 사람들을 행복하게 만듭니다"
      },
      {
        icon: "👑",
        title: "자신감",
        description: "자신의 능력을 믿고 당당하게 행동하는 강한 자신감을 가지고 있습니다"
      },
      {
        icon: "🎉",
        title: "성공",
        description: "성공에 대한 강한 의지와 이를 달성하는 능력을 가지고 있습니다"
      }
    ],
    talentDescription: "사람들에게 기쁨과 희망을 주며 성공을 이끌어내는 특별한 리더십을 가지고 있습니다.",
    talents: [
      {
        icon: "🎤",
        title: "대중 소통 및 리더십 능력",
        description: "밝고 긍정적인 에너지로 많은 사람들을 이끌고 동기를 부여하는 뛰어난 능력으로, 대중 연설가나 리더로서 조직과 사회에 활력을 불어넣을 수 있습니다."
      },
      {
        icon: "🌟",
        title: "엔터테인먼트 및 기획 능력",
        description: "사람들을 즐겁게 하고 행복한 경험을 제공하는 능력으로, 엔터테인먼트, 이벤트 기획, 관광 분야에서 많은 사람들에게 기쁨을 선사할 수 있습니다."
      }
    ],
    karmaDescription: "자만과 우월감을 극복하고 진정한 겸손함을 배우는 것입니다.",
    challenges: [
      "자만심과 오만함",
      "실패에 대한 두려움",
      "표면적 사고와 깊이 부족",
      "타인의 어려움에 대한 무관심"
    ],
    growthDirections: [
      "겸손하고 배려하는 마음",
      "실패를 통한 성장과 학습",
      "깊이 있는 사고와 성찰",
      "타인의 고통에 대한 공감"
    ],
    relationshipStyle: "밝고 활발한 관계를 추구하지만, 때로는 표면적일 수 있는 관계 스타일",
    relationshipStrengths: [
      "밝고 즐거운 관계 분위기",
      "파트너에게 자신감과 용기 제공",
      "적극적이고 열정적인 사랑",
      "함께 성공하고 성장하는 관계"
    ],
    relationshipChallenges: [
      "표면적 관계에 머무르기 쉬움",
      "파트너의 어려움을 과소평가",
      "자기중심적 사고와 행동",
      "갈등 상황에서의 무책임함"
    ],
    compatibleTypes: ["여황제 (3번)", "연인 (6번)", "힘 (8번)", "별 (17번)"]
  },
  20: {
    number: 20,
    name: "심판(Judgement)",
    shortDescription: "각성과 재생, 새로운 소명을 상징하는 카드",
    coreTraits: "각성과 재생의 힘",
    lifeDirection: "과거를 정리하고 새로운 사명을 찾아 거듭나는 사람",
    keyTraits: [
      "강한 자기 성찰과 반성",
      "재생과 회복의 능력",
      "사명감과 소명의식",
      "공정한 판단력"
    ],
    developmentAreas: [
      "과도한 자기비판 조절",
      "현재에 집중하는 능력",
      "실용적 접근법 개발",
      "타인에 대한 관용 기르기"
    ],
    personalityDescription: "과거를 성찰하고 새로운 사명을 찾아 거듭나는 각성한 성격입니다.",
    personalityAspects: [
      {
        icon: "⚡",
        title: "각성",
        description: "자신과 현실에 대한 깊은 깨달음과 각성을 경험하는 능력이 있습니다"
      },
      {
        icon: "🔄",
        title: "재생",
        description: "과거의 실수나 상처를 극복하고 새롭게 태어나는 회복력이 뛰어납니다"
      },
      {
        icon: "📯",
        title: "사명감",
        description: "자신의 인생 목적과 사명을 깨닫고 이를 실천하려는 의지가 강합니다"
      }
    ],
    talentDescription: "타인의 각성과 성장을 도우며 새로운 기회를 창조하는 특별한 능력을 가지고 있습니다.",
    talents: [
      {
        icon: "🏛️",
        title: "교육 및 멘토링 능력",
        description: "자신의 경험과 깨달음을 바탕으로 타인의 성장과 각성을 도우는 뛰어난 능력으로, 교육자나 멘토로서 많은 사람들의 인생에 긍정적 변화를 가져올 수 있습니다."
      },
      {
        icon: "⚖️",
        title: "공정한 평가 및 판단 능력",
        description: "객관적이고 공정한 시각으로 상황을 평가하고 판단하는 능력으로, 심사위원이나 평가자로서 공정하고 의미있는 기준을 제시할 수 있습니다."
      }
    ],
    karmaDescription: "과거에 얽매이지 않고 새로운 미래를 적극적으로 창조하는 것입니다.",
    challenges: [
      "과거에 대한 과도한 집착",
      "자기비판과 죄책감",
      "완벽주의로 인한 스트레스",
      "변화에 대한 두려움"
    ],
    growthDirections: [
      "과거를 용서하고 받아들이기",
      "현재와 미래에 집중하기",
      "자기 자신에 대한 관용",
      "새로운 도전에 대한 용기"
    ],
    relationshipStyle: "깊이 있고 의미 있는 관계를 추구하지만, 때로는 과도하게 분석적일 수 있는 관계 스타일",
    relationshipStrengths: [
      "깊이 있고 의미 있는 관계",
      "파트너의 성장과 발전을 지원",
      "진실하고 정직한 소통",
      "과거의 실수를 용서하는 마음"
    ],
    relationshipChallenges: [
      "과도한 분석과 판단",
      "완벽한 관계에 대한 기대",
      "과거의 상처에 얽매임",
      "감정보다 이성을 우선시"
    ],
    compatibleTypes: ["여사제 (2번)", "교황 (5번)", "죽음 (13번)", "세계 (21번)"]
  },
  21: {
    number: 21,
    name: "세계(The World)",
    shortDescription: "완성과 성취, 조화로운 통합을 상징하는 카드",
    coreTraits: "완성과 성취의 에너지",
    lifeDirection: "모든 것을 통합하고 완성하여 조화로운 전체를 만드는 사람",
    keyTraits: [
      "완성과 성취에 대한 의지",
      "통합적이고 전체적인 시각",
      "조화롭고 균형잡힌 성격",
      "글로벌하고 포용적인 사고"
    ],
    developmentAreas: [
      "겸손함과 초심 유지",
      "지속적인 성장 의지",
      "세부사항에 대한 관심",
      "새로운 도전에 대한 용기"
    ],
    personalityDescription: "모든 것을 조화롭게 통합하고 완성시키는 성취자의 성격입니다.",
    personalityAspects: [
      {
        icon: "🌍",
        title: "통합",
        description: "서로 다른 요소들을 조화롭게 통합하여 완전한 전체를 만드는 능력이 있습니다"
      },
      {
        icon: "🏆",
        title: "성취",
        description: "높은 목표를 설정하고 이를 완성시키는 뛰어난 성취 능력을 가지고 있습니다"
      },
      {
        icon: "🤲",
        title: "포용",
        description: "다양성을 인정하고 포용하는 넓은 마음과 글로벌한 시각을 가지고 있습니다"
      }
    ],
    talentDescription: "다양한 분야를 통합하고 큰 비전을 현실화하는 특별한 능력을 가지고 있습니다.",
    talents: [
      {
        icon: "🌐",
        title: "글로벌 비즈니스 및 통합 관리 능력",
        description: "다양한 문화와 분야를 통합하여 글로벌한 성과를 만들어내는 뛰어난 능력으로, 국제 비즈니스나 대규모 프로젝트 관리에서 탁월한 성과를 거둘 수 있습니다."
      },
      {
        icon: "🎭",
        title: "종합 예술 및 기획 능력",
        description: "다양한 예술 장르를 통합하여 완성도 높은 작품을 만들어내는 능력으로, 종합 예술이나 대규모 문화 기획 분야에서 감동적이고 의미있는 작품을 창조할 수 있습니다."
      }
    ],
    karmaDescription: "성취에 안주하지 않고 지속적으로 성장하며 타인에게 기여하는 것입니다.",
    challenges: [
      "성취에 대한 안주와 나태",
      "완벽주의로 인한 스트레스",
      "새로운 도전에 대한 주저",
      "자만심과 우월감"
    ],
    growthDirections: [
      "지속적인 학습과 성장",
      "겸손한 마음과 초심 유지",
      "타인을 위한 봉사와 기여",
      "새로운 영역에 대한 도전"
    ],
    relationshipStyle: "성숙하고 안정적인 관계를 추구하지만, 때로는 완벽을 요구할 수 있는 관계 스타일",
    relationshipStrengths: [
      "성숙하고 안정적인 관계",
      "파트너와 함께 성장하고 발전",
      "조화롭고 균형잡힌 관계",
      "서로의 다양성을 인정하고 포용"
    ],
    relationshipChallenges: [
      "완벽한 관계에 대한 높은 기대",
      "성취에만 집중하여 감정 소홀",
      "파트너에게 과도한 기준 요구",
      "변화와 성장에 대한 강요"
    ],
    compatibleTypes: ["황제 (4번)", "전차 (7번)", "운명의 수레바퀴 (10번)", "별 (17번)"]
  },
  22: {
    number: 22,
    name: "바보(The Fool)",
    shortDescription: "새로운 시작과 순수함, 무한한 가능성을 상징하는 카드",
    coreTraits: "순수함과 무한한 가능성",
    lifeDirection: "순수한 마음으로 새로운 모험을 시작하며 끊임없이 배우는 사람",
    keyTraits: [
      "순수하고 천진난만한 성격",
      "새로운 시작에 대한 용기",
      "무한한 가능성과 잠재력",
      "자유롭고 구속받지 않는 영혼"
    ],
    developmentAreas: [
      "신중함과 계획성 기르기",
      "현실적 판단력 향상",
      "책임감과 지속성 개발",
      "타인에 대한 배려심 향상"
    ],
    personalityDescription: "순수한 마음으로 새로운 모험을 시작하는 영원한 초심자의 성격입니다.",
    personalityAspects: [
      {
        icon: "🌱",
        title: "순수함",
        description: "어떤 상황에서도 순수하고 천진난만한 마음을 잃지 않습니다"
      },
      {
        icon: "🚀",
        title: "모험심",
        description: "새로운 것에 대한 호기심과 모험심으로 끊임없이 도전합니다"
      },
      {
        icon: "🎈",
        title: "자유로움",
        description: "어떤 틀이나 제약에도 얽매이지 않는 자유로운 영혼을 가지고 있습니다"
      }
    ],
    talentDescription: "새로운 분야를 개척하고 혁신적인 아이디어를 제시하는 특별한 능력을 가지고 있습니다.",
    talents: [
      {
        icon: "💡",
        title: "혁신 및 창업 능력",
        description: "기존에 없던 새로운 아이디어를 현실화하는 뛰어난 능력으로, 스타트업이나 새로운 사업 분야를 개척하여 혁신적인 변화를 만들어낼 수 있습니다."
      },
      {
        icon: "🎨",
        title: "창의적 표현 및 예술 능력",
        description: "순수하고 자유로운 상상력으로 독창적인 예술 작품을 만들어내는 능력으로, 실험적이고 혁신적인 예술 분야에서 새로운 장르를 개척할 수 있습니다."
      }
    ],
    karmaDescription: "순수함을 잃지 않으면서도 지혜와 책임감을 기르는 것입니다.",
    challenges: [
      "경솔함과 무모한 행동",
      "계획성 부족과 즉흥성",
      "책임감과 지속성 부족",
      "현실감각과 신중함 부족"
    ],
    growthDirections: [
      "순수함과 지혜의 균형",
      "신중한 계획과 실행",
      "책임감 있는 행동",
      "타인에 대한 배려와 이해"
    ],
    relationshipStyle: "자유롭고 순수한 관계를 추구하지만, 때로는 미성숙할 수 있는 관계 스타일",
    relationshipStrengths: [
      "순수하고 진실한 사랑",
      "새로운 경험과 모험을 함께 추구",
      "자유롭고 구속받지 않는 관계",
      "끊임없는 놀라움과 즐거움 제공"
    ],
    relationshipChallenges: [
      "관계에 대한 책임감 부족",
      "변덕스럽고 일관성 없는 행동",
      "깊이 있는 관계 형성의 어려움",
      "파트너의 필요를 간과하는 경향"
    ],
    compatibleTypes: ["마법사 (1번)", "여사제 (2번)", "운명의 수레바퀴 (10번)", "태양 (19번)"]
  }
};

export function getTarotCard(number: number): TarotCard {
  const card = tarotCards[number];
  if (!card) {
    // Fallback for numbers outside 1-22 range
    const fallbackNumber = ((number - 1) % 22) + 1;
    return tarotCards[fallbackNumber] || tarotCards[1];
  }
  return card;
}

export function getAllTarotCards(): TarotCard[] {
  return Object.values(tarotCards);
}

// Export for use in interpretation components
export { tarotCards };
