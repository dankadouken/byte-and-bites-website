import { useState } from 'react'
import { MapPin, Star, Clock, DollarSign, Utensils } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const MenuSection = () => {
  const [selectedCity, setSelectedCity] = useState('all')

  // Sample data - you can easily add more places here
  const visitedPlaces = [
    {
      id: 1,
      name: "Franklin Barbecue",
      city: "Austin",
      location: "900 E 11th St, Austin, TX 78702",
      rating: 4.8,
      priceRange: "$$$",
      cuisine: "BBQ",
      techFeature: "Smart ordering system",
      image: "https://via.placeholder.com/400x250/FF6B6B/FFFFFF?text=Franklin+BBQ",
      menuItems: [
        { name: "Brisket", price: "$28/lb", description: "Perfectly smoked for 14 hours", tried: true },
        { name: "Ribs", price: "$32/lb", description: "Fall-off-the-bone tender", tried: true },
        { name: "Sausage", price: "$24/lb", description: "House-made daily", tried: false },
      ],
      visitDate: "2024-12-15",
      review: "The brisket was incredible! The smart ordering system made the long wait more manageable.",
      techRating: 4
    },
    {
      id: 2,
      name: "Ramen Tatsu-Ya",
      city: "Austin",
      location: "1234 S Lamar Blvd, Austin, TX 78704",
      rating: 4.6,
      priceRange: "$$",
      cuisine: "Japanese",
      techFeature: "QR code menu & mobile ordering",
      image: "https://via.placeholder.com/400x250/4ECDC4/FFFFFF?text=Ramen+Tatsu-Ya",
      menuItems: [
        { name: "Tonkotsu Ramen", price: "$16", description: "Rich pork bone broth", tried: true },
        { name: "Spicy Red Miso", price: "$17", description: "House-made miso blend", tried: true },
        { name: "Gyoza", price: "$8", description: "Pan-fried dumplings", tried: true },
      ],
      visitDate: "2024-12-10",
      review: "Amazing ramen and the QR code ordering was seamless. Perfect tech integration!",
      techRating: 5
    },
    {
      id: 3,
      name: "Robot Restaurant",
      city: "Tokyo",
      location: "1-7-1 Kabukicho, Shinjuku, Tokyo",
      rating: 4.2,
      priceRange: "$$$$",
      cuisine: "Japanese Fusion",
      techFeature: "Robot servers & holographic menus",
      image: "https://via.placeholder.com/400x250/9B59B6/FFFFFF?text=Robot+Restaurant",
      menuItems: [
        { name: "Cyber Sushi Set", price: "¥3,500", description: "Served by robot", tried: true },
        { name: "Digital Ramen", price: "¥2,800", description: "Interactive bowl experience", tried: false },
        { name: "Hologram Dessert", price: "¥1,500", description: "AR-enhanced presentation", tried: true },
      ],
      visitDate: "2024-11-20",
      review: "Mind-blowing tech experience! The robot servers were entertaining and efficient.",
      techRating: 5
    }
  ]

  const cities = ['all', ...new Set(visitedPlaces.map(place => place.city))]

  const filteredPlaces = selectedCity === 'all' 
    ? visitedPlaces 
    : visitedPlaces.filter(place => place.city === selectedCity)

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ))
  }

  const renderTechStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={14}
        className={i < rating ? 'fill-cyan-400 text-cyan-400' : 'text-gray-300'}
      />
    ))
  }

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-cyan-100 text-cyan-800 rounded-full px-4 py-2 text-sm font-semibold mb-4">
            The Wired Fork
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Food Adventures
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the amazing places we've visited, the dishes we've tried, and the tech innovations we've encountered along the way.
          </p>
        </div>

        {/* City Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cities.map((city) => (
            <Button
              key={city}
              variant={selectedCity === city ? "default" : "outline"}
              onClick={() => setSelectedCity(city)}
              className={`capitalize ${
                selectedCity === city 
                  ? 'bg-cyan-500 hover:bg-cyan-600' 
                  : 'border-cyan-500 text-cyan-600 hover:bg-cyan-50'
              }`}
            >
              {city === 'all' ? 'All Cities' : city}
            </Button>
          ))}
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredPlaces.map((place) => (
            <div key={place.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
                  {place.city}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{place.name}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin size={14} className="mr-1" />
                    {place.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {renderStars(place.rating)}
                      <span className="ml-2 text-sm text-gray-600">{place.rating}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign size={14} className="mr-1" />
                      {place.priceRange}
                    </div>
                  </div>
                </div>

                {/* Tech Feature */}
                <div className="mb-4 p-3 bg-cyan-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-cyan-800">Tech Feature:</span>
                    <div className="flex items-center">
                      {renderTechStars(place.techRating)}
                    </div>
                  </div>
                  <p className="text-sm text-cyan-700">{place.techFeature}</p>
                </div>

                {/* Menu Items */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Utensils size={16} className="mr-2" />
                    What We Tried:
                  </h4>
                  <div className="space-y-2">
                    {place.menuItems.filter(item => item.tried).map((item, index) => (
                      <div key={index} className="flex justify-between items-start">
                        <div className="flex-1">
                          <span className="font-medium text-gray-800">{item.name}</span>
                          <p className="text-xs text-gray-600">{item.description}</p>
                        </div>
                        <span className="text-sm font-semibold text-gray-700 ml-2">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Review */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700 italic">"{place.review}"</p>
                </div>

                {/* Visit Date */}
                <div className="flex items-center text-xs text-gray-500">
                  <Clock size={12} className="mr-1" />
                  Visited: {new Date(place.visitDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Place CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Have a suggestion?
            </h3>
            <p className="text-gray-600 mb-6">
              Know a great tech-forward restaurant we should visit? Let us know!
            </p>
            <Button className="bg-cyan-500 hover:bg-cyan-600">
              Suggest a Place
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MenuSection

