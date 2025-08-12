import Arcodian from "./Arcodian";

const FAQSection = () => {
  return (
    <section
      className="flex w-full flex-col items-center justify-center pb-36 not-lg:px-3"
      style={{
        background:
          "linear-gradient(to bottom right, transparent 50%, #e1d6f4 100%)",
      }}
    >
      <div className="mb-20 text-center text-white">
        <h2 className="mb-11 text-4xl lg:text-6xl">FAQ</h2>
        <p className="font-pretendard text-xl font-bold lg:text-2xl">
          아우쓱콘에게 자주 묻는 질문을 모았습니다
        </p>
      </div>
      <div className="flex w-full max-w-5xl flex-col gap-6">
        <Arcodian
          title="행사장에 주차가 가능한가요?"
          description={`-
          따로 주차 지원을 제공하고 있지 않습니다. 가급적 대중교통을 이용해 주시면 감사하겠습니다.`}
        />
        <Arcodian
          title="행사 당일 현장등록이 가능할까요?"
          description={`-
            당일 신청 및 등록은 불가능합니다. 반드시 티켓 구매 후 참석해주세요.`}
        />
        <Arcodian
          title="티켓을 다른 사람에게 양도할 수 있나요?"
          description={`-
            부득이한 사정으로 티켓을 다른 사람에게 양도할 수 있습니다.

양도를 위해서는 티켓 구매자의 개인정보(휴대폰 번호, 양도자의 이름)를 함께 제공해야 하며, 행사 당일 전달받은 구매자의 개인 정보를 통해 입장이 가능합니다.

단, 금전적 거래를 통한 양도(암표, 중고거래 등)가 적발될 경우, 해당 티켓으로의 입장이 제한될 수 있습니다.`}
        />
        <Arcodian
          title="티켓 환불은 어떻게 하나요?"
          description={`-
            9월 15일까지 환불 가능하며, 이후 환불은 불가능합니다.`}
        />
      </div>
    </section>
  );
};

export default FAQSection;
