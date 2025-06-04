export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-blue-600 text-white text-center py-6 shadow-md">
            © {year} Jesse Brumley. All rights reserved.
        </footer>
    );
}
