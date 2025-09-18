import React from 'react'

const AboutUs = () => {
    const coreValues = [
        {name: 'Integrity', description: ' We act with honesty, clarity and accountability in everything we do.'},
        {name: 'Excellence', description: ' We strive for the highest professional standards in all we do.'},
        {name: 'Client Centricity', description: '  Every solution is built around your unique culture and goals.'},
        {name: 'Empowerment', description: ' We build internal capabilities to future-proof your business.'},
        {name: 'Impact', description: '  We are here to drive meaningful, measurable change.'},
    ]
  return (
    <section id='about-us' className='max-w-7xl mx-auto px-4 py-16 min-h-screen'>
      <div className="max-lg:flex max-lg:flex-col grid grid-cols-2 lg:gap-32 gap-8">
        <div className="flex flex-col">
            <h2 className="font-bold text-[#a48137] lg:text-6xl text-4xl md:text-center mb-8">Who Are We?</h2>
            <p className='lg:text-2xl text-lg text-[#151e27] leading-relaxed'>
            Ruwwad Limited is a human capital and business transformation firm headquartered in Nairobi, Kenya.
            We specialize in human capital management, strategic business solutions, and organizational development.
            <br /><br />
            Ruwwad is built on a simple truth: sustainable business performance starts with people.
            We work at the intersection of strategy, people and culture guiding leaders to build agile organizations.
            <br /><br />
            Since our inception in 2022, we've supported ambitious companies across industries with insights,
            frameworks and tools that bridge local realities with global standards.
            </p>
        </div>
        <div className="rounded-xl shadow-xl bg-[url(/people.jpg)] bg-center bg-cover max-lg:h-96 w-full"/>
      </div>
      {/* mission, vision and core values */}
      <div className="grid grid-cols-2 lg:mt-32 mt-8 gap-8 max-lg:grid-cols-1">
        <div className="flex flex-col items-center p-4">
            <h3 className="font-bold lg:text-5xl text-3xl text-[#a48137] mb-4">Our Mission</h3>
            <p className='lg:text-2xl md:text-xl text-lg leading-relaxed'>
            To empower organizations and individuals through human-centered,
            high-impact consulting solutions that drive performance, ensure compliance
            and create lasting business value.
            </p>
        </div>
        <div className="flex flex-col items-center p-4">
            <h3 className="font-bold lg:text-5xl text-3xl text-[#a48137] mb-4">Our Vision</h3>
            <p className='lg:text-2xl md:text-xl text-lg leading-relaxed'>
            To become Africa&apos;s most trusted partner for strategic HR and business transformation,
            and to be renowned for delivering with integrity, precision and measurable impact.
            </p>
        </div>
      </div>
        <div className="grid lg:grid-cols-2 mx-auto md:mt-24 lg:gap-32 md:gap-16 gap-4">
            <div className="rounded-xl shadow-xl bg-[url(/values.jpg)] bg-center bg-cover max-lg:h-96 w-full h-full"/>
            <div className="p-4 max-md:text-center">
                <h3 className="font-bold lg:text-5xl text-3xl text-[#a48137] mb-4">Our Core Values</h3>
                {coreValues.map((value) => (
                    <div className='mb-8 flex flex-col' key={value.name}>
                        <h4 className='font-semibold lg:text-3xl text-xl text-[#151e27] mb-2'>{value.name}</h4>
                        <p className='lg:text-xl md:text-lg text-[#151e27]'>{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default AboutUs
