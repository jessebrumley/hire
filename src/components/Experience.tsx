import ResumeModal from "./ResumeModal";

export default function Experience() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-4xl mx-auto bg-white border shadow-md rounded-2xl p-6 text-black">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>

        <div className="mb-8">
          <h3 className="text-lg font-semibold">Medical Scheduler</h3>

          <p className="text-sm italic mb-3">
            RadNet | Tulsa, OK | August 2026 — Present
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              Scheduled medical procedures and navigated insurance protocols to
              ensure accurate patient scheduling.
            </li>
            <li>
              Maintained database records and enforced strict compliance with
              HIPAA and data privacy guidelines.
            </li>
            <li>
              Communicated preparation guidelines and technical requirements
              clearly to patients, physicians, and clinical staff.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold">Seasonal Cashier</h3>

          <p className="text-sm italic mb-3">
            Lowe's Home Improvement | April 2026 — August 2026
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              Assisted customers with purchases, product inquiries, and general
              store support in a fast-paced retail environment.
            </li>
            <li>
              Processed cash, credit, and electronic transactions accurately
              while maintaining excellent customer service.
            </li>
            <li>
              Utilized point-of-sale systems and store technology to complete
              transactions and support daily operations.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold">
            Customer Service Representative
          </h3>

          <p className="text-sm italic mb-3">
            U.S. Cellular | Tulsa, OK | Jan 2018 — Feb 2023
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              Diagnosed and resolved customer account, billing, and service
              issues using systems, workflows, and account data.
            </li>
            <li>
              Navigated multiple software tools and CRM platforms simultaneously
              while maintaining accuracy and data integrity.
            </li>
            <li>
              Communicated technical and account information clearly to
              non-technical users in a fast-paced environment.
            </li>
          </ul>
        </div>
        <ResumeModal />
      </div>
    </section>
  );
}
