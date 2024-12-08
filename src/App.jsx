
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Experience from './pages/Experience/Experience'
import Skills from './pages/Skills/Skills'
import Contact from './pages/Contact/Contact'
import Projects from './pages/Projects/Projects'
import Nopage from './components/Nopage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/experience" element={ <Experience /> } />
        <Route path="/project" element={ <Projects /> } />
        <Route path="/skills" element={ <Skills /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="*" element={ <Nopage /> } />
      </Routes>
    </>
  )
}

export default App


