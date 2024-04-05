
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/hero';
import Projects from './components/projects';
import Resume from './components/resume';
import Contact from './components/contact';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
        <Header/>
        <Hero/>
        <About/>
        <Projects/>
        <Resume/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
