import LandingHero from "@/components/landing-hero";
import SurveyForm from "@/components/survey-form";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#001524] text-white">
      <div className="container mx-auto px-4">
        <LandingHero />
        <SurveyForm />
      </div>
    </div>
  );
}
