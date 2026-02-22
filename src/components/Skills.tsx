export default function Skills() {
    return (
        <section className="bg-white py-10">
            <div className="max-w-4xl mx-auto bg-white border shadow-md rounded-2xl p-6 text-black">
                <h2 className="text-2xl font-bold mb-4">Skills</h2>

                <ul className="space-y-2 list-disc list-inside pl-2">
                    <li>
                        <span className="font-semibold">Languages:</span>{" "}
                        JavaScript, TypeScript, Python, C, C++
                    </li>

                    <li>
                        <span className="font-semibold">Frontend:</span>{" "}
                        React, HTML, CSS, Tailwind CSS, Bootstrap, Responsive Design
                    </li>

                    <li>
                        <span className="font-semibold">Backend:</span>{" "}
                        Node.js, Express.js, REST APIs, API Integration, Authentication
                    </li>

                    <li>
                        <span className="font-semibold">Testing:</span>{" "}
                        Vitest, React Testing Library, GitHub Actions, Unit Testing
                    </li>

                    <li>
                        <span className="font-semibold">Development & Deployment:</span>{" "}
                        Netlify, Vite, NPM, Git, GitHub, Redmine, Trello
                    </li>

                    <li>
                        <span className="font-semibold">Databases & Data:</span>{" "}
                        PostgreSQL, SQL, MongoDB, JSON
                    </li>

                    <li>
                        <span className="font-semibold">Other Tools:</span>{" "}
                        React Native, Android Studio, Postman, VS Code, Linux Shell, PowerShell
                    </li>
                </ul>
            </div>
        </section>
    );
}