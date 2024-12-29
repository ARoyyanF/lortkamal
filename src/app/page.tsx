import NavBar from "@/components/navbar";
import LandingHero from "@/components/landing-hero";
import TentangKamal from "@/components/tentang-kamal";
import SurveyForm from "@/components/survey-form";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#181720] text-white">
      <NavBar />
        <main className="pt-12">
          <section className="scroll-m-12" id="landing-hero"><LandingHero /></section>
          <section className="scroll-m-12" id="tentang-kamal"><TentangKamal /></section>
          <section className="scroll-m-12" id="survey-form"><SurveyForm /></section>
        </main>
    </div>
  );
}
