"use client"

interface NavbarProps {
  activeSection: string
  onNavigate: (section: string) => void
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const navItems = ["About", "Skills", "Projects", "Education", "Experience"]

  return (
    <nav className="sticky top-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold text-gray-900">Kishan Kumar Ojha</h1>
            <p className="text-sm text-gray-500">Kishan Kumar Ojha | Developer</p>
          </div>
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase())}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.toLowerCase()
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
