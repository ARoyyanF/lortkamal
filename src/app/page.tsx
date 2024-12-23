import LandingHero from "@/components/landing-hero";
import SurveyForm from "@/components/survey-form";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#182c60] to-[#001524] text-white">
      <div className="container mx-auto px-10">
        <LandingHero />
        <SurveyForm />
      </div>
    </div>
  );
}
