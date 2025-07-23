import { useState } from 'react'
import { Menu, X, Youtube, Instagram, Twitter, Music } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const socialLinks = [
    { icon: Music, href: 'https://tiktok.com/@byteandbites', label: 'TikTok' },
    { icon: Youtube, href: 'https://youtube.com/@byteandbites', label: 'YouTube' },
    { icon: Instagram, href: 'https://instagram.com/byteandbites', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/byteandbites', label: 'Twitter' },
  ]

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Adventures', href: '#adventures' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gear', href: '#gear' },
    { name: 'About', href: '#about' },
  ]

  return (
    <header className="bg-slate-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-cyan-400">
              Byte & Bites
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Media Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => {
              const IconComponent = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <IconComponent size={20} />
                </a>
              )
            })}
            <Button 
              variant="outline" 
              size="sm"
              className="ml-4 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-800"
            >
              Subscribe
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-cyan-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-slate-700">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 px-3 py-2">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <IconComponent size={20} />
                    </a>
                  )
                })}
              </div>
              
              <div className="px-3 py-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-800"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

