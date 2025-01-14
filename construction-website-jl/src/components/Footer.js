import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4">
                <p className="text-center">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                <nav className="mt-4">
                    <ul className="flex justify-center space-x-4">
                        <li><a href="/contact" className="hover:font-semibold">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;