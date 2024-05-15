
import { useState } from "react"
import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Program from "./Components/Program/Program"
import Testimonials from "./Components/Testimonials/Testimonials"
import Title from "./Components/Title/Title"
import Videoplayer from "./Components/Videoplayer/Videoplayer"
function App() {
    const [playState,setPlayState]=useState(false);
  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our Program' title='What We Offer'/>
        <Program/>
        <About setPlayState={setPlayState} />
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials/>
        <Title subtitle='Contact us' title='Get in touch'/>
        <Contact/>
        <Footer/>
        <Videoplayer playState={playState} setPlayState={setPlayState}/>
      </div>
    </>
  )
}
export default App
