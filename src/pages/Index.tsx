import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StorySection from "@/components/sections/StorySection";
import CollectionSection from "@/components/sections/CollectionSection";
import CraftsmanshipSection from "@/components/sections/CraftsmanshipSection";
import EditorialSection from "@/components/sections/EditorialSection";
import CallToEmotionSection from "@/components/sections/CallToEmotionSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StorySection />
      <CollectionSection />
      <CraftsmanshipSection />
      <EditorialSection />
      <CallToEmotionSection />
      <Footer />
    </main>
  );
};

export default Index;
