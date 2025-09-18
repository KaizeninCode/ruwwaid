import React from 'react'

const Header = () => {
    const navLinks = [
        {name: 'About Us', href: '#about-us'},
        {name: 'Services', href: '#services'},
        {name: 'Contact', href: '#contact'},
    ]
  return (
    <header className='max-lg:hidden w-full p-4 dark:border-b dark:border-b-white/50 border-b border-b-[#151e27] flex items-center justify-between'>
      <a href="#" className='cursor-pointer'>
          <div>
            <img src="/ruwwad-logo.png" alt="Ruwwad Limited Logo" className='h-16 w-24'/>
          </div>
      </a>
      <nav className='flex justify-around gap-16 text-lg'>
        {navLinks.map((link) => (
            <a href={link.href} key={link.href} className='hover:text-[#a47138] hover:scale-102 transition duration-700 ease-in-out'>{link.name}</a>
        ))}
      </nav>
    </header>
  )
}

export default Header
