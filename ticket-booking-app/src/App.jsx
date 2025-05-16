import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import EventDetails from "./pages/EventDetails"
import Checkout from "./pages/Checkout"
import MyTickets from "./pages/MyTickets"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/my-tickets" element={<MyTickets />} />
    </Routes>
  )
}

export default App
