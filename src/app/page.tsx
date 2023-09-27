import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Link from "next/link";
import Image from "next/image";
// import temitope from "../../public/temitope.jpeg";
import Cursor from "@/components/Cursor";
// import { getPageInfo } from "./lib/fetchpageinfo";
// import { getsocials } from "./lib/fetchSocials";
// import { getExperience } from "./lib/fetchExperience";
import Experiences from "@/components/Experiences";
// import { getskills } from "./lib/fetchskills";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
// import { getprojects } from "./lib/fetchProjects";
import Contact from "@/components/Contact";

type Props = {};

export default async function Home() {
  // const pageinfo = await getPageInfo();
  // const socials = await getsocials();
  // const experience = await getExperience();
  // const skill = await getskills();
  // const project = await getprojects();
  return (
    <section className="bg-[#242424] scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7BA0A]/60 text-white snap-y snap-mandatory  z-0 h-screen w-screen overflow-y-scroll overflow-x-hidden">
      <Head>
        <title className="">Cybprom portfolio</title>
      </Head>
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>
      {/* experience */}
      <section id="experience" className="snap-center">
        {/* <Experiences experience={experience} /> */}
        <Experiences />
      </section>
      {/* skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* contact me */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <footer className="w-full sticky bottom-20 sm:bottom-5 cursor-pointer right-2">
        <Cursor />
      </footer>
    </section>
  );
}
export const revalidate = 60;
