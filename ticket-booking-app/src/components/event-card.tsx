import { CalendarDays, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface EventProps {
  event: {
    id: string
    title: string
    date: string
    location: string
    imageUrl: string
    price: string
    category?: string
  }
}

export default function EventCard({ event }: EventProps) {
  return (
    <Link href={`/events/${event.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48">
          <Image src={event.imageUrl || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg group-hover:text-purple-600 transition-colors duration-200">
            {event.title}
          </h3>
          <div className="flex items-center mt-2 text-gray-600">
            <CalendarDays className="h-4 w-4 mr-1" />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center mt-1 text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{event.location}</span>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <span className="font-semibold text-purple-700">{event.price}</span>
            <button className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full hover:bg-purple-200 transition-colors duration-200">
              Get Tickets
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
