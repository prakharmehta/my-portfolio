import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'

function App() {
  return <>
  <Header></Header>
  <div className="container flex">
    <Profile></Profile>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  </div>
  </>
}

export default App
