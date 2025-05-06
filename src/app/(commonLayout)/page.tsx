import CategorySection from "@/components/modules/Homepage/CategorySection";
import CtaSection from "@/components/modules/Homepage/CtaSection";
import Featured from "@/components/modules/Homepage/Featured";
import Hero from "@/components/modules/Homepage/Hero";
import Instructions from "@/components/modules/Homepage/Instructions";
import Trust from "@/components/modules/Homepage/Trust";

const Homepage = () => {
  return (
    <div className="md:-mt-16">
      <Hero />
      <Trust />
      <CategorySection />
      <Featured />
      <Instructions />
      <CtaSection />
    </div>
  );
};

export default Homepage;
