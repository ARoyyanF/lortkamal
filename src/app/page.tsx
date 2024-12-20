import Header from "@/components/Header";
import ElectionInfo from "@/components/ElectionInfo";
import CandidateProfiles from "@/components/CandidateProfiles";
import VotingLocations from "@/components/VotingLocations";
import ElectionTimeline from "@/components/ElectionTimeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
          2024 General Election
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ElectionInfo />
          <CandidateProfiles />
          <VotingLocations />
          <ElectionTimeline />
        </div>
      </main>
      <Footer />
    </div>
  );
}
