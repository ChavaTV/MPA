import Navbar from "./components/Navbar";
import Pilares from "./components/Pilares";
import { CarouselManual as Carousel } from './components/Carousel_manual';
import { CarouselTransition as Carousel_T } from './components/Carousel_transition';
import Footer from "./components/footer";
import Contact0 from "./components/Contact";



function App() {
  return (
    <div>
      <Navbar/>
      <Pilares/>
      <Carousel/>            
      <Carousel_T/>
      <Contact0/>
      <Footer/>
    </div>
  );
}

export default App;


