import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";

import MainSection from "../sections/MainSection";

function Home() {
  return (
    <Layout>
      <div className="grid gap-6 grid-cols-4 sm:grid-cols-[530px,1fr] lg:grid-cols-[72px,420px,1fr]">
        <div className="hidden md:block w-[70px] max-w-full">
          <Sidebar />
        </div>

        <div className="hidden lg:block w-[420px] max-w-full">
          <ProfileCard name="Andrew Ryan" title="Data Architect" />
        </div>
        <div className="sm:col-start-2 lg:col-start-auto">
          <MainSection />
        </div>
      </div>
    </Layout>
  );
}
export default Home;
