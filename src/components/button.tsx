import './button.css'

interface ButtonProps {
  text: string,
  isPrimary?: boolean,
  isSecundary?: boolean
}


export const Button: React.FC<ButtonProps> = ({text, isPrimary, isSecundary}) => {
  return (
    <div>
      <a className={`btn ${isPrimary ? 'btn--primary' : isSecundary ? 'btn--secundary' : 'btn--third'}`} href='/'>
        { text }
      </a>
    </div>
  )
}