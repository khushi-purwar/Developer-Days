import './App.css';
import Navbar from './Components/Navbar';
 import About from './Components/About';
import Skills from './Components/Skills';
 import Projects from './Components/Project';
 import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';


function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font" >
    <Navbar/>
    <About/>
    <Projects/>
    <Skills /> 
    <Testimonials />
    <Contact/>
   
    </main>
  );
}

export default App;