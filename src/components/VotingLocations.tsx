import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { MapPin } from 'lucide-react'

export default function VotingLocations() {
  const locations = [
    "City Hall - 123 Main St",
    "Central Library - 456 Oak Ave",
    "Community Center - 789 Pine Rd",
  ]

  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-blue-700">Voting Locations</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {locations.map((location) => (
            <li key={location} className="flex items-center space-x-2">
              <MapPin className="text-blue-500" size={16} />
              <span>{location}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

