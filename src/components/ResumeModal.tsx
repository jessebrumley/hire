// src/components/ResumeModal.tsx
import { useState } from 'react';

export default function ResumeModal() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="text-start mt-4">
                <button
                    onClick={toggleModal}
                    className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-800 transition"
                >
                    View Resume
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-start items-center z-50">
                    <div className="bg-white max-w-3xl w-full p-6 rounded-lg shadow-lg relative">
                        <button
                            onClick={toggleModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
                        >
                            &times;
                        </button>
                        <iframe
                            src="../assets/Brumley,JesseResume.pdf"
                            title="Resume Preview"
                            className="w-full h-[500px] mb-4 border"
                        />
                        <a
                            href="../assets/Brumley,JesseResume.pdf"
                            download
                            className="bg-blue-600 text-white px-4 py-2 rounded  hover:bg-blue-800 transition"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
