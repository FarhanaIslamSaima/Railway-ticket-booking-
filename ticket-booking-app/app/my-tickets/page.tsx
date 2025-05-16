import { Download, QrCode, Share, Ticket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function MyTickets() {
  const tickets = [
    {
      id: "1",
      eventName: "Taylor Swift | The Eras Tour",
      date: "June 15, 2024",
      time: "7:00 PM",
      venue: "SoFi Stadium",
      location: "Los Angeles, CA",
      section: "Lower Bowl",
      seat: "A12",
      ticketCode: "TS-ERAS-2024-12345",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "2",
      eventName: "Taylor Swift | The Eras Tour",
      date: "June 15, 2024",
      time: "7:00 PM",
      venue: "SoFi Stadium",
      location: "Los Angeles, CA",
      section: "Lower Bowl",
      seat: "A13",
      ticketCode: "TS-ERAS-2024-12346",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "3",
      eventName: "NBA Finals 2024",
      date: "June 20, 2024",
      time: "6:30 PM",
      venue: "Madison Square Garden",
      location: "New York, NY",
      section: "Section 101",
      seat: "Row 7, Seat 5",
      ticketCode: "NBA-FINALS-2024-78901",
      imageUrl: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">My Tickets</h1>
            <div className="flex gap-2">
              <button className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                Past Events
              </button>
              <button className="bg-purple-600 text-white rounded-md px-4 py-2 text-sm font-medium hover:bg-purple-700">
                Upcoming Events
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            {tickets.map((ticket) => (
              <div key={ticket.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/4 relative h-48 md:h-auto">
                    <Image
                      src={ticket.imageUrl || "/placeholder.svg"}
                      alt={ticket.eventName}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6 md:w-2/4 border-r border-gray-200">
                    <h2 className="text-xl font-bold mb-2">{ticket.eventName}</h2>
                    <div className="text-gray-600 mb-4">
                      <div>
                        {ticket.date} • {ticket.time}
                      </div>
                      <div>{ticket.venue}</div>
                      <div>{ticket.location}</div>
                    </div>

                    <div className="bg-gray-50 rounded-md p-3 mb-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm text-gray-500">Section</div>
                          <div className="font-medium">{ticket.section}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Seat</div>
                          <div className="font-medium">{ticket.seat}</div>
                        </div>
                        <div className="col-span-2">
                          <div className="text-sm text-gray-500">Ticket Code</div>
                          <div className="font-medium">{ticket.ticketCode}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex items-center text-sm text-purple-600 hover:text-purple-800">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </button>
                      <button className="flex items-center text-sm text-purple-600 hover:text-purple-800">
                        <Share className="h-4 w-4 mr-1" />
                        Share
                      </button>
                      <Link href="#" className="flex items-center text-sm text-purple-600 hover:text-purple-800">
                        <Ticket className="h-4 w-4 mr-1" />
                        View Details
                      </Link>
                    </div>
                  </div>

                  <div className="p-6 md:w-1/4 flex flex-col items-center justify-center">
                    <div className="bg-white p-2 rounded-lg border border-gray-200 mb-4">
                      <QrCode className="h-32 w-32" />
                    </div>
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md font-medium transition-colors duration-200">
                      Add to Wallet
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
