import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (dropdown: any) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-black z-50 text-white px-4 md:px-8 py-4 relative">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <a href="#">
            <img src="/wappfoxx-logo1.png" alt="wappfoxxlogo" className="w-[180px] h-[100%]" />
          </a>
        </div>

        <div className="hidden lg:flex items-center space-x-8">

          <div className="relative group">
            <button className="flex items-center space-x-1 text-white hover:text-orange-400 transition-colors duration-200">
              <span>Price Configurators</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-700">
              <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-t-lg transition-colors">
                Web Development
              </a>
              <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                App Development
              </a>
              <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-b-lg transition-colors">
                Digital Marketing
              </a>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-1 text-white hover:text-orange-400 transition-colors duration-200">
              <span>Case Studies</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-700">
              <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-t-lg transition-colors">
                E-commerce
              </a>
              <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                SaaS Platforms
              </a>
              <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-b-lg transition-colors">
                Mobile Apps
              </a>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-1 text-white hover:text-orange-400 transition-colors duration-200">
              <span>Service</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-700">
              <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-t-lg transition-colors">
                Web Design
              </a>
              <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                Development
              </a>
              <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                SEO & Marketing
              </a>
              <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-b-lg transition-colors">
                Maintenance
              </a>
            </div>
          </div>

          <a href="#" className="text-white hover:text-orange-400 transition-colors duration-200">
            About us
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-4 py-2 border border-gray-700 rounded hover:bg-orange-500 transition-all duration-200">
            Book an appointment
          </button>

          <button
            className="lg:hidden p-2"
            onClick={toggleMenu}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-700 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <a href="#" className="block text-white hover:text-orange-400 transition-colors duration-200">
              Home
            </a>

            <div>
              <button
                className="flex items-center justify-between w-full text-white hover:text-orange-400 transition-colors duration-200"
                onClick={() => toggleDropdown('mobile-price')}
              >
                <span>Price Configurators</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-price' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'mobile-price' && (
                <div className="mt-2 pl-4 space-y-2">
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">Web Development</a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">App Development</a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">Digital Marketing</a>
                </div>
              )}
            </div>

            <div>
              <button
                className="flex items-center justify-between w-full text-white hover:text-orange-400 transition-colors duration-200"
                onClick={() => toggleDropdown('mobile-case')}
              >
                <span>Case Studies</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-case' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'mobile-case' && (
                <div className="mt-2 pl-4 space-y-2">
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">E-commerce</a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">SaaS Platforms</a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">Mobile Apps</a>
                </div>
              )}
            </div>

            <div>
              <button
                className="flex items-center justify-between w-full text-white hover:text-orange-400 transition-colors duration-200"
                onClick={() => toggleDropdown('mobile-service')}
              >
                <span>Service</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'mobile-service' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'mobile-service' && (
                <div className="mt-2 pl-4 space-y-2">
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">Web Design</a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">Development</a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">SEO & Marketing</a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">Maintenance</a>
                </div>
              )}
            </div>

            <a href="#" className="block text-white hover:text-orange-400 transition-colors duration-200">
              About us
            </a>

            <button className="w-full px-6 py-2 bg-transparent border-2 border-white rounded-lg text-white hover:bg-white hover:text-black transition-all duration-200">
              Book an appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
