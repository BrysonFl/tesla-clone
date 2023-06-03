import { ReactElement } from "react"
import { Button } from "./button"
import { ButtonProperies } from "../interfaces/ButtonProperties"

interface HeroProps {
  title?: string,
  description?: string,
  isLink?: boolean,
  colorHeader?: string,
  children: ReactElement,
  textColor: string,
  buttons: Array<ButtonProperies>
}

export const HeroSection:React.FC<HeroProps> = ({title, description, isLink, colorHeader, textColor, buttons, children}) => {
  return (
    <section id='landing-section' className='bg-black h-screen w-screen text-center relative overflow-hidden' data-header-color={colorHeader}>
      <div className='z-30 relative flex flex-col h-full'>
        <div>
          <h2 className={`pt-40 text-[40px] font-medium text-${textColor}`}>{ title }</h2>

          {
            isLink ?
              <p>
                <a className="underline text-sm" href="">{ description }</a>
              </p>
            :
              <p className={`text-sm text-${textColor}`}>{ description }</p>
          }
        </div>

        <div className='flex flex-grow items-end gap-4 justify-center pb-24'>
          {
            buttons.map(button => <Button text={button.text} isPrimary={button.isPrimary} isSecundary={button.isSecundary} />)
          }
        </div>
      </div>

      <div className='absolute top-0 bottom-0 z-10 h-full w-full'>
        { children }
      </div>
    </section>
  )
}