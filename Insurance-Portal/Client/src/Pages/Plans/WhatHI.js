import React from 'react'

const WhatHI = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded-3xl"
              alt="hero"
              src="https://img.freepik.com/premium-photo/happy-young-family-bonding-together-home_425904-4579.jpg?size=626&ext=jpg&ga=GA1.2.969823653.1689870495&semt=ais"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="font-md text-blue-600 font-bold text-center my-3">
              INSURANCE POLICY
            </div>
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">
              What is Insurance Policy?
            </h1>
            <p className="mb-5 leading-relaxed">
            An insurance policy is a contract between an individual (or entity) and an insurance company. In exchange for regular payments known as premiums, the insurance company agrees to provide financial protection or reimbursement against specified losses. These losses could include damage to property, illness, disability, death, or liability for damages caused to others.
            </p>
            <p className="mb-8 leading-relaxed">
            There are various types of insurance policies available, catering to different needs and risks, including health insurance, life insurance, auto insurance, homeowners insurance, and business insurance, among others. Each type of policy offers specific protections tailored to the risks associated with the insured asset or aspect of life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhatHI