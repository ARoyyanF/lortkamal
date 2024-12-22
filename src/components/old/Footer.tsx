export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 ElectionHub. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="hover:underline">Privacy Policy</a> | 
          <a href="#" className="hover:underline ml-2">Terms of Service</a> | 
          <a href="#" className="hover:underline ml-2">Contact Us</a>
        </p>
      </div>
    </footer>
  )
}

