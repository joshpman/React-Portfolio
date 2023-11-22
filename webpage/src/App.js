import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import { useState } from 'react';
function App() {
  const [darkMode, setDarkMode] = useState(0);
    return (
    <>
      <Nav/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
    </>
  );
}
export default App;
