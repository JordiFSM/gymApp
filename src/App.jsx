import { Suspense } from "react"
import { Header } from "./components/header/Header"
import { Route, Routes } from "react-router-dom"
import { Home } from "./components/home/Home"


export const App = () => {

  return (
    <div>
     <Header />
        <Routes>
          <Route path="/Fitness-Website" element={<Home />} />
        </Routes>
    </div>
  )
  
}

