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
            {" "}
            | Tulsa, Oklahoma | September 2023 to August 2025
          </span>{" "}
        </p>

        <ul className="list-disc list-inside mt-2 text-black">
          <li>
            Completed a full-time, in-person immersive program combining classroom 
            instruction in computer science fundamentals with hands-on, project-based learning.
          </li>
          <li>
            Built responsive, full-stack web applications using 
            React, Node.js, and modern frontend/backend tooling.
          </li>
          <li>
            Applied core computer science and software development skills, 
            including C, C++, Python, and Linux shell.
          </li>
        </ul>
      </div>
    </section>
  );
}
