interface ButtonProps {
  msg: string,
  howManyButtons?: number
}

export const Button: React.FC<ButtonProps> = ({msg, howManyButtons}) => {
  return (
    <div>
      <a className='text-white border-2 rounded text-sm px-20 py-2 backdrop-blur-3xl border-white hover:text-black hover:bg-white bg-white/5 transition-colors' href='/'>
        {msg}
      </a>
    </div>
  )
}