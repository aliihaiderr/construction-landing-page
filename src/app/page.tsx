import HeroSection from "@/components/HeroSection"
import Detail from "@/components/Detail"
import LatestProjects from "@/components/LatestProjects"
import About from "@/components/About"
import Qualities from "@/components/Qualities"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <>
      <HeroSection />
      <Detail />
      <LatestProjects />
      <About />
      <Qualities />
      <Contact />
    </>
  )
}
