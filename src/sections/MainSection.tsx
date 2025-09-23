import StatsRow from "../components/StatsRow";
import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import StackSection from "./StackSection";

function MainSection() {
  return (
    <div className="flex flex-col w-full md:col-start-2 lg:col-start-3">
      <div className="pb-8 bg-secondary ">
        <HeroSection />
        <StatsRow />
      </div>

      <div className="mb-8"></div>
      <div className="pb-8 bg-secondary ">
        <StackSection />
      </div>
      <div className="mb-8"></div>

      <div className="pb-8 bg-secondary ">
        <ProjectsSection />
      </div>
    </div>
  );
}
export default MainSection;
