import { FiPhone } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';

export default function Footer() {
    return (
        <footer className="bg-secondary text-primary dark:bg-primary dark:text-black mt-4 p-6 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-4 text-sm">
                {/* Back to top link */}
                <a href="#top" className="hover:underline" aria-label="Back to top">
                    Back to top
                </a>

                {/* Contact Icons */}
                <div className="flex items-center gap-4">
                    <a href="mailto:kaytorah55@gmail.com" aria-label="Send email">
                        <FiMail className="w-5 h-5 hover:scale-110 transition-transform" />
                    </a>
                    <a href="tel:+2348144020781" aria-label="Call number">
                        <FiPhone className="w-5 h-5 hover:scale-110 transition-transform" />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-center text-xs">
                    <span>&copy; 2025 Itoro James.</span> All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
