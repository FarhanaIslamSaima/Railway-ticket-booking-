"use client"

import { useState } from "react"
import { Disclosure } from "@headlessui/react"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function SeatSelection() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null)
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])

  const sections = [
    { id: "floor", name: "Floor", price: 299 },
    { id: "lower-bowl", name: "Lower Bowl", price: 199 },
    { id: "mid-level", name: "Mid Level", price: 149 },
    { id: "upper-level", name: "Upper Level", price: 99 },
  ]

  const handleSectionClick = (sectionId: string) => {
    setSelectedSection(sectionId)
  }

  const handleSeatClick = (seatId: string) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((id) => id !== seatId))
    } else {
      setSelectedSeats([...selectedSeats, seatId])
    }
  }

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-50 px-4 py-3 text-left text-sm font-medium text-purple-900 hover:bg-purple-100 focus:outline-none">
            <span className="text-lg">Select Your Seats</span>
            {open ? (
              <ChevronUp className="h-5 w-5 text-purple-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-purple-500" />
            )}
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2">
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                Select a section to view available seats. Click on seats to select them.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    className={`px-4 py-2 rounded-full text-sm ${
                      selectedSection === section.id
                        ? "bg-purple-600 text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                    onClick={() => handleSectionClick(section.id)}
                  >
                    {section.name} - ${section.price}
                  </button>
                ))}
              </div>

              {selectedSection && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-center mb-6">
                    <div className="w-3/4 mx-auto h-8 bg-gray-300 rounded-t-lg flex items-center justify-center text-sm font-medium">
                      STAGE
                    </div>
                  </div>

                  <div className="grid grid-cols-10 gap-2 mb-6">
                    {Array.from({ length: 60 }, (_, i) => {
                      const seatId = `${selectedSection}-${i + 1}`
                      const isSelected = selectedSeats.includes(seatId)

                      return (
                        <button
                          key={seatId}
                          className={`aspect-square rounded-md flex items-center justify-center text-xs ${
                            isSelected
                              ? "bg-purple-600 text-white"
                              : "bg-white border border-gray-300 hover:border-purple-500"
                          }`}
                          onClick={() => handleSeatClick(seatId)}
                        >
                          {i + 1}
                        </button>
                      )
                    })}
                  </div>

                  <div className="flex justify-center gap-6 text-sm">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-white border border-gray-300 rounded-md mr-2"></div>
                      <span>Available</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-purple-600 rounded-md mr-2"></div>
                      <span>Selected</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-gray-400 rounded-md mr-2"></div>
                      <span>Taken</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
