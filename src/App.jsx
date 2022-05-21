import React from "react"
import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import Works from "./components/works/Works"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"

function App() {
    return (
        <div className="app">
            <Navbar/>
            <div className="sections"></div>
            <Intro/>
            <Portfolio/>
            <Works/>
            <Testimonials/>
            <Contact/>
        </div>
    )
}

export default App