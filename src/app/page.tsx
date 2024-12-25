import NavBar from "@/components/navbar";
import LandingHero from "@/components/landing-hero";
import SurveyForm from "@/components/survey-form";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#181720] text-white">
      <NavBar />
        <main className="pt-16">
          <section id="landing-hero"><LandingHero /></section>
          <section id="survey-form"><SurveyForm /></section>
        </main>
    </div>
  );
}
