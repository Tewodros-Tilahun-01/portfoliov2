import StatsRow from "../components/StatsRow";
import HeroSection from "./HeroSection";

function MainSection() {
  return (
    <div className="flex flex-col w-full ">
      <div className="pb-8 bg-secondary rounded-tr-4xl">
        <HeroSection />
        <StatsRow />
      </div>

      <div className="mb-8"></div>
      <div className="pb-8 bg-secondary rounded-tr-4xl">
        <HeroSection />
        <StatsRow />
      </div>
    </div>
  );
}
export default MainSection;
