import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-secondary text-primary dark:bg-darkblack dark:text-primary p-3 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-1 text-sm">
        {/* Contact Icons */}
        {/* <div className="flex items-center gap-4">
          <a href="mailto:kaytorah55@gmail.com" aria-label="Send email">
            <FiMail className="w-5 h-5 hover:scale-110 transition-transform" />
          </a>
          <a href="tel:+2348144020781" aria-label="Call number">
            <FiPhone className="w-5 h-5 hover:scale-110 transition-transform" />
          </a>
        </div> */}

        {/* Copyright */}
        <p className="text-center">
          <span>&copy; 2025 Itoro James.</span> All Rights Reserved.
        </p>
        <p>Designed and built by Itoro James</p>
      </div>
    </footer>
  );
}
