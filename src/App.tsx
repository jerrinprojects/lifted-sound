import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Releases from './components/Releases'
import About from './components/About'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Releases />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
