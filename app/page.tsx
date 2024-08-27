import Image from "next/image";
import Banner from "./components/Banner";
import Header from "./components/Header";
import ProjectDetail from "./components/ProjectDetails";
import WhyUs from "./components/WhyUs";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Header />
      <Banner />
      <ProjectDetail />
      <WhyUs />
      <AboutUs />
    </main>
  );
}
