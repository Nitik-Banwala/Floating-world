import Coding from "@/components/Coding";
import Footer from "@/components/common/Footer";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Membership from "@/components/Membership";
import Money from "@/components/Money";
import Plans from "@/components/Plans";
import Project from "@/components/Projects";
import World from "@/components/World";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Hero/>
   <Project/>
   <Plans/>
   <Money/>
   <Membership/>
   <Coding/>
   <World/>
   <Faq/>
   <Footer/>
   </>
  );
}
