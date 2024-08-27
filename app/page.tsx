import Image from "next/image";
import Banner from "./components/Banner";
import Header from "./components/Header";
import ProjectDetail from "./components/ProjectDetails";
import WhyUs from "./components/WhyUs";
import AboutUs from "./components/AboutUs";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Header />
      <Banner />
      <ProjectDetail />
      <WhyUs />
      <AboutUs />
      <Testimonial />
      <Footer />
    </main>
  );
}
