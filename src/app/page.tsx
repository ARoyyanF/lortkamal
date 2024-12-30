import NavBar from "@/components/navbar";
import LandingHero from "@/components/landing-hero";
import TentangKamal from "@/components/tentang-kamal";
import VisiMisi from "@/components/visi-misi";
import SurveyForm from "@/components/survey-form";
import Kontak from "@/components/kontak";

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
        <section className="scroll-m-20" id="survey-form">
          <SurveyForm />
        </section>
        <section className="scroll-m-20" id="konta">
          <Kontak />
        </section>
      </main>
    </div>
  );
}
