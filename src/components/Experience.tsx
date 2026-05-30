import ResumeModal from "./ResumeModal";

export default function Experience() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-4xl mx-auto bg-white border shadow-md rounded-2xl p-6 text-black">
        <h2 className="text-2xl font-bold mb-6">Experience</h2>

        <div className="mb-8">
          <h3 className="text-lg font-semibold">
            Cashier / Customer Service Associate
          </h3>

          <p className="text-sm italic mb-3">Lowe's | May 2026 — Present</p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              Assisted customers with purchases, product inquiries, and
              general store support in a fast-paced retail environment.
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
              Supported customers with account management, billing inquiries,
              and service troubleshooting in a high-volume environment.
            </li>
            <li>
              Diagnosed and resolved customer issues using internal systems,
              workflows, and account data.
            </li>
            <li>
              Navigated multiple software tools and CRM platforms simultaneously
              while maintaining accuracy and data integrity.
            </li>
            <li>
              Communicated technical and account-related information clearly to
              non-technical users.
            </li>
            <li>
              Maintained consistent performance in a fast-paced environment
              requiring multitasking, prioritization, and attention to detail.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold">Security Officer</h3>

          <p className="text-sm italic mb-3">
            G4S Security | Tulsa, OK | Jan 2017 — Jan 2018
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              Conducted facility monitoring and routine patrols to ensure safety
              and compliance with established procedures.
            </li>
            <li>
              Documented incidents and maintained detailed logs using reporting
              systems with strong attention to accuracy.
            </li>
            <li>
              Responded to incidents and escalations using structured procedures
              and sound judgment under pressure.
            </li>
            <li>
              Communicated effectively with staff, visitors, and emergency
              personnel during routine operations and incidents.
            </li>
            <li>
              Demonstrated reliability, situational awareness, and independent
              decision-making in a high-responsibility role.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold">
            Customer Service & Support Roles
          </h3>

          <p className="text-sm italic mb-3">
            Alorica | Dish Network | West Corporation | Tulsa, OK
          </p>

          <ul className="list-disc ml-6 space-y-2">
            <li>
              Provided customer support across telecom, retail, and service
              environments, handling billing, account issues, and general
              inquiries.
            </li>
            <li>
              Used internal software systems and ticketing tools to document
              interactions and resolve customer concerns.
            </li>
            <li>
              Troubleshot service issues and followed structured procedures to
              ensure consistent resolution.
            </li>
            <li>
              Maintained high levels of communication quality, professionalism,
              and customer satisfaction.
            </li>
          </ul>
        </div>

        <ResumeModal />
      </div>
    </section>
  );
}
