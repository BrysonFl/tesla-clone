interface ButtonProps {
  text: string,
  bgColor: string,
  textColor: string
}

export const Button: React.FC<ButtonProps> = ({text, bgColor, textColor}) => {
  return (
    <div className="bg-greyColor">
      <a className={`bg-black text-${textColor} border-2 border-${bgColor} rounded text-sm px-20 py-2 transition-colors`} href='/'>
        {text}
      </a>
    </div>
  )
}