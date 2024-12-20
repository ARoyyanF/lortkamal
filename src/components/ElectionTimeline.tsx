import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function ElectionTimeline() {
  const events = [
    { date: "Oct 5, 2024", event: "Voter Registration Deadline" },
    { date: "Oct 15, 2024", event: "Early Voting Begins" },
    { date: "Nov 4, 2024", event: "Early Voting Ends" },
    { date: "Nov 5, 2024", event: "Election Day" },
    { date: "Nov 20, 2024", event: "Results Certified" },
  ]

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-blue-700">Election Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {events.map((event) => (
            <li key={event.date} className="flex justify-between">
              <span className="font-semibold">{event.date}</span>
              <span>{event.event}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

