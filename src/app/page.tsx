import LandingHero from "@/components/landing-hero";
import SurveyForm from "@/components/survey-form";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#181720] text-white">
      <NavBar />
      <main className="pt-24">
        <section className="scroll-m-20" id="landing-hero">
          <LandingHero />
        </section>
        <section className="scroll-m-20" id="tentang-kamal">
          <TentangKamal />
        </section>
        <VisiMisi />
        <section className="scroll-m-24" id="survey-form">
          <SurveyForm />
        </section>
      </main>
    </div>
  );
}
