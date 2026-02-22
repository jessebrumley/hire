import portrait from '../assets/BrumleyJesse.jpg';

export default function About() {
    return (
        <section className="bg-white py-10">
            <div className="max-w-4xl mx-auto bg-white border shadow-md rounded-2xl p-6 text-black flex flex-col md:flex-row items-center gap-6">
                {/* Text Section */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">About Me</h2>
                    <p>
                        Full-stack web developer with a background in customer service and 18+ years of professional communication and problem-solving experience. Experienced building user-focused applications using JavaScript, TypeScript, React, APIs, and relational databases, including deploying production-ready applications. Known for writing clean, functional code, learning quickly, and contributing effectively to collaborative team projects.
                    </p>
                </div>

                {/* Image Section */}
                <div className="flex-1 max-w-[200px] md:max-w-[250px]">
                    <img
                        src={portrait}
                        alt="Jesse Brumley"
                        className="rounded-xl shadow-md w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
