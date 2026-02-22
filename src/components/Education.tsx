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
                    <li>Completed a full-time immersive program covering computer science fundamentals and modern web development</li>
                    <li>Built full-stack applications using JavaScript, TypeScript, Python, React, Node.js, and SQL databases</li>
                    <li>Designed and implemented relational database schemas and REST APIs</li>
                    <li>Developed and deployed real-world applications using modern development tools and workflows</li>
                    <li>Worked on collaborative team projects using Git-based version control and task management tools</li>
                    <li>Implemented authentication and secure data handling practices</li>
                    <li>Wrote automated tests using modern JavaScript testing frameworks</li>
                    <li>Practiced agile-style development including feature planning and iterative releases</li>
                </ul>
            </div>
        </section>
    );
}
