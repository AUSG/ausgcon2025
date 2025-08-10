import ContactSection from "@/components/contact/ContactSection";
import DescriptionSection from "@/components/description/DescriptionSection";
import FAQSection from "@/components/faq/FAQSection";
import Footer from "@/components/footer/Footer";
import MainSection from "@/components/main/MainSection";
import MapSection from "@/components/map/MapSection";
import ScheduleSection from "@/components/schedule/ScheduleSection";
import SpeakerSection from "@/components/speakers/SpeakerSection";

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
