import React from 'react'

const HeroSection = () => {
  return (
    <section className='relative bg-[url(/hero.jpg)] bg-center bg-cover min-h-screen flex flex-col items-center justify-center'>
        <div className="absolute inset-0 bg-black opacity-60"/>
        <div className="absolute flex flex-col gap-8 justify-center p-4 text-white text-center">
            <h1 className="md:text-7xl text-4xl font-bold">Ruwwad Limited</h1>
            <h1 className="md:text-2xl text-lg">Pioneering projects, Empowering people.</h1>
        </div>
    </section>
  )
}

export default HeroSection
