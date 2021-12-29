import './App.css';
import travel01 from './assets/travel-1.jpg'
import travel02 from './assets/travel-2.jpg'
import travel03 from './assets/travel-3.jpg'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';


const navbarLinks = [
  {
      url: '/home',
      title: 'Home',
  },
  {
      url: '/about',
      title: 'About',
  },
  {
    url: '/destinations',
    title: 'Destinations'
  },
];
function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel01} />
      <Slider 
        imageSrc={travel02}
        title={'Be an Explorer'}
        subtitle={'Our platform offers a wide variety of services for travelers'}
      />
      <Slider imageSrc={travel03}
        title={'Memories for a lifetime...'}
        subtitle={'Your dream vacation is only a few click away'}
        flipped={true}
      />
    </div>
  );
}

export default App;
