import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-slate-100 py-6 border-t border-slate-300">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                {/* Logo and Rights */}
                <div className="flex flex-col items-center md:items-start">
                    <Link to="/" className="mb-2">
                        <h1 className="font-bold text-lg sm:text-2xl">
                            <span className="text-blue-700">EARNSHARE</span>
                            <span className="text-orange-500">AI</span>
                        </h1>
                    </Link>
                    <p className="text-slate-700 text-sm text-center md:text-left">
                        &copy; 2024 EarnShare AI. All rights reserved.
                    </p>
                </div>

                {/* Navigation Links */}
                <ul className="flex gap-4 mt-4 md:mt-0">
                    <li>
                        <Link to="/privacy" className="text-slate-700 hover:underline text-sm">
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link to="/terms" className="text-slate-700 hover:underline text-sm">
                            Terms of Service
                        </Link>
                    </li>
                </ul>

                {/* Social Media */}
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebook className="text-slate-600 hover:text-blue-600 text-lg" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter className="text-slate-600 hover:text-blue-400 text-lg" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram className="text-slate-600 hover:text-pink-500 text-lg" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
