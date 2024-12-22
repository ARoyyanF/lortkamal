import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/old/ui/card";

export default function ElectionInfo() {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-blue-700">Election Information</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li>
            <strong>Date:</strong> November 5, 2024
          </li>
          <li>
            <strong>Type:</strong> General Election
          </li>
          <li>
            <strong>Positions:</strong> President, Senate, House
          </li>
          <li>
            <strong>Voter Registration Deadline:</strong> October 5, 2024
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
