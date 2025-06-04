export default function Skills() {
    return (
        <section className="bg-white py-10">
            <div className="max-w-4xl mx-auto bg-white border shadow-md rounded-2xl p-6 text-black">
                <h2 className="text-2xl font-bold mb-4">Skills</h2>

                <ul className="space-y-2 list-disc list-inside pl-2">
                    <li><span className="font-semibold">Languages:</span> Python, JavaScript, C, C++</li>
                    <li><span className="font-semibold">Frontend:</span> HTML, CSS, React, Tailwind CSS, Bootstrap</li>
                    <li><span className="font-semibold">Backend:</span> Node.js, Express.js, REST APIs</li>
                    <li><span className="font-semibold">Testing & CI:</span> Vitest, React Testing Library, GitHub Actions</li>
                    <li><span className="font-semibold">Deployment & Tooling:</span> Netlify, Vite, NPM, Git</li>
                    <li><span className="font-semibold">Databases & Data:</span> MongoDB, JSON</li>
                    <li><span className="font-semibold">Other Tools:</span> Postman, VS Code, Linux Shell, PowerShell</li>
                </ul>
            </div>
        </section>
    );
}
