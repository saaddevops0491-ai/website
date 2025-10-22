import type React from "react"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Sun, Moon, Bell } from "lucide-react"

// use your real blue & white SVG URLs here:
const lightLogo = "https://res.cloudinary.com/drnak5yb2/image/upload/v1755589239/output-onlinepngtools_fnkcov.png"
const darkLogo = "https://res.cloudinary.com/drnak5yb2/image/upload/v1756798056/output-onlinepngtools_1_gybrdb.png"

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [showNotification, setShowNotification] = useState(true)
  const location = useLocation()

  const navItems = [
    { id: "/", label: "Home", path: "/" },
    { id: "/products", label: "Products", path: "/products" },
    { id: "/services", label: "Services", path: "/services" },
    { id: "/news", label: "News", path: "/news" },
    // { id: "/blogs", label: "Blogs", path: "/blogs" },
    { id: "/careers", label: "Careers", path: "/careers" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > 50)
      setShowNotification(y <= 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [showNotification])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const handleNotificationClick = () => {
    setShowNotification(false)
    // Navigate to the Aramco news post
    window.location.href = "/news#aramco-prequalified"
  }

  return (
    <>
      {/* fixed notification bar */}
      {showNotification && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-yellow-500 to-yellow-400 text-navy-900 py-2 px-6 text-center text-sm flex items-center justify-center gap-2">
          <Bell className="animate-pulse" size={16} />
          <span className="animate-pulse">Latest News:</span>
          <button onClick={handleNotificationClick} className="hover:underline font-medium">
            Saher's multiphase tech pre-qualified by Saudi Aramco
          </button>
          <button
            onClick={() => setShowNotification(false)}
            className="absolute right-4 p-1 rounded-full hover:bg-yellow-600"
          >
            <X size={16} />
          </button>
        </div>
      )}

      {/* nav always fixed; pushed down when notification is visible */}
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${showNotification ? "top-8" : "top-0"} ${isScrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg" : "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm"}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* logo - increased size for light mode */}
            <Link to="/">
              <img
                src={isDark ? darkLogo : lightLogo}
                alt="Saher Flow"
                className={`w-auto transition-all duration-300 ${isDark ? "h-28" : "h-28"}`}
              />
            </Link>

            {/* desktop links */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${location.pathname === item.path ? "text-navy-900 dark:text-yellow-400" : "text-gray-600 dark:text-gray-300 hover:text-navy-900 dark:hover:text-white"}`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* right actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDark((d) => !d)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDark ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
              </button>
              <Link
                to="/contact"
                className="hidden sm:inline-flex bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium hover:bg-navy-800 dark:hover:bg-yellow-400 transition-colors text-sm sm:text-base"
              >
                Contact Us
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                className="sm:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X size={24} className="dark:text-white" />
                ) : (
                  <Menu size={24} className="dark:text-white" />
                )}
              </button>
            </div>
          </div>

          {/* mobile menu */}
          {isMobileMenuOpen && (
            <div className="sm:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 ${location.pathname === item.path ? "text-navy-900 dark:text-yellow-400 bg-gray-50 dark:bg-gray-800" : "text-gray-600 dark:text-gray-300 hover:text-navy-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"}`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex justify-left px-4 mt-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-block px-6 py-3 bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 rounded-lg font-medium text-base hover:bg-navy-800 dark:hover:bg-yellow-400 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
