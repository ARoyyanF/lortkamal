import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/old/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/old/ui/avatar";

export default function CandidateProfiles() {
  const candidates = [
    {
      name: "Jane Doe",
      party: "Blue Party",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "John Smith",
      party: "Red Party",
      image: "/placeholder.svg?height=50&width=50",
    },
  ];

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-blue-700">Candidate Profiles</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {candidates.map((candidate) => (
            <li key={candidate.name} className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={candidate.image} alt={candidate.name} />
                <AvatarFallback>{candidate.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{candidate.name}</div>
                <div className="text-sm text-gray-500">{candidate.party}</div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
