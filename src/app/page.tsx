import NavBar from "@/components/navbar";
import LandingHero from "@/components/landing-hero";
import TentangKamal from "@/components/tentang-kamal";
import VisiMisi from "@/components/visi-misi";
import SurveyForm from "@/components/survey-form";
import Kontak from "@/components/kontak";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#181720] text-white bg-gradient-to-bl from-[#182c6091] to-[#001524]">
      {/* <script
        defer
        src="https://unpkg.com/tailwindcss-intersect@2.x.x/dist/observer.min.js"
      ></script> */}
      <NavBar />
      <main className="pt-24">
        <section className="scroll-mt-32" id="landing-hero">
          <LandingHero />
        </section>
        <section className="scroll-mt-32" id="tentang-kamal">
          <TentangKamal />
        </section>
        {/* <VisiMisi /> */} {/*!TODO: Uncomment when Visi Misi is finished*/}
        <section className="scroll-mt-32" id="survey-form">
          <SurveyForm />
        </section>
        <section className="scroll-mt-32" id="kontak">
          <Kontak />
        </section>
      </main>
    </div>
  );
}
