import TallyForm from "./TallyForm";

const ContactSection = () => {
  return (
    <section className="flex flex-col items-center bg-white bg-[url('/image/contact_bg.svg')] px-4 pt-24 pb-28">
      <div className="mb-20 bg-white p-4 text-center text-[#71A6D8]">
        <h2 className="mb-11 text-4xl lg:text-6xl">CONTACT US</h2>
        <p className="font-pretendard text-xl font-bold lg:text-2xl">
          궁금한 게 있다면 언제든지 질문 받습니다
        </p>
      </div>
      <div className="w-full max-w-5xl rounded-[18px] bg-white shadow-[0_4px_18px_0_rgba(39,55,125,0.10)] backdrop-blur-[9px] lg:px-6">
        <TallyForm />
      </div>
    </section>
  );
};

export default ContactSection;
