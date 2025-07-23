import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AdventuresSection from './components/AdventuresSection'
import MenuSection from './components/MenuSection'
import GearSection from './components/GearSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AdventuresSection />
      <MenuSection />
      <GearSection />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default App

