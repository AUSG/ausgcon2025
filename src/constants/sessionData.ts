type Category = {
  name: string;
  color: string;
};

type Speaker = {
  name: string;
  team: string;
};

type Session = {
  time: string; // 1st session
  name: string; // "1ST SESSION"
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
        name: "1ST SESSION",
        description:
          "커뮤니티 활동을 하라, 그럼 당신에게 드넓은 기회가 펼쳐질 것이니",
        category: [
          { name: "커리어/경험", color: "#F389B4" },
          { name: "DEVOPS", color: "#F3DA89" },
        ],
        speaker: {
          name: "박태성",
          team: "아이디어샘",
        },
      },
      {
        time: "14:30 - 15:00",
        name: "2ND SESSION",
        description:
          "커뮤니티 활동을 하라, 그럼 당신에게 드넓은 기회가 펼쳐질 것이니",
        speaker: {
          name: "김민석",
          team: "AUSG",
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
        name: "1ST SESSION",
        description:
          "Private 환경에서 Kubernetes를 활용한 자율주행 PaaS 구축기",
        category: [
          { name: "커리어/경험", color: "#F389B4" },
          { name: "DEVOPS", color: "#F3DA89" },
        ],
        speaker: {
          name: "김창환",
          team: "파트리지시스템즈",
        },
      },
      {
        time: "14:30 - 15:00",
        name: "2ND SESSION",
        description: "LLM은 스캠인가",
        speaker: {
          name: "김연수",
          team: "업스테이지",
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
        name: "1ST SESSION",
        description: "gRPC와 함께 알아보는 같이 일하고 싶은 엔지니어",
        category: [
          { name: "커리어/경험", color: "#F389B4" },
          { name: "DEVOPS", color: "#F3DA89" },
        ],
        speaker: {
          name: "김한수",
          team: "뱅크샐러드",
        },
      },
      {
        time: "14:30 - 15:00",
        name: "2ND SESSION",
        description: "신입의 클라우드 엔지니어 적응기",
        speaker: {
          name: "정지우",
          team: "여기어때컴퍼니",
        },
      },
      {
        time: "14:30 - 15:00",
        name: "3RD SESSION",
        description: "from ICN to NRT - 위피를 일본에 런칭하기까지.",
        speaker: {
          name: "변준석",
          team: "엔라이즈",
        },
      },
    ],
  },
];
