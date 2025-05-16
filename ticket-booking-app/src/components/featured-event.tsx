import { CalendarDays, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface FeaturedEventProps {
  event: {
    id: string
    title: string
    date: string
    location: string
    imageUrl: string
    price: string
  }
}

export default function FeaturedEvent({ event }: FeaturedEventProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="md:flex">
        <div className="md:w-2/3 relative h-64 md:h-auto">
          <Image src={event.imageUrl || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
        </div>
        <div className="p-6 md:w-1/3 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold">{event.title}</h3>
            <div className="flex items-center mt-4 text-gray-600">
              <CalendarDays className="h-5 w-5 mr-2" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center mt-2 text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{event.location}</span>
            </div>
            <div className="mt-4">
              <span className="text-xl font-bold text-purple-700">{event.price}</span>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href={`/events/${event.id}`}
              className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors duration-200"
            >
              Get Tickets
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
