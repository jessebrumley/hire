import ResumeModal from './ResumeModal';

export default function Experience() {
    return (
        <section className="bg-white py-10">
            <div className="max-w-4xl mx-auto bg-white border shadow-md rounded-2xl p-6 text-black">
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                <p className="mb-6">
                    While my past professional experience has been outside the tech field, I bring strong communication, leadership, and analytical skills from over 18 years in customer service roles.
                </p>

                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Customer Service Representative</h3>
                    <p className="text-sm italic">U.S. Cellular | Tulsa, OK | Jan 2018 – May 2023</p>
                    <p>Supported customers with billing, troubleshooting, and device issues in a fast-paced environment. Built a reputation for clarity, patience, and problem-solving under pressure.</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold">Security Officer</h3>
                    <p className="text-sm italic">G4S Security | Tulsa, OK | Jan 2017 – Jan 2018</p>
                    <p>Monitored premises, handled incident reports, and maintained detailed communication logs. Demonstrated responsibility, attention to detail, and clear reporting.</p>
                </div>
                <ResumeModal />
            </div>
        </section>
    );
}
