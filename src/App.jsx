import Header from './components/Header/Header'
import HeroSection from './components/Hero/HeroSection'
import Contact from './components/Contact/Contact'
import ListComponent from './components/List/ListComponent'
import FloatingButton from './components/FloatingButton/FloatingButton'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Contact />
        <ListComponent />
      </main>
      <FloatingButton />
      <Footer /> 
    </>
  )
}

export default App
