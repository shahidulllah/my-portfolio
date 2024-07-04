import Image from "next/image";
import BannerSection from "./components/BannerSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar></Navbar>
      <div className=" py-4 mt-24 ">
        <BannerSection></BannerSection>
        <AboutSection></AboutSection>
      </div>
      <Footer></Footer>
    </main>
  );
}
