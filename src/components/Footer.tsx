export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-blue-700 text-white text-center py-6 shadow-md">
            {/*© {year} Jesse Brumley*/}
        </footer>
    );
}
