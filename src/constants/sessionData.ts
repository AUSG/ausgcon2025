export type Category = {
  name: string;
  color: string;
};

export type Speaker = {
  name: string;
  team: string;
  picture: string;
};

type Session = {
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
        sequence: "1ST SESSION",
        name: `커뮤니티 활동을 하라, 
        그럼 당신에게 드넓은
        기회가 펼쳐질 것이니`,
        description: `- 사수 없이도 개발 실력을 키울 수 있었던 비결인 커뮤니티 활용법을 전파하려 합니다.
- 커뮤니티는 운영자 참가자가 모두 함께 만들어 나가는 것임을 알려드리고자 합니다.`,
        category: [
          { name: "커리어/경험", color: "#F389B4" },
          { name: "DEVOPS", color: "#F3DA89" },
        ],
        speaker: {
          name: "박태성",
          team: "아이디어샘",
          picture: "/image/test_image.jpg",
        },
      },
      {
        time: "14:30 - 15:00",
        sequence: "2ND SESSION",
        name: "커뮤니티 활동을 하라, 그럼 당신에게 드넓은 기회가 펼쳐질 것이니",
        description: `- 사수 없이도 개발 실력을 키울 수 있었던 비결인 커뮤니티 활용법을 전파하려 합니다.
- 커뮤니티는 운영자 참가자가 모두 함께 만들어 나가는 것임을 알려드리고자 합니다.`,
        speaker: {
          name: "김민석",
          team: "AUSG",
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
        sequence: "1ST SESSION",
        name: "Private 환경에서 Kubernetes를 활용한 자율주행 PaaS 구축기",
        description: `- 사수 없이도 개발 실력을 키울 수 있었던 비결인 커뮤니티 활용법을 전파하려 합니다.
- 커뮤니티는 운영자 참가자가 모두 함께 만들어 나가는 것임을 알려드리고자 합니다.`,
        category: [
          { name: "커리어/경험", color: "#F389B4" },
          { name: "DEVOPS", color: "#F3DA89" },
        ],
        speaker: {
          name: "김창환",
          team: "파트리지시스템즈",
          picture: "/image/test_image.jpg",
        },
      },
      {
        time: "14:30 - 15:00",
        sequence: "2ND SESSION",
        name: "LLM은 스캠인가",
        description: `- 사수 없이도 개발 실력을 키울 수 있었던 비결인 커뮤니티 활용법을 전파하려 합니다.
- 커뮤니티는 운영자 참가자가 모두 함께 만들어 나가는 것임을 알려드리고자 합니다.`,
        speaker: {
          name: "김연수",
          team: "업스테이지",
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
        sequence: "1ST SESSION",
        name: "gRPC와 함께 알아보는 같이 일하고 싶은 엔지니어",
        description: `- 사수 없이도 개발 실력을 키울 수 있었던 비결인 커뮤니티 활용법을 전파하려 합니다.
- 커뮤니티는 운영자 참가자가 모두 함께 만들어 나가는 것임을 알려드리고자 합니다.`,
        category: [
          { name: "커리어/경험", color: "#F389B4" },
          { name: "DEVOPS", color: "#F3DA89" },
        ],
        speaker: {
          name: "김한수",
          team: "뱅크샐러드",
          picture: "/image/test_image.jpg",
        },
      },
      {
        time: "14:30 - 15:00",
        sequence: "2ND SESSION",
        name: "신입의 클라우드 엔지니어 적응기",
        description: `- 사수 없이도 개발 실력을 키울 수 있었던 비결인 커뮤니티 활용법을 전파하려 합니다.
- 커뮤니티는 운영자 참가자가 모두 함께 만들어 나가는 것임을 알려드리고자 합니다.`,
        speaker: {
          name: "정지우",
          team: "여기어때컴퍼니",
          picture: "/image/test_image.jpg",
        },
      },
      {
        time: "14:30 - 15:00",
        sequence: "3RD SESSION",
        name: "from ICN to NRT - 위피를 일본에 런칭하기까지.",
        description: `- 사수 없이도 개발 실력을 키울 수 있었던 비결인 커뮤니티 활용법을 전파하려 합니다.
- 커뮤니티는 운영자 참가자가 모두 함께 만들어 나가는 것임을 알려드리고자 합니다.`,
        speaker: {
          name: "변준석",
          team: "엔라이즈",
          picture: "/image/test_image.jpg",
        },
      },
    ],
  },
];
