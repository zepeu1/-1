import { Character, TimelineEvent, Mission } from './types';

export const characters: Character[] = [
  // K.S.A
  {
    name: "강마리", gender: "Female", age: 23, mbti: "ISTP",
    keywords: ["침착한", "무심한"],
    description: "이론보다 감각과 기술, 외면과 내면 모두 차가움",
    quote: "말 길게 하지 마. 타겟 좌표만 줘.",
    weapon: "저격소총", position: "K.S.A 2과 팀장", ability: "침묵 (주위의 모든 소리제거)", rank: "1급",
    appearance: "붉은색 포니테일, 금안", code: "c", faction: "K.S.A"
  },
  {
    name: "이윤슬", gender: "Female", age: 26, mbti: "ISTJ",
    keywords: ["원칙주의", "효율성", "무감정"],
    description: "철저한 계획, 감정표현이 거의 없음",
    quote: "불필요한 대화는 생략해. 비효율적이니까.",
    weapon: "샷건", position: "K.S.A 협회장", ability: "이동 (순식간에 상대의 뒤로 이동)", rank: "0급",
    appearance: "은색 단발, 적안", code: "d", faction: "K.S.A"
  },
  {
    name: "홍예서", gender: "Female", age: 24, mbti: "ISTP",
    keywords: ["완벽주의", "침착한"],
    description: "냉소적인 유머감각(뼈때리는 말들), 외유내강",
    quote: "잡담은 끝났나요? 장전이나 하세요.",
    weapon: "기관단총", position: "K.S.A 2과 팀원", ability: "전투보조 (자신의 총알의 속도와 파괴력 증가)", rank: "2급",
    appearance: "귀여운 얼굴, 주황색 양갈래, 금안", code: "g", faction: "K.S.A"
  },
  {
    name: "권예준", gender: "Male", age: 23, mbti: "INFJ",
    keywords: ["완벽주의", "고독한"],
    description: "무심한 듯 섬세함, 나서기 보단 뒤에서 판을 짜줌",
    quote: "타겟 다운. 다음 위치로 이동하겠습니다.",
    weapon: "돌격소총", position: "K.S.A 2과 팀원", ability: "프레임 (1초를 10번 으로 나눠 순식간에 움직임)", rank: "2급",
    appearance: "노란색 머리, 하늘색 눈동자", code: "h", faction: "K.S.A"
  },
  {
    name: "오선우", gender: "Male", age: 28, mbti: "ENTJ",
    keywords: ["원칙주의", "효율성"],
    description: "철저한 자기관리, 무거운 책임감, 절대적인 카리스마",
    quote: "확인 사살까지 끝내라. 자비는 사치다.",
    weapon: "돌격소총", position: "K.S.A 1과 팀장", ability: "각성 (일시적으로 신체능력 극대화)", rank: "1급",
    appearance: "흑발, 적안", code: "j", faction: "K.S.A"
  },
  {
    name: "서나리", gender: "Female", age: 26, mbti: "ISFJ",
    keywords: ["예의바름", "원칙중시"],
    description: "사소한 배려, 안정성 중시",
    quote: "다친 곳은 없으신가요? ...다행이네요. 장전이나 도와드리죠.",
    weapon: "돌격소총", position: "K.S.A 1과 팀원", ability: "정밀사격 (명중확률 극대화)", rank: "2급",
    appearance: "푸른색 단발 머리, 금안", code: "k", faction: "K.S.A"
  },
  {
    name: "정나연", gender: "Female", age: 21, mbti: "INFP",
    keywords: ["무심함", "몽환적"],
    description: "직관력이 좋음, 공허함 속에 천재성, 낮은 사회적 에너지, 자신만의 세계",
    quote: "여긴 너무 시끄러워. 빨리 끝내고 자고 싶어.",
    weapon: "경기관총", position: "K.S.A 1과 팀원", ability: "예지 (5초 후를 미리 예지)", rank: "2급",
    appearance: "은색 단발 머리, 금안", code: "l", faction: "K.S.A"
  },
  // White Bone Cult
  {
    name: "김아인", gender: "Female", age: 27, mbti: "ENFJ",
    keywords: ["신비주의", "성스러움", "냉혹함"],
    description: "심미주의자, 결단력이 좋음, 압도적 위압감",
    quote: "백골의 뜻 아래, 모든 혼란은 정화될 것입니다.",
    weapon: "장검", position: "백골교 교주", ability: "잔상 (잔상이 보일 정도의 속도 움직임, 참격)", rank: "0급",
    appearance: "적갈색 장발, 금안", code: "q", faction: "White Bone Cult"
  },
  {
    name: "백태린", gender: "Female", age: 24, mbti: "ISFP",
    keywords: ["조용함", "잔혹함"],
    description: "교주에게 맹목적 의존, 뛰어난 집중력",
    quote: "교주님이 말씀하셨어요. 당신은 정화되어야 한다고.",
    weapon: "권총", position: "백골교 신자", ability: "분신 (자신의 분신을 3개까지 소환가능)", rank: "2급",
    appearance: "하늘색 장발, 흑안", code: "p", faction: "White Bone Cult"
  },
  {
    name: "정하영", gender: "Female", age: 22, mbti: "INFP",
    keywords: ["몽환적", "수동적"],
    description: "평소 유순하나 명령 시 잔혹, 극도로 불안해 함",
    quote: "방아쇠를 당길 때마다 마음이 아파요. 하지만... 멈출 순 없네요.",
    weapon: "권총", position: "백골교 신자", ability: "무통 (고통의 감각 제거)", rank: "2급",
    appearance: "초록색 단발, 금안", code: "n", faction: "White Bone Cult"
  },
  {
    name: "이연서", gender: "Female", age: 26, mbti: "ISTJ",
    keywords: ["냉철함", "결벽증"],
    description: "머리가 좋음, 사이코패스, 현실주의, 이성적",
    quote: "질서를 어지럽히는 자에게 줄 자비는... 제게 남아있지 않아서요",
    weapon: "권총", position: "백골교 집행자", ability: "정신간섭 (상대의 정신에 간섭하며 혼동을 줌)", rank: "1급",
    appearance: "보라색 장발, 금안", code: "m", faction: "White Bone Cult"
  },
  // Pollution
  {
    name: "배한결", gender: "Male", age: 30, mbti: "ISTP",
    keywords: ["고독함", "냉소적"],
    description: "허무주의적 태도, 쿨한 성격, 뛰어난 전투 효율, 자유주의자",
    quote: "내 끝은 내가 정해. 너희 같은 놈들 손엔 안 죽어.",
    weapon: "오염된 카타나", position: "오염체 (정신유지)", ability: "공간참•오염 (공간을 베는 오염된 참격)", rank: "0급",
    appearance: "흑발, 청안, 삿갓", code: "w", faction: "Pollution"
  },
  {
    name: "마세은", gender: "Female", age: 27, mbti: "ENFJ",
    keywords: ["퇴폐적", "자기애"],
    description: "지적인 쾌락주의, 여유로운 광기, 변덕스러움, 뒤틀림을 진화로 받아들임",
    quote: "나랑 같이 이 검은 바다에 빠져볼래? 생각보다 따뜻할지도 몰라.",
    weapon: "곰방대", position: "오염체 (정신유지)", ability: "흑연•오염 (정신을 파괴하는 오염된 연기)", rank: "1급",
    appearance: "흑백 단발머리, 어두운 적안", code: "y", faction: "Pollution"
  },
  {
    name: "정로아", gender: "Female", age: 25, mbti: "ISTJ",
    keywords: ["단호함", "냉혹함"],
    description: "강력한 무력, 말이 적음, 간결하고 단호함, 타인과의 교류 거부",
    quote: "사라져라. 너는 내 경로에 존재할 가치가 없다.",
    weapon: "장검", position: "오염체 (정신유지)", ability: "위압감•오염 (존재만으로 극도의 긴장감)", rank: "1급",
    appearance: "흑색 장발, 금안, 검정색 로브", code: "z", faction: "Pollution"
  },
  {
    name: "오민재", gender: "Male", age: 31, mbti: "ISFP",
    keywords: ["체념적", "고독함"],
    description: "실전파, 오염에 대한 체념, 무관심한 태도",
    quote: "아, 몸이 좀 무겁다 했더니... 또 이 검은 게 올라오네. 귀찮게.",
    weapon: "야구 방망이", position: "오염체 (정신유지)", ability: "검은 손•오염 (바닥에서 검은손을 소환)", rank: "2급",
    appearance: "갈색 머리, 흑안", code: "B", faction: "Pollution"
  },
  // C.R.A
  {
    name: "유지안", gender: "Female", age: 26, mbti: "ENTJ",
    keywords: ["저돌적", "직설적"],
    description: "직설적이고 화끈함, 행동으로 보여줌, 강한 생존본능, 전 K.S.A 1과",
    quote: "내 뒤에 딱 붙어 있어. 길은 내가 뚫을 테니까.",
    weapon: "붉은 광선검", position: "C.R.A 대장", ability: "신속 (최대 음속으로 이동)", rank: "0급",
    appearance: "붉은 포니테일, 청안", code: "r", faction: "C.R.A"
  },
  {
    name: "유준영", gender: "Male", age: 21, mbti: "ISFP",
    keywords: ["무심함", "냉소적"],
    description: "현실주의적 사고, 자유로운 영혼",
    quote: "귀찮게... 그냥 한꺼번에 덤벼. 한 발에 끝내줄 테니까.",
    weapon: "샷건", position: "C.R.A 대원", ability: "글리치 (공격이 통과)", rank: "2급",
    appearance: "파란색 머리, 파란색 눈", code: "v", faction: "C.R.A"
  },
  {
    name: "정이솔", gender: "Female", age: 27, mbti: "INTJ",
    keywords: ["무미건조", "직관적"],
    description: "뛰어난 집중력, 통찰력이 좋음, 속으로 은근한 자부심",
    quote: "오염체 제거 완료. 다음 좌표 불러주세요.",
    weapon: "지정사수소총", position: "C.R.A 대원", ability: "지속출혈 (명중 시 큰 출혈)", rank: "1급",
    appearance: "노란색 장발, 적안", code: "t", faction: "C.R.A"
  }
];

export const timeline: TimelineEvent[] = [
  { year: "10 Years Ago", title: "The Awakening", description: "소수의 인류에게 [이능]이라는 특수한 능력이 발현되기 시작함." },
  { year: "5 Years Ago", title: "Proliferation", description: "이능 보유자의 수가 급격히 증가함." },
  { year: "4 Years Ago", title: "First Distortion", description: "이능 보유자의 신체 변형 발생. [뒤틀림] 현상 최초 관측. 오염체 명명." },
  { year: "3 Years Ago", title: "The Great Collapse", description: "극도의 스트레스와 자아붕괴가 원인으로 밝혀짐. 전 세계적 동시다발적 뒤틀림 발생." },
  { year: "1 Year Ago", title: "Current State", description: "인류 99% 멸종. 생존자 1%. 오염체 20%까지 증식." }
];

export const missions: Mission[] = [
  {
    id: "OP-2250-A01",
    title: "구로 디지털 단지 정찰",
    location: "구로 섹터 7",
    difficulty: "HARD",
    description: "최근 뒤틀림 에너지 급증 지역. 붕괴된 서버실에서 데이터 큐브 회수 요망.",
    reward: "보급품 (A급) x2",
    status: "OPEN"
  },
  {
    id: "OP-2250-B04",
    title: "변이체 무력화 작전",
    location: "여의도 공원 (오염됨)",
    difficulty: "EXTREME",
    description: "1급 위험도로 분류된 거대 오염체 식별됨. 즉각적인 사살 필요.",
    reward: "K.S.A 공로 훈장, 정화제",
    status: "OPEN"
  },
  {
    id: "OP-2250-C12",
    title: "보급 수송로 확보",
    location: "88 올림픽 대로",
    difficulty: "NORMAL",
    description: "약탈자 및 하급 오염체들로부터 식량 수송 차량 호위.",
    reward: "깨끗한 물 5L",
    status: "IN_PROGRESS"
  },
  {
    id: "OP-2250-D09",
    title: "백골교 제단 조사",
    location: "인천항 제2부두",
    difficulty: "SUICIDE",
    description: "실종된 조사팀의 마지막 신호가 잡힌 곳. 흔적을 찾고 생존자를 구출하라.",
    reward: "특수 탄약 상자",
    status: "OPEN"
  }
];