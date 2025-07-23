import { Youtube, Instagram, Twitter, Music, Mail, MapPin, Heart } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Music, href: 'https://tiktok.com/@byteandbites', label: 'TikTok' },
    { icon: Youtube, href: 'https://youtube.com/@byteandbites', label: 'YouTube' },
    { icon: Instagram, href: 'https://instagram.com/byteandbites', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/byteandbites', label: 'Twitter' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Adventures', href: '#adventures' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gear', href: '#gear' },
    { name: 'About', href: '#about' },
  ]

  const categories = [
    { name: 'Tech Reviews', href: '#' },
    { name: 'City Guides', href: '#' },
    { name: 'Food Adventures', href: '#' },
    { name: 'Travel Tips', href: '#' },
    { name: 'Gear Guides', href: '#' },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Byte & Bites
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Exploring the world through cutting-edge technology and incredible food experiences. 
              Join us on our journey to discover how innovation enhances travel and dining.
            </p>
            
            {/* Alternative Channel Names */}
            <div className="mb-6">
              <p className="text-sm text-gray-400 mb-2">Also known as:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-800 text-cyan-400 text-xs px-2 py-1 rounded-full">The Wired Fork</span>
                <span className="bg-slate-800 text-cyan-400 text-xs px-2 py-1 rounded-full">Ctrl+Salt+Repeat</span>
              </div>
            </div>
            
            <div className="flex items-center text-gray-300 mb-4">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">Based in Austin, TX</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail className="h-4 w-4 mr-2" />
              <a href="mailto:hello@byteandbites.com" className="text-sm hover:text-cyan-400 transition-colors">
                hello@byteandbites.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <a
                    href={category.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest tech travel insights and food adventures delivered to your inbox.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-sm"
              />
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-lg transition-colors text-sm font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-gray-300 text-sm">Follow us:</span>
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                )
              })}
            </div>

            {/* Copyright */}
            <div className="flex items-center text-gray-300 text-sm">
              <span>© 2025 Byte & Bites. Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>for tech and food lovers.</span>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-slate-800 py-4">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs text-gray-400">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Affiliate Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

