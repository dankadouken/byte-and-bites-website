import { Play, MapPin, Calendar, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const AdventuresSection = () => {
  const adventures = [
    {
      id: 1,
      title: "Austin: Self-Driving City Adventure",
      description: "Experience the autonomous revolution firsthand while exploring Austin's incredible BBQ scene.",
      thumbnail: "https://via.placeholder.com/600x400/00BFFF/FFFFFF?text=Austin+Self-Driving",
      location: "Austin, Texas",
      date: "Dec 15, 2024",
      duration: "12:45",
      views: "25.3K",
      category: "Tech & Food",
      highlights: ["Self-driving taxis", "Franklin BBQ", "Smart city infrastructure"]
    },
    {
      id: 2,
      title: "Tokyo's Robotic Restaurant Revolution",
      description: "Dive into the neon-lit world of innovation where robots serve sushi and AI creates the perfect dining experience.",
      thumbnail: "https://via.placeholder.com/600x400/9B59B6/FFFFFF?text=Tokyo+Robots",
      location: "Tokyo, Japan",
      date: "Nov 20, 2024",
      duration: "15:22",
      views: "42.1K",
      category: "Future Tech",
      highlights: ["Robot servers", "Holographic menus", "AI-powered kitchen"]
    },
    {
      id: 3,
      title: "Singapore's Smart City Food Tour",
      description: "Exploring how technology enhances every aspect of dining in the world's smartest city.",
      thumbnail: "https://via.placeholder.com/600x400/4ECDC4/FFFFFF?text=Singapore+Smart",
      location: "Singapore",
      date: "Oct 8, 2024",
      duration: "18:30",
      views: "38.7K",
      category: "Smart Cities",
      highlights: ["Cashless payments", "Smart hawker centers", "Vertical farming"]
    },
    {
      id: 4,
      title: "Essential Travel Tech Gear 2024",
      description: "Our complete guide to the must-have gadgets for tech-savvy travelers and food enthusiasts.",
      thumbnail: "https://via.placeholder.com/600x400/FF6B6B/FFFFFF?text=Travel+Tech+Gear",
      location: "Studio",
      date: "Dec 1, 2024",
      duration: "22:15",
      views: "67.2K",
      category: "Tech Reviews",
      highlights: ["Travel cameras", "Portable chargers", "Smart luggage"]
    },
    {
      id: 5,
      title: "Seoul's 5G Food Delivery Revolution",
      description: "How ultra-fast connectivity is transforming food delivery and restaurant experiences in South Korea.",
      thumbnail: "https://via.placeholder.com/600x400/E74C3C/FFFFFF?text=Seoul+5G",
      location: "Seoul, South Korea",
      date: "Sep 12, 2024",
      duration: "14:08",
      views: "31.5K",
      category: "Tech & Food",
      highlights: ["5G networks", "Drone delivery", "AR menus"]
    },
    {
      id: 6,
      title: "Top 10 Smart Cities for Food Lovers",
      description: "Our countdown of the world's most technologically advanced cities that also happen to have incredible food scenes.",
      thumbnail: "https://via.placeholder.com/600x400/F39C12/FFFFFF?text=Top+10+Smart+Cities",
      location: "Global",
      date: "Aug 25, 2024",
      duration: "25:45",
      views: "89.4K",
      category: "Top 10",
      highlights: ["Global rankings", "Tech innovations", "Culinary excellence"]
    }
  ]

  const categories = ["All", "Tech & Food", "Future Tech", "Smart Cities", "Tech Reviews", "Top 10"]

  return (
    <section id="adventures" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Latest Adventures
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From tech-integrated city guides to gear reviews, explore our journey through the intersection of technology and food.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="border-cyan-500 text-cyan-600 hover:bg-cyan-50"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Video */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div className="flex flex-col justify-center text-white">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold mb-4 w-fit">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Most Popular
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  {adventures[0].title}
                </h3>
                <p className="text-lg text-cyan-100 mb-6">
                  {adventures[0].description}
                </p>
                <div className="flex items-center gap-6 text-cyan-100 mb-6">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    {adventures[0].location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    {adventures[0].date}
                  </div>
                </div>
                <Button 
                  size="lg" 
                  className="bg-white text-cyan-600 hover:bg-gray-100 w-fit"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Now
                </Button>
              </div>
              <div className="relative">
                <img
                  src={adventures[0].thumbnail}
                  alt={adventures[0].title}
                  className="w-full h-64 lg:h-80 object-cover rounded-xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-colors cursor-pointer">
                    <Play className="h-8 w-8 text-white" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded px-3 py-1 text-white text-sm">
                  {adventures[0].duration}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adventures.slice(1).map((adventure) => (
            <div key={adventure.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={adventure.thumbnail}
                  alt={adventure.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-6 w-6 text-white" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm rounded px-2 py-1 text-white text-xs">
                  {adventure.duration}
                </div>
                <div className="absolute top-3 left-3 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                  {adventure.category}
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-cyan-600 transition-colors line-clamp-2">
                  {adventure.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {adventure.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="mr-1 h-3 w-3" />
                    {adventure.location}
                  </div>
                  <span>{adventure.views} views</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {adventure.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-cyan-500 text-cyan-600 hover:bg-cyan-50"
          >
            Load More Adventures
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AdventuresSection

