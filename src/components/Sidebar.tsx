export default function Sidebar() {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-lg p-8 w-64 animate-fadeIn hidden sm:block z-50">
      <div className="text-center">
        <img
          src="/WhatsApp Image 2025-10-23 at 11.28.07 AM.jpeg"
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover object-center border-2 border-gray-200"
        />
        <h3 className="text-xl font-bold text-gray-900 mb-1">Kishan Ojha</h3>
        <p className="text-sm text-gray-600 mb-6">
          Java Developer, Machine Learning Student, Software Developer
        </p>
        <div className="space-y-3 text-left">
          <div className="flex items-center gap-2 text-gray-700">
            <span>📍</span>
            <span className="text-sm">Noida, India</span>
          </div>
          <a 
            href="https://www.linkedin.com/in/kishankumarojha/"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c-.009.015-.021.029-.03.042h.03v-.042c.418-.645 1.162-1.571 2.828-1.571 2.065 0 3.613 1.347 3.613 4.253v5.616zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.704 1.963-1.704 1.192 0 1.915.753 1.938 1.704 0 .946-.746 1.704-1.986 1.704zm-2.007 11.019h3.954v-9.646H3.33v9.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
            <span className="text-sm">LinkedIn</span>
          </a>
          <a 
            href="https://github.com/KishanOjha14"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="text-sm">GitHub</span>
          </a>
          <a 
            href="https://www.kaggle.com/kishanojha34"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 0H4C1.9 0 0 1.9 0 4v16c0 2.1 1.9 4 4 4h16c2.1 0 4-1.9 4-4V4c0-2.1-1.9-4-4-4zm0 2v11h-8V2h8zm-9 0v11H4V2h7z" />
            </svg>
            <span className="text-sm">Kaggle</span>
          </a>
        </div>
      </div>
    </div>
  );
}
