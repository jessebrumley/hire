// src/components/Header.tsx

export default function Header() {
    return (
        <header className="bg-blue-700 text-white py-8">
            <div className="container mx-auto text-center">
                <h1 className="mb-2 text-4xl font-bold">
                    Jesse Brumley
                </h1>
                <p className="text-lg mt-2">
                    Web Developer | Software Designer
                    </p>
                <p className="text-lg">
                    Phone
                    <a
                        href="tel:+19186954716"
                        className="ml-2 hover:underline"
                    >
                        (918) 695-4716
                    </a>
                </p>
            </div>
        </header>
    );
}
