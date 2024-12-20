import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-blue-700 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">ElectionHub</div>
        <nav>
          <ul className="flex space-x-4">
            <li><Button variant="ghost" className="text-white hover:text-blue-200">Home</Button></li>
            <li><Button variant="ghost" className="text-white hover:text-blue-200">Candidates</Button></li>
            <li><Button variant="ghost" className="text-white hover:text-blue-200">Voting Info</Button></li>
            <li><Button variant="ghost" className="text-white hover:text-blue-200">Results</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

