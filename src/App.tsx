import './App.css'
import { Header } from './components/header'
import { HeroSection } from './components/heroSection'

function App() {
  return (
    <>
      <Header />

      <main className='relative w-full h-screen overflow-auto snap-y snap-mandatory'>
        <div className='snap-center'>
          <HeroSection title='Experience Tesla' description='Schedule a Demo Drive Today' isHero colorHeader='white' />
        </div>
        <div className='snap-center'>
          <HeroSection title='Model 3' description='Lease from $429/mo' srcImg='/src/assets/Homepage-Model-3-Desktop-LHD.avif' isLink colorHeader='black' />
        </div>
        <div className='snap-center'>
          <HeroSection />
        </div>
        <div className='snap-center'>
          <HeroSection />
        </div>
        <div className='snap-center'>
          <HeroSection />
        </div>
        <div className='snap-center'>
          <HeroSection />
        </div>
      </main>
    </>
  )
}

export default App
