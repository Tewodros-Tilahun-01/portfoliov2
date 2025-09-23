import StatsRow from "../components/StatsRow";
import HeroSection from "./HeroSection";
import StackSection from "./StackSection";

function MainSection() {
  return (
    <div className="flex flex-col w-full md:col-start-2 lg:col-start-3">
      <div className="pb-8 bg-secondary lg:rounded-tr-4xl">
        <HeroSection />
        <StatsRow />
      </div>
      <div className="mb-4"></div>
      <div className="pb-8 bg-secondary ">
        <StackSection />
      </div>
    </div>
  );
}
export default MainSection;
