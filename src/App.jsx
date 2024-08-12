import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css'
import Nav from './components/Nav.jsx'
import Home from './components/Home.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'
import Signup from './components/Signup.jsx'


function App() {


  return (
    <Router>
      <Nav />
      <Footer />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        
      </div>
      {/* <Card /> */}
    </Router>
    
  )
}

export default App
