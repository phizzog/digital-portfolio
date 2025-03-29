import Header from "@/components/shared/Header";
import Hero from "@/components/sections/Hero";
import Introduction from "@/components/sections/Introduction";
import CoachQuote from "@/components/sections/CoachQuote";
import SwedenExperience from "@/components/sections/SwedenExperience";
import Connections from "@/components/sections/Connections";
import MedicalVisualization from "@/components/sections/MedicalVisualization";
import CareerTransition from "@/components/sections/CareerTransition";
import Reflection from "@/components/sections/Reflection";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Introduction />
      <CoachQuote />
      <SwedenExperience />
      <Connections />
      <MedicalVisualization />
      <CareerTransition />
      <Reflection />
    </main>
  );
}
