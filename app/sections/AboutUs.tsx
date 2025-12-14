import React from 'react'

const AboutUs = () => {
    const coreValues = [
        {name: 'Professionalism', description: ' We uphold the highest standards of competence, respect, and ethical conduct in very engagement.'},
        {name: 'Customer Focus', description: ' Our clients are at the heart of everything we do, and we tailor solutions to their unique needs.'},
        {name: 'Integrity', description: '  We act with honesty, transparency, and accountability, building trust that lasts.'},
        {name: 'Sustainable Partnership', description: ' We foster long term relationships that drive resilience, collaboration, and shared success.'},
        {name: 'Growth', description: '  We empower organizations and individuals to achieve continuous development and measurable progress.'},
    ]

    const missionPoints = [
      {point: 'Drive performance', description: 'by unlocking people\'s potential and aligning strategy with execution'},
      {point: 'Ensure compliance', description: 'with robust frameworks and ethical practice'},
      {point: 'Create lasting business value', description: 'by building agile, future-ready organizations'},
    ]
  return (
    <section id='about-us' className='max-w-7xl mx-auto p-20 min-h-screen'>
      <div className="max-lg:flex max-lg:flex-col grid grid-cols-2 lg:gap-32 gap-8">
        <div className="flex flex-col">
            <h2 className="font-bold text-[#a48137] lg:text-6xl text-4xl max-md:text-center mb-8">Who Are We?</h2>
            <p className='lg:text-2xl text-lg leading-relaxed'>
            Ruwwad Limited is a human capital and business transformation firm headquartered in Nairobi, Kenya.
            <br /><br />
            <span className='lg:text-3xl text-xl text-[#a48137] font-semibold'>Our Expertise</span>
            <br />
            Human capital management, strategic business solutions, and organizational development.
            <br /><br />
            <span className='lg:text-3xl text-xl text-[#a48137] font-semibold'>Our Philosophy</span>
            <br />
            Sustainable business performance starts with people.
            <br /><br />
            <span className='lg:text-3xl text-xl text-[#a48137] font-semibold'>Our Approach</span>
            <br />
            We operate at the intersection of strategy, people, and culture—helping leaders build agile organizations.
            <br /><br />
            <span className='lg:text-3xl text-xl text-[#a48137] font-semibold'>Our Impact</span>
            <br />
            Since inception, we have become the recruiter of choice for ambitious companies across industries, delivering insights, frameworks, and tools that bridge local realities with global standards.
            <br />
            </p>
        </div>
        <div className="rounded-xl shadow-xl bg-[url(/people.jpg)] bg-center bg-cover max-lg:h-96 w-full"/>
      </div>
      {/* mission, vision and core values */}
      <div className="lg:mt-32 mt-8 gap-8">
        <div className="flex flex-col items-center p-4">
            <h3 className="font-bold lg:text-5xl text-3xl text-[#a48137] mb-4">Our Mission</h3>
            <p className="text-2xl mb-4">To empower organizations and individuals through human-centered, high-impact consulting solutions that:</p>
            <div className="text-left">
            {missionPoints.map((point, index) => (
                <li className="mb-3 lg:text-2xl text-xl" key={index}><strong>{point.point}</strong> {point.description}</li>
              ))}
              </div>
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
            <div className="rounded-xl max-md:hidden shadow-xl bg-[url(/values.jpg)] bg-center bg-cover max-lg:h-96 w-full h-full"/>
            <div className="p-4 max-md:text-center">
                <h3 className="font-bold lg:text-5xl text-3xl text-[#a48137] mb-4">Our Core Values</h3>
                {coreValues.map((value) => (
                    <div className='mb-8 flex flex-col' key={value.name}>
                        <h4 className='lg:text-3xl text-xl mb-2 text-[#a48137]'>{value.name}</h4>
                        <p className='lg:text-xl md:text-lg'>{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default AboutUs
