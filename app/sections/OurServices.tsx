import React from "react";

const OurServices = () => {
  const hrServices = [
    "Recruitment and Talent Acquisition",
    "Talent Acquisition & Recruitment Designing",
    "HR Policy Design and Implementation",
    "Employee Training & Development",
    "Employee Relations & Wellness Programmes",
    "Performance Management",
    "Compensation & Benefits Structuring",
  ];

  const strategies = [
    "Business growth planning",
    "Change management frameworks",
    "Organizational restructuring",
    "Succession and leadership planning",
  ];

  const labourLaws = [
    "Kenyan labor law consulting",
    "HR compliance audits",
    "Workplace grievance handling and advisory",
  ];

  const organizationLaws = [
    "Employee satisfaction and culture audits",
    "Labor market research",
    "Customized workshops and capacity building programs",
    "Strategic HR analytics",
  ];

  const experiencePoints = [
    "Real Estate Companies",
    "Hospitality Groups",
    "Events Planning & Management Firms",
    "Hardware & Construction Companies",
    "Fitness & Wellness Enterprises",
    "Marketing & Creative Agencies",
  ];

  const choicePoints = [
    "Founder-led Expertise",
    "12+ Years of HR and Strategy Experience",
    "Cross-Sector Insights",
    "Trusted Compliance Experts",
    "Tailored and Practical Delivery",
  ];

  const clients = [
    "/urban-point.png",
    "/macaash.png",
    "/mayaah.png",
    "/hawd.png",
    "/barre.png",
    "/viewpoint.png",
    "/hyat.png",
    "/vivacom.png",
    "/urban-point-hotel.jpeg",
  ];

  const leadershipPoints = [
    "Reputable human capital and business advisors with a proven track record across Africa\'s evolving employment landscape.",
    "Our founding team brings years of consulting experience and deep expertise in HR strategy, organizational restructuring, labor law compliance and international HR practices.",
    "Driven by a shared passion for aligning African talent with global opportunities, we are particularly committed to closing practice gaps between Kenya and high performing markets such as Japan.",
    "Our empathetic leadership styles, strategic mindsets, and unrelenting focus on client success have positioned them as trusted partners for organizations seeking sustainable growth and transformation.",
  ]
  return (
    <section id="our-services" className="mx-auto px-4 lg:p-24 min-h-screen">
      <h1 className="lg:text-5xl text-3xl font-bold mb-4 text-[#a47138] text-center">
        Our Services
      </h1>

      <p className="mb-8 text-center lg:text-2xl">
        We bring deep functional expertise in the following domains:
      </p>
      <div className="lg:grid lg:grid-cols-2 max-lg:flex max-lg:flex-col-reverse gap-16 lg:my-24">
        <div className=" lg:flex lg:flex-col lg:items-start">
          <h1 className="lg:text-4xl text-xl text-[#a47138] mb-4">
            Human Resource Consulting
          </h1>
          {hrServices.map((service) => (
            <li key={service} className="lg:text-xl ml-4">
              {service}
            </li>
          ))}
          <h1 className="lg:text-4xl text-xl text-[#a47138] mt-8 mb-4">
            Strategic Management
          </h1>

          {strategies.map((strategy) => (
            <li key={strategy} className="lg:text-xl ml-4">
              {strategy}
            </li>
          ))}
        </div>
        <div className="bg-[url(/services3.jpg)] bg-cover bg-center rounded-lg shadow-lg" />
      </div>
      <div className="grid lg:grid-cols-2 gap-16 lg:my-24 my-8">
        <div className="bg-[url(/services2.jpg)] bg-cover bg-center rounded-lg shadow-lg" />
        <div>
          <h1 className="lg:text-4xl text-xl text-[#a47138] mb-4">
            Labor Law and Compliance Advisory
          </h1>
          {labourLaws.map((service) => (
            <li key={service} className="lg:text-xl ml-4">
              {service}
            </li>
          ))}
          <h1 className="lg:text-4xl text-xl text-[#a47138] mt-8 mb-4">
            Organizational Management and Research
          </h1>

          {organizationLaws.map((strategy) => (
            <li key={strategy} className="lg:text-xl ml-4">
              {strategy}
            </li>
          ))}
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 max-lg:flex max-lg:flex-col-reverse gap-16 lg:my-24 my-8">
        <div className="lg:flex lg:flex-col lg:items-start">
          <h1 className="lg:text-4xl text-xl text-[#a47138] mb-4">
            Industry Experience
          </h1>
          {experiencePoints.map((service) => (
            <li key={service} className="lg:text-xl ml-4">
              {service}
            </li>
          ))}
          <h1 className="lg:text-4xl text-xl text-[#a47138] mt-8 mb-4">
            Our Distinctive Edge
          </h1>

          {choicePoints.map((strategy) => (
            <li key={strategy} className="lg:text-xl ml-4">
              {strategy}
            </li>
          ))}
        </div>
        <div className="max-md:hidden bg-[url(/services1.jpg)] bg-cover bg-center rounded-lg shadow-lg" />
      </div>
      <h1 className="lg:text-5xl text-xl text-[#a47138] font-semibold text-center lg:mb-8 mb-4">
        Our Leadership Story
      </h1>
      <div>
        {leadershipPoints.map((point) => (
          <div className="flex items-center justify-center" key={point}>
            <p className="lg:text-xl text-lg mt-4">{point}</p>
          </div>
        ))}
      </div>
      <h1 className="lg:text-5xl text-xl text-[#a47138] font-semibold text-center lg:my-16 my-8">
        Who We Have Worked With
      </h1>
      <div className="grid grid-cols-3 gap-10">
        {clients.map((client) => (
          <div className="flex items-center justify-center" key={client}>
            <img src={client} alt={client} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
