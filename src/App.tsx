import './App.css'
import { Header } from './components/header'
import { HeroSection } from './components/heroSection'

function App() {
  return (
    <>
      <Header />

      <main className='relative w-full h-screen overflow-auto snap-y snap-mandatory'>
        <div className='snap-center'>
          <HeroSection title='Experience Tesla' description='Schedule a Demo Drive Today' colorHeader='white' textColor='white' buttons={[
            {
              text: 'Demo Drive',
              isPrimary: true
            }
          ]}>
            <video className='object-cover h-full w-full' autoPlay muted loop src="/src/assets/Homepage-Test_Drive-NA-Desktop.webm"></video>
          </HeroSection>
        </div>
        <div className='snap-center'>
          <HeroSection title='Model 3' description='Lease from $429/mo' isLink colorHeader='black' textColor='black' buttons={[
            {
              text: 'Order Now',
              isSecundary: true
            },
            {
              text: 'Demo Drive',
            }
          ]}>
            <img className='object-cover h-full w-full' src="/src/assets/Homepage-Model-3-Desktop-LHD.avif" alt="" />
          </HeroSection>
        </div>
        <div className='snap-center'>
          <HeroSection title='Model Y' description='View Inventory' isLink colorHeader='black' textColor='black' buttons={[
            {
              text: 'Order Now',
              isSecundary: true
            },
            {
              text: 'Demo Drive',
            }
          ]}>
            <img className='object-cover h-full w-full' src="/src/assets/Homepage-Model-Y-Global-Desktop.avif" alt="" />
          </HeroSection>
        </div>
        <div className='snap-center'>
          <HeroSection title='Model S' description='View Inventory' isLink colorHeader='black' textColor='black' buttons={[
            {
              text: 'Order Now',
              isSecundary: true
            },
            {
              text: 'Demo Drive',
            }
          ]}>
            <img className='object-cover h-full w-full' src="/src/assets/Model-S-homepage-desktop.avif" alt="" />
          </HeroSection>
        </div>
        <div className='snap-center'>
          <HeroSection title='Model X' description='View Inventory' isLink colorHeader='black' textColor='black' buttons={[
            {
              text: 'Order Now',
              isSecundary: true
            },
            {
              text: 'Demo Drive'
            }
          ]}>
            <img className='object-cover h-full w-full' src="/src/assets/Homepage-Model-X-Desktop-LHD.avif" alt="" />
          </HeroSection>
        </div>
        <div className='snap-center'>
          <HeroSection title='Solar Panels' description='Lowest Cost Solar Panel in America' colorHeader='black' textColor='black' buttons={[
            {
              text: 'Order Now',
              isSecundary: true
            },
            {
              text: 'Learn More'
            }
          ]}>
            <img className='object-cover h-full w-full' src="/src/assets/425_HP_SolarPanels_D.avif" alt="" />
          </HeroSection>
        </div>
        <div className='snap-center'>
          <HeroSection title='Solar Roof' description='Produce Clean Energy From Your Roof' colorHeader='black' textColor='black' buttons={[
            {
              text: 'Order Now',
              isSecundary: true
            },
            {
              text: 'Learn More'
            }
          ]}>
            <img className='object-cover h-full w-full' src="/src/assets/Homepage-SolarRoof-Desktop-Global.avif" alt="" />
          </HeroSection>
        </div>
        <div className='snap-center'>
          <HeroSection title='Accessories' isLink colorHeader='black' textColor='black' buttons={[
            {
              text: 'Shop Now',
              isSecundary: true
            }
          ]}>
            <img className='object-cover h-full w-full' src="/src/assets/Desktop_Accessories.avif" alt="" />
          </HeroSection>
        </div>
      </main>
    </>
  )
}

export default App
