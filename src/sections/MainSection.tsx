import StatsRow from "../components/StatsRow";
import HeroSection from "./HeroSection";

function MainSection() {
  return (
    <div className="flex flex-col w-full ">
      <HeroSection />
      <StatsRow />
      <div className="mb-8"></div>

      <HeroSection />
      <StatsRow />
    </div>
  );
}
export default MainSection;
