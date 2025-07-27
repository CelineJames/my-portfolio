export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2348068525317?text=Hello%20Itoro"
      className="fixed bottom-4 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all animate-bounce-slow"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 2.11.55 4.09 1.5 5.82L.5 23.5l5.77-1.51A11.43 11.43 0 0 0 12 23.5c6.27 0 11.5-5.23 11.5-11.5S18.27.5 12 .5zm0 21c-1.86 0-3.6-.5-5.13-1.37l-.36-.21-3.43.9.92-3.34-.23-.39A9.47 9.47 0 0 1 2.5 12c0-5.24 4.26-9.5 9.5-9.5s9.5 4.26 9.5 9.5-4.26 9.5-9.5 9.5z" />
        <path d="M17.56 14.39l-2.26-.64a.5.5 0 0 0-.47.13l-.6.61a7.73 7.73 0 0 1-3.93-3.93l.6-.6a.5.5 0 0 0 .13-.47l-.64-2.26a.5.5 0 0 0-.47-.35H8.02a.5.5 0 0 0-.5.5c0 4.68 3.8 8.48 8.48 8.48a.5.5 0 0 0 .5-.5v-1.07a.5.5 0 0 0-.35-.47z" />
      </svg>
    </a>
  );
}
