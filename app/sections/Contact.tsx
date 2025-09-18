import React from 'react'
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const Contact = () => {
    const contacts = [
        {type: 'Phone', value: '+254 705 199 911', icon: <FiPhone className="lg:text-5xl text-2xl text-[#a47138]" />},
        {type: 'Email', value: 'Ruwwadlimited@gmail.com', icon: <FiMail className="lg:text-5xl text-2xl text-[#a47138]" />},
        {type: 'Location', value: 'Nairobi, Kenya', icon: <FiMapPin className="lg:text-5xl text-2xl text-[#a47138]" />},
    ]
  return (
    <section id='contact' className='bg-[#151e27] mx-auto px-4 py-16 min-h-screen'>
      <div className="text-center mb-32 font-bold text-[#a47138] md:text-5xl text-2xl">Contact Us</div>
      <div className="flex flex-col justify-between mx-auto gap-16">
        {contacts.map((contact) => (
            <div className=" flex border-white lg:w-1/2 mx-auto justify-center items-center gap-4" key={contact.value}>
                {contact.icon} 
                <h1 className="lg:text-5xl text-xl font-semibold text-white">{contact.value}</h1>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Contact
