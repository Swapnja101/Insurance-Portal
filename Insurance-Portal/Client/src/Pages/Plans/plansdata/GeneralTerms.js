import React from "react";

const GeneralTerms = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-semibold mb-4">General Terms</h2>
      <div>
        <h3 className="text-lg font-semibold mb-2">Waiting Period:</h3>
        <h4 className="text-lg font-semibold mb-2">For Health:</h4>
        <ul className="list-disc pl-6 mb-6">
          <li>For Pre-Existing Diseases - 12 months</li>
          <li>For Specific Diseases/Procedures - 24 months</li>
          <li>Initial Waiting Period - 30 days (Except for Accidents)</li>
        </ul>
        <h4 className="text-lg font-semibold mb-2">For travel:</h4>
        <ul className="list-disc pl-6 mb-6">
          <li> 7-30 days</li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">
          Dedicated Senior Citizens Claims & Grievances:
        </h3>
        <p>Policyholders with complaints approach the insurer's Complaints/Grievance Redressal Cell first.</p>
        <p>If unsatisfied, contact the Integrated Grievance Management System (IGMS) - IRDAI Portal or call Toll Free No. 155255 or 1800 4254 732.</p>
        <p className="mt-2">
          Email:{" "}
          <a
            href="mailto:insuranceportal@gmail.com"
            className="text-blue-500 underline"
          >
            insuranceportal@gmail.com
          </a>{" "}
          or{" "}
          <a
            href="mailto:grievances@insuranceportal.in"
            className="text-blue-500 underline"
          >
            grievances@insuranceportal.in
          </a>
        </p>
        <p className="mt-2">
          If they do not receive a response from the insurer within a reasonable
          period or are dissatisfied with the response of the company, contact
          the Integrated Grievance Management System(IGMS) - IRDAI Portal at{" "}
          <a
            href="https://igms.irda.gov.in"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://igms.irda.gov.in
          </a>{" "}
          for registering the complaints. Email to{" "}
          <a
            href="mailto:complaints@irdai.gov.in"
            className="text-blue-500 underline"
          >
            complaints@irdai.gov.in
          </a>
          .
        </p>
        <p className="mt-2">
          You can also call Toll Free No. 155255 or 1800 4254 732.
        </p>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">
          Pre-Acceptance Medical Screening:
        </h3>
        
        <ul className="list-disc pl-6 mt-2">
          <li>No pre-acceptance medical screening required.</li>
          <li>Submission of specified medical records can result in a 10% discount.</li>
        </ul>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Free Look Period:</h3>
        <p>
        Insured allowed 15 days from receipt of policy for review.
Premium refund conditions:



        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>
          No claim during the free look period: full premium refund less expenses.
          </li>
          <li>
          If risk has commenced and policy is returned: deduction for proportionate risk premium.
          </li>
          <li>
          If only a part of coverage has commenced: proportionate premium refund.
          </li>
          
        </ul>
        <p className="mt-2">
          Free look period shall not be applicable at the time of renewal.
        </p>
      </div>
      <p className="mt-6 text-sm">
        Note: Renewal premium, terms, and conditions subject to change with IRDAI approval.
      </p>
    </div>
  );
};

export default GeneralTerms;
