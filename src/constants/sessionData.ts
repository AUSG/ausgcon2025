export type Category = {
  name: string;
  color: string;
};

export type Speaker = {
  name: string;
  team: string;
  picture: string;
};

export type Session = {
  time: string;
  sequence: string; // "1ST SESSION"
  name: string;
  description: string;
  category?: Category[];
  speaker: Speaker;
};

type Track = {
  name: string;
  id: number;
  sessionList?: Session[];
};

type SessionData = Track[];

export const sessionData: SessionData = [
  {
    name: "트랙 1",
    id: 1,
    sessionList: [
      {
        time: "14:00 - 14:20",
        sequence: "OPENING",
        name: `오프닝`,
        description: ` `,
        speaker: {
          name: "도정민",
          team: "AUSG",
          picture: "/image/test_image.jpg",
        },
      },
      {
        time: "14:30 - 15:00",
        sequence: "1ST SESSION",
        name: `Support Engineer의 성장이란?`,
        description: `- Technical Support Engineer는 무슨 일을 할까요? 트러블슈팅 방법론과 함께, 데이터독 TSE의 일상에 대해 소개합니다.

- Support Engineer가 되기 위해 어떤 준비를 할 수 있을까요? 데이터독을 전혀 모르던 제가 데이터독 TSE가 될 수 있었던 이유에 대해 소개합니다.`,
        // category: [
        //   { name: "커리어/경험", color: "#F389B4" },
        //   { name: "DEVOPS", color: "#F3DA89" },
        // ],
        speaker: {
          name: "서찬혁",
          team: "Datadog",
          picture: "/image/test_image.jpg",
        },
      },
      {
        time: "15:10 - 15:40",
        sequence: "2ND SESSION",
        name: "경험에서 끝내지 않기",
        description: `- 사이드 프로젝트 경험이 '해봤다’에서 끝나지 않아야 하는 이유를 경험과 접근법이라는 두 단어로 얘기해보고자 합니다.
- 경험의 자산화를 위해 제가 시도했던 방법을 공유해보고자 합니다.`,
        speaker: {
          name: "이정진",
          team: "AUSG",
          picture: "/image/test_image.jpg",
        },
      },
      {
        time: "16:00 - 16:30",
        sequence: "3RD SESSION",
        name: "자기 이해가 선행되는 진정한 성장 가속화 방법론",
        description: `- 표면적 목표가 아닌 자기 이해에서 비롯된 진정한 목표 설정 방법을 알아보려 합니다.
- 1년간 수많은 성장을 동반했던 저의 성장 가속에 대한 비결을 공유하려 합니다.`,
        speaker: {
          name: "장영하",
          team: "Artify",
          picture: "/image/test_image.jpg",
        },
      },
      {
        time: "16:40 - 17:10",
        sequence: "4TH SESSION",
        name: "우리가 성장하는 방법. Code, Grow, Connect with 커뮤니티",
        description: `- 요즘 개발자, 코딩만 잘하면 될까요? AI 활용 능력, 개발 지식도 중요하지만, 다양한 사람들과 잘 어울릴 수 있는 힘이 꼭 필요합니다.
- 또한 변화의 속도가 빨라질수록 나는 ‘어떤 개발자가 되고 싶은지’, ‘원하는 분야로 가려면 무엇을 해야 하는지’와 같은 커리어적 고민이 있고, 더 커질수 있다고 생각합니다. 
- ‘커뮤니티’가 이런 고민을 듣고 나의 역량을 키워주는 좋은 기회가 될수 있는지, 그리고 춘식이처럼 집에만 있는 개발자가 아니라 어피치처럼 매력적인 개발자로 성장할 수 있는 방법에 대해 이야기 해보고자 합니다.`,
        speaker: {
          name: "김대현",
          team: "카카오스타일",
          picture: "/image/test_image.jpg",
        },
      },
      {
        time: "17:20 - 18:00",
        sequence: "4TH SESSION",
        name: "더 나은 개발자/엔지니어가 되기 위한 소프트 스킬",
        description: `게임 업계 개발자로 일하며 스타트업에서 넷마블, 넥슨을 거쳐 AWS에 오기까지 겪었던 시행착오와 지속적으로 성장할 수 있었던 경험을 공유합니다. (업무를 대하는 태도, 커뮤니티, 스터디, 사이드프로젝트 등)`,
        speaker: {
          name: "최용호",
          team: "Amazon Web Services",
          picture: "/image/test_image.jpg",
        },
      },
    ],
  },
  {
    name: "트랙 2",
    id: 2,
    sessionList: [
      {
        time: "14:00 - 14:20",
        sequence: "OPENING",
        name: `오프닝`,
        description: ` `,
        speaker: {
          name: "도정민",
          team: "AUSG",
          picture: "/image/test_image.jpg",
        },
      },
      {
        time: "14:30 - 15:00",
        sequence: "1ST SESSION",
        name: "TBD",
        description: `TBD`,
        speaker: {
          name: "강시온",
          team: "",
          picture: "/image/test_image.jpg",
        },
      },
      {
        time: "15:10 - 15:40",
        sequence: "2ND SESSION",
        name: "성장도 설계가 필요합니다 - 고민한만큼 올라갈 수 있는 성장 이야기",
        description: `- 성장도 치밀한 고민과 설계가 필요해요. 고민한 만큼 올라갈 수 있거든요. 
- 이 세션에서는 성장하지 않으면 도태되는 스타트업 업계에서 15년동안 살아남기 위한 성장을 해온 경험으로 어떻게 성장을 설계할 수 있는지, 그리고 성장의 팁과 노하우 등을 이야기합니다.`,
        speaker: {
          name: "박상운",
          team: "RECON Labs",
          picture: "/image/test_image.jpg",
        },
      },
      {
        time: "16:00 - 16:30",
        sequence: "3RD SESSION",
        name: "속도와 품질 사이, 현실적인 서비스 런칭 전략",
        description: `테스트코드 하나도 못짜던 시절부터 프로덕션 서비스 런칭 후 1년간의 운영까지, 십수번의 장애 대응을 겪으며 깨달은 현실적 개발 전략을 공유합니다. 완벽주의와 무방비 상태 사이에서 찾은 균형점과, 스타트업에서 서비스 런칭 및 운영 시 실제로 적용할 수 있는 우선순위 기반 체크리스트를 제시합니다.
혼자 혹은 소규모 팀에서 서비스 개발을 책임져야 하는 주니어 개발자들에게 실질적 도움이 될만한 내용을 다룹니다.`,
        speaker: {
          name: "김성익",
          team: "MagicX",
          picture: "/image/test_image.jpg",
        },
      },
      {
        time: "16:40 - 17:10",
        sequence: "4TH SESSION",
        name: "한 명의 개발자 커리어 돌아보기 - 무엇을 느끼며 살았는가?",
        description: `- 10명 미만부터 1000명+ 회사까지 다녀온 개발자의 커리어를 훑어가며, 이 사람은 어떤 상황에서 어떤 걸 느끼고 배웠는가를 나눠봅니다.
- 순간순간 몸으로 부딪혀가며 느껴온 고민과 경험을 녹여내서 듣는 입장에서 삶을 간접경험해보는 발표`,
        speaker: {
          name: "원대영",
          team: "DEVSISTERS",
          picture: "/image/test_image.jpg",
        },
      },
      {
        time: "17:20 - 18:00",
        sequence: "5TH SESSION",
        name: "더 나은 개발자/엔지니어가 되기 위한 소프트 스킬",
        description: `게임 업계 개발자로 일하며 스타트업에서 넷마블, 넥슨을 거쳐 AWS에 오기까지 겪었던 시행착오와 지속적으로 성장할 수 있었던 경험을 공유합니다. (업무를 대하는 태도, 커뮤니티, 스터디, 사이드프로젝트 등)`,
        speaker: {
          name: "최용호",
          team: "Amazon Web Services",
          picture: "/image/test_image.jpg",
        },
      },
    ],
  },
  {
    name: "트랙 3",
    id: 3,
    sessionList: [
      {
        time: "14:00 - 14:20",
        sequence: "OPENING",
        name: `오프닝`,
        description: ` `,
        speaker: {
          name: "도정민",
          team: "AUSG",
          picture: "/image/test_image.jpg",
        },
      },
      {
        time: "14:30 - 15:00",
        sequence: "1ST SESSION",
        name: "Imposter Syndrome",
        description: `- 나만 뒤쳐져 있는 것 같을 때, 내가 이 팀에서 범인인 것 처럼 느껴질 때 있지 않나요? 

- 취준생, 그리고 취업 이후에도 항상 괴롭히던 이 느낌을 어떻게 컨트롤 하면 좋을지, 제가 후회하던 경험과 더불어 이야기하고자 합니다.`,
        speaker: {
          name: "안지완",
          team: "몰로코",
          picture: "/image/test_image.jpg",
        },
      },
      {
        time: "15:10 - 15:40",
        sequence: "2ND SESSION",
        name: "홈랩에서 프로덕션까지, 쿠버네티스와 함께한 몰입과 성장 이야기",
        description: `- 작은 홈랩에서 빠르게 실험하고, 몰입과 시간 설계로 ‘경험→개념’ 전환을 가속할 수 있음을 전하고자 합니다.
- 독학의 한계를 스터디·커뮤니티로 넘어 관점·속도·깊이를 넓히고 ‘나만의 니치’를 찾으시길 권합니다.
- 성장은 ‘필요에 의한 공부’에서 오며, 프로덕션의 실제 문제(안정성·자동화·관측)를 풀 때 배움이 가장 빠르게 쌓인다는 점을 강조합니다.`,
        speaker: {
          name: "최용환",
          team: "당근",
          picture: "/image/test_image.jpg",
        },
      },
      {
        time: "16:00 - 16:30",
        sequence: "3RD SESSION",
        name: "잘 때도 돈 버는 법: 암호화폐 트레이딩 101",
        description: `암호화폐 자동매매를 만드는 방법과 제가 겪었던 재미있는 경험들을 소개합니다.
전략을 설계하고, 프로그래밍하여 수익을 얻는 경험. 궁금하지 않으신가요?

- 자동매매를 해야 하는 이유
- alpha 찾기
- 무엇으로 어떻게 개발할 것인가
- 재미있는 경험들`,
        speaker: {
          name: "장영환",
          team: "ABLY",
          picture: "/image/test_image.jpg",
        },
      },
      {
        time: "16:40 - 17:10",
        sequence: "4TH SESSION",
        name: "테스트로 나 혼자만 레벨업?",
        description: `안녕하세요! '테스트로 나 혼자만 레벨업?' 세션 발표를 맡은 김한수입니다.
이번 발표에서는 테스트의 본질과 테스트 코드 방법론까지 알아보고, 한발 더 나아가 단순히 코더가 아닌 엔지니어로서 커리어를 레벨업하는 방법에 대해 함께 나눠보려고 합니다.`,
        speaker: {
          name: "김한수",
          team: "뱅크샐러드",
          picture: "/image/test_image.jpg",
        },
      },
      {
        time: "17:20 - 18:00",
        sequence: "4TH SESSION",
        name: "더 나은 개발자/엔지니어가 되기 위한 소프트 스킬",
        description: `게임 업계 개발자로 일하며 스타트업에서 넷마블, 넥슨을 거쳐 AWS에 오기까지 겪었던 시행착오와 지속적으로 성장할 수 있었던 경험을 공유합니다. (업무를 대하는 태도, 커뮤니티, 스터디, 사이드프로젝트 등)`,
        speaker: {
          name: "최용호",
          team: "Amazon Web Services",
          picture: "/image/test_image.jpg",
        },
      },
    ],
  },
];
