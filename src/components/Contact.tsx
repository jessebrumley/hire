export default function Contact() {
    return (
        <section className="bg-gray-200 py-10">
            <div className="max-w-4xl mx-auto bg-white border shadow-md rounded-2xl p-6 text-black">
                <h2 className="text-2xl font-bold mb-4">Contact</h2>

                <p className="mb-6 text-start text-black">
                    If you'd like to get in touch, feel free to reach out via phone, email, or LinkedIn!
                </p>

                <div className="flex flex-wrap justify-start gap-4">
                    <a
                        href="mailto:JesseBrumley86@gmail.com"
                        className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
                    >
                        Email
                    </a>
                    <a
                        href="https://github.com/jessebrumley"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/jessebrumley"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="tel:+19186954716"
                        className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
                    >
                        Call (918) 695-4716
                    </a>
                </div>
            </div>
        </section>
    );
}
