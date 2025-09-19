import StatsRow from "../components/StatsRow";
import HeroSection from "./HeroSection";

function MainSection() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <HeroSection />
      <StatsRow />
    </div>
  );
}
export default MainSection;
