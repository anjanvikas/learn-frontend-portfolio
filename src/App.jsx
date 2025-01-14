import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Experiences from './components/Experience';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from './components/Projects';

function App() {

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Contact />
    </div>
  )
}

export default App
