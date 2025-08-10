import TallyForm from "./TallyForm";

const ContactSection = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="mb-20 text-center text-white">
        <h2 className="mb-11 text-[70px]">CONTACT US</h2>
        <p className="font-pretendard text-3xl font-bold">
          궁금한 게 있다면 언제든지 질문 받습니다
        </p>
      </div>
      <div className="w-[1606px] rounded-[18px] bg-white p-6 shadow-[0_4px_18px_0_rgba(39,55,125,0.10)] backdrop-blur-[9px]">
        <TallyForm />
      </div>
    </section>
  );
};

export default ContactSection;
