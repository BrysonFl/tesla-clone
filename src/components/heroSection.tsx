import { Button } from "./button"

interface HeroProps {
  title?: string,
  description?: string,
  isHero?: boolean,
  srcImg?: string,
  isLink?: boolean,
  colorHeader?: string
}

export const HeroSection:React.FC<HeroProps> = ({title, description, isHero, srcImg, isLink, colorHeader}) => {
  return (
    <section id='landing-section' className='bg-black h-screen w-screen text-center relative overflow-hidden' data-header-color={colorHeader}>
      <div className='z-30 relative flex flex-col h-full'>
        <div>
          <h2 className={`pt-40 text-[40px] font-medium ${isHero ? 'text-white' : 'text-black'}`}>{ title }</h2>

          {
            isLink ?
              <p>
                <a className="underline text-sm" href="">{ description }</a>
              </p>
            :
              <p className={`text-sm ${isHero ? 'text-white' : 'text-black'}`}>{ description }</p>
          }
        </div>

        <div className='flex flex-col flex-grow justify-end pb-24'>
          <Button msg="Demo Drive" />
        </div>
      </div>

      <div className='absolute top-0 bottom-0 z-10 h-full w-full'>
        {
          isHero ?
            <video className='object-cover h-full w-full' autoPlay muted loop src="/src/assets/Homepage-Test_Drive-NA-Desktop.webm"></video>
          :
            <img src={srcImg} alt="" />
        }
      </div>
    </section>
  )
}