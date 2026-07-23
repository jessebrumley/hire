// src/components/Projects.tsx

export default function Projects() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-4xl mx-auto bg-white border shadow-md rounded-2xl p-6 text-black">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>

        {/* Split Endz App */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">
            Split Endz — Salon & Spa Web App – Frontend Developer
          </h3>
          <p className="text-sm text-gray-600 mb-1">July 2026</p>
          <a
            href="https://github.com/jessebrumley/SplitEndz"
            className="text-blue-600 underline"
            target="_blank"
          >
            GitHub Repository
          </a>
          {" | "}
          <a
            href="https://splitendz.netlify.app/"
            className="text-blue-600 underline"
            target="_blank"
          >
            Demo
          </a>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Engineered a responsive, full-featured web application using
              React, TypeScript, Vite, and Tailwind CSS, leveraging strict type
              safety, fast module reloading, and utility-first styling to
              maximize development efficiency and performance.
            </li>
            <li>
              Built a scalable, modular component architecture with client-side
              routing via React Router, enabling seamless single-page
              navigation, clean code separation, and smooth layout transitions
              without full page reloads.
            </li>
            <li>
              Tailored design systems, UI components, and conversion-focused
              user flows to directly align with local salon branding, ensuring
              visual consistency and optimizing the layout to drive client
              bookings and service inquiries.
            </li>
          </ul>
        </div>

        {/* Visitor Check-In App */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">
            Visitor Check-In – Full-Stack Developer & Technical Lead
          </h3>
          <p className="text-sm text-gray-600 mb-1">July 2025</p>
          <a
            href="https://github.com/jessebrumley/visitor-check-in"
            className="text-blue-600 underline"
            target="_blank"
          >
            GitHub Repository
          </a>
          {" | "}
          <a
            href="https://visitor-check-in.netlify.app/"
            className="text-blue-600 underline"
            target="_blank"
          >
            Demo
          </a>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Designed and implemented a secure digital check-in system to
              replace paper logs, including visitor registration, badge
              assignment, and CSV export features.
            </li>
            <li>
              Built and integrated backend with Supabase (Postgres, Row-Level
              Security, authentication) and front end with React, TypeScript,
              Tailwind, and Vite.
            </li>
            <li>
              Led a 4-person team, coordinating development, UI/UX design,
              testing, and documentation.
            </li>
          </ul>
        </div>

        {/* Atlas Music Player */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">
            Atlas Music Player – React Developer
          </h3>
          <p className="text-sm text-gray-600 mb-1">May 2025</p>
          <a
            href="https://github.com/jessebrumley/atlas-music-player"
            className="text-blue-600 underline"
            target="_blank"
          >
            GitHub Repository
          </a>
          {" | "}
          <a
            href="https://atlas-music-player-jbrumley.netlify.app/"
            className="text-blue-600 underline"
            target="_blank"
          >
            Demo
          </a>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Built a responsive music player interface using React, Tailwind
              CSS, and Vite with custom component styling
            </li>
            <li>
              Implemented playback controls, playlist management, and dynamic
              album art using live API data
            </li>
            <li>
              Wrote unit and snapshot tests using Vitest and React Testing
              Library; automated CI with GitHub Actions
            </li>
          </ul>
        </div>

        {/* Tasty or Toxic */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold">
            Tasty or Toxic – JavaScript Developer
          </h3>
          <p className="text-sm text-gray-600 mb-1">August 2024</p>
          <a
            href="https://github.com/Moonwalkert3ch/tasty-or-toxic"
            className="text-blue-600 underline"
            target="_blank"
          >
            GitHub Repository
          </a>
          {" | "}
          <a
            href="https://moonwalkert3ch.github.io/tasty-or-toxic/"
            className="text-blue-600 underline"
            target="_blank"
          >
            Demo
          </a>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              Built a responsive web app that identifies edible and toxic plants
              using real-time data from the Perenual API
            </li>
            <li>
              Developed interactive search and filter features to present plant
              info in a user-friendly table layout
            </li>
            <li>
              Collaborated in a team of three, managing version control, feature
              development, and deployment via GitHub
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
