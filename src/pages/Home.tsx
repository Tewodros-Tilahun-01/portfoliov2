import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";
import MainSection from "../sections/MainSection";

function Home() {
  return (
    <Layout>
      <div className=" relative grid gap-4 grid-cols-1 md:grid-cols-[88px_1fr] lg:grid-cols-[auto_2fr_5fr] md:px-4">
        <Sidebar />
        <ProfileCard
          name="Tewodros Tilahun"
          title="software developer"
          avatarUrl="./assets/avater.jpg"
        />
        <MainSection />
      </div>
    </Layout>
  );
}
export default Home;
