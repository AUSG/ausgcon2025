import ContactSection from "@/components/contact/ContactSection";
import Contact from "@/components/contact/TallyForm";
import DescriptionSection from "@/components/description/DescriptionSection";
import FAQSection from "@/components/faq/FAQSection";
import Footer from "@/components/footer/Footer";
import MainSection from "@/components/main/MainSection";
import KakaoMap from "@/components/map/KakaoMap";
import MapSection from "@/components/map/MapSection";
import ScheduleSection from "@/components/schedule/ScheduleSection";
import SpeakerSection from "@/components/speakers/SpeakerSection";
import Timer from "@/components/timer/Timer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <MainSection />
      <DescriptionSection />
      <ScheduleSection />
      <SpeakerSection />
      <MapSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
