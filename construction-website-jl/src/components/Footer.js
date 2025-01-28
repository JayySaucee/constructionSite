import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className=" text-gray-800 py-8 text-xl border-t-2 border-gray-300">
            <div className="container mx-auto px-2 flex justify-between items-center">
                <p className="text-center">&copy; {new Date().getFullYear()} JL Installations. All rights reserved.</p>
                <nav className="mt-4">
                </nav>
                <div className="flex space-x-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                        <FontAwesomeIcon icon={faInstagram} size="lg" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;