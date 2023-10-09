import { Suspense } from "react"
import { Header } from "./components/header/Header"
import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./components/home/Home"
import { Footer } from "./components/footer/Footer"


export const App = () => {

  return (
    <div>
     <Header />
        <Routes>
          <Route path="/Fitness-Website" element={<Home />} />
          <Route path="/*" element={ <Navigate to={'/Fitness-Website'} element={<Home/>}/> } />
        </Routes>
      <Footer />
    </div>
  )
  
}

