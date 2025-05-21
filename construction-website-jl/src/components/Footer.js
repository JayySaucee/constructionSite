import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className=" text-gray-800 py-8 text-xl border-t-2 border-gray-300">
            <div className="container mx-auto px-2 flex justify-between items-center">
                <p className="text-center text-2xl">&copy; {new Date().getFullYear()} Willamette Valley Metal Buildings LLC. All rights reserved.</p>
                <nav className="mt-4">
                </nav>
                <div className="flex space-x-6">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#1877F2]">
                        <FontAwesomeIcon icon={faFacebook} size="2xl" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#962fbf]">
                        <FontAwesomeIcon icon={faInstagram} size="2xl" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#1DA1F2]">
                        <FontAwesomeIcon icon={faTwitter} size="2xl" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;