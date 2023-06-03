const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 1
}

export const Header = () => {

  const header = document.querySelector('#landing-header') as HTMLElement;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const { isIntersecting } = entry;

      if (isIntersecting) {
        const color = entry.target.getAttribute('data-header-color');
        header.style.color = color || '';
      }
    })
  }, observerOptions)

  const $sections = document.querySelectorAll('#landing-section');
  $sections.forEach(section => observer.observe(section));

  const listItems = document.querySelectorAll('#landing-header li');
  const menuBackDrop = document.querySelector('#menu-backdrop') as HTMLElement;

  listItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const { left, top, width, height } = item.getBoundingClientRect();

      menuBackDrop.style.setProperty('--left', `${left}px`)
      menuBackDrop.style.setProperty('--top', `${top}px`)
      menuBackDrop.style.setProperty('--width', `${width}px`)
      menuBackDrop.style.setProperty('--height', `${height}px`)
      menuBackDrop.style.opacity = '1'
      menuBackDrop.style.visibility = 'visible'

      item.addEventListener('mouseleave', () => {
        menuBackDrop.style.opacity = '0'
        menuBackDrop.style.visibility = 'hidden'
      })
    })
  })

  return (
    <header id='landing-header' className="px-10 py-3 flex items-center fixed top-0 w-full justify-between z-40 text-current">
      <a href="" className="flex flex-grow basis-0">
        <svg className="h-6 w-28 transition-colors duration-500" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg>
      </a>
      <nav>
        <ul className="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
          <li><a href="" target="_blank" rel="noopener noreferrer">Model S</a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer">Model 3</a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer">Model X</a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer">Model Y</a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer">Solar Roof</a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer">Solar Panels</a></li>
          <li><a href="" target="_blank" rel="noopener noreferrer">Powerall</a></li>
        </ul>
      </nav>
      <nav className="flex flex-grow justify-end basis-0">
        <ul className="flex text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
          <li><a href="">Shop</a></li>
          <li><a href="">Account</a></li>
          <li><a href="">Menu</a></li>
        </ul>
      </nav>

      <div id='menu-backdrop' className={
        `absolute top-0 left-0 bg-black/5 backdrop-blur-lg rounded translate-x-[var(--left)] translate-y-[var(--top)] w-[var(--width)] h-[var(--height)] transition-all duration-300 ease-in-out opacity-0 -z-10`
      }>

      </div>
    </header>
  );
}