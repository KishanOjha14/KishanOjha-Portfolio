export default function Hero() {
  return (
    <section className="text-center py-20">
      <div className="mb-8 flex justify-center">
        <img
          src="https://github.com/KishanOjha14/KishanOjha-Portfolio/blob/main/public/WhatsApp%20Image%202025-10-23%20at%2011.28.07%20AM.jpeg?raw=true"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover object-center border-2 border-gray-200 shadow-md"
        />
      </div>

      <h1 className="text-5xl font-bold text-gray-900 mb-2">Kishan Ojha</h1>
      <p className="text-xl text-gray-600 mb-6">Java Developer , Machine Learning Student , software Developer</p>
      <div className="flex justify-center gap-4 mb-8">
        <span className="flex items-center gap-2 text-gray-600">
          <span>📍</span> Noida , India
        </span>
      </div>
      <div className="flex justify-center gap-6">
        <a href="https://github.com/KishanOjha14" className="text-gray-600 hover:text-gray-900 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/kishankumarojha/" className="text-gray-600 hover:text-gray-900 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c-.009.015-.021.029-.03.042h.03v-.042c.418-.645 1.162-1.571 2.828-1.571 2.065 0 3.613 1.347 3.613 4.253v5.616zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.704 1.963-1.704 1.192 0 1.915.753 1.938 1.704 0 .946-.746 1.704-1.986 1.704zm-2.007 11.019h3.954v-9.646H3.33v9.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
        </a>
        {/* <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 002.856-3.51 10.02 10.02 0 01-2.856 1.1 4.96 4.96 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.948 4.948 0 00-8.506 4.513A14.025 14.025 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.994 13.994 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a> */}
        <a href="mailto:kishanojha47@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </a>
      </div>
    </section>
  )
}
