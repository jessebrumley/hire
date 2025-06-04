export default function Education() {
    return (
        <section className="bg-gray-200 py-10">
            <div className="max-w-4xl mx-auto bg-white border shadow-md rounded-2xl p-6">
                <h2 className="text-2xl font-bold mb-4 text-black">Education</h2>

                <h3 className="text-lg font-bold text-blue-600">
                    Diploma in Computer Science and Full Stack Web Development
                </h3>
                <p>
                    <a
                        href="https://atlasschool.com/"
                        className="underline text-blue-600 hover:font-semibold"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Atlas School
                    </a>{" "}
                    <span className="text-black">
                        {" "} | Tulsa, Oklahoma | September 2023 to August 2025
                    </span>                </p>


                <ul className="list-disc list-inside mt-2 text-black">
                    <li>Specialized in Full-stack Web Development and Computer Science</li>
                    <li>Studied computer programming languages with a focus on web development in a peer-learning environment</li>
                    <li>Attended full-time while learning new concepts at a rapid pace</li>
                </ul>
            </div>
        </section>
    );
}
