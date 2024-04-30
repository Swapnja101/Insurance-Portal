import React from "react";

const Infocard = () => {
  return (
    <div>
      <section className="bg-white body-font rounded border shadow-lg overflow-hidden m-4 h-[300px] ">
        <div className="mt-20">
          <div className="font-md text-blue-600 font-bold text-center my-3">
            INSURANCE
          </div>
          <div className="font-md text-4xl font-bold text-center my-3">
          Insurance Catered for Everyone
          </div>
          <div className="font-md  font-medium text-center my-3 mx-[200px]">
          Insurance policies are contracts between individuals and insurance companies. Individuals pay premiums in exchange for financial protection against specified risks. Types of insurance include health, life, auto, homeowners/renters, disability, business, and travel insurance, each tailored to different needs and situations.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infocard;
