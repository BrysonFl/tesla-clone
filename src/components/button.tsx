interface ButtonProps {
  text: string,
  bgColor: string,
  textColor: string
}

export const Button: React.FC<ButtonProps> = ({text, bgColor, textColor}) => {
  return (
    <div>
      <a className='text-white border-2 border-white rounded text-sm px-20 py-2 transition-colors' href='/'>
        {text}
      </a>
    </div>
  )
}