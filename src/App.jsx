import { BrowserRouter } from "react-router-dom";
import {  Academic, Contact, Experience, Community, Hero, Navbar, Extracurricular, Hobbies, StarsCanvas} from './components';


const  App = () => {


  return (
    <BrowserRouter>
    <div className="relative z-0 bg-hero-pattern bg-primary  ">
      <div className="bg-cover bg-no-repeat bg-center ">
        <Navbar />
        <Hero />
        
      </div>
      
      <Experience />
      <Academic />
      <Community />
      <Extracurricular />
      
      <Hobbies />
 
      <div className="relative z-0">
       

      </div>

    </div>
    </BrowserRouter>
  )
}

export default App
