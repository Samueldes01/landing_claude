import { MobileContainer } from './components/ui/MobileContainer'
import { Hero } from './components/sections/Hero'
import { Problems } from './components/sections/Problems'
import { Solution } from './components/sections/Solution'
import { AppShowcase } from './components/sections/AppShowcase'
import { About } from './components/sections/About'
import { Stats } from './components/sections/Stats'
import { Testimonials } from './components/sections/Testimonials'
import { FinalCTA } from './components/sections/FinalCTA'
import { Footer } from './components/sections/Footer'

function App() {
  return (
    <MobileContainer>
      <div className="min-h-screen bg-dark-900 bg-noise">
        {/* Ambient gradient background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-orange-500/3 rounded-full blur-[100px]" />
        </div>

        {/* Content */}
        <main className="relative z-10">
          <Hero />
          <Problems />
          <Solution />
          <AppShowcase />
          <About />
          <Stats />
          <Testimonials />
          <FinalCTA />
          <Footer />
        </main>
      </div>
    </MobileContainer>
  )
}

export default App
