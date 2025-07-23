import { ExternalLink, Star, ShoppingCart, Camera, Smartphone, Headphones, Battery } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const GearSection = () => {
  const gearCategories = [
    {
      id: 'cameras',
      name: 'Cameras & Video',
      icon: Camera,
      items: [
        {
          name: 'Sony A7 IV Mirrorless Camera',
          price: '$2,498',
          rating: 4.8,
          image: 'https://via.placeholder.com/300x300/FF6B6B/FFFFFF?text=Sony+A7+IV',
          description: 'Perfect for travel vlogging with incredible 4K video quality.',
          amazonLink: 'YOUR_AMAZON_AFFILIATE_LINK_1',
          features: ['4K 60p video', '33MP full-frame', 'In-body stabilization'],
          ourReview: 'This is our go-to camera for all city adventures. The image quality is outstanding!'
        },
        {
          name: 'DJI Mini 3 Pro Drone',
          price: '$759',
          rating: 4.7,
          image: 'https://via.placeholder.com/300x300/4ECDC4/FFFFFF?text=DJI+Mini+3',
          description: 'Compact drone perfect for capturing stunning aerial shots of cities.',
          amazonLink: 'YOUR_AMAZON_AFFILIATE_LINK_2',
          features: ['4K HDR video', '34-min flight time', 'Obstacle avoidance'],
          ourReview: 'Amazing for getting those epic city skyline shots. Super portable!'
        }
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile Tech',
      icon: Smartphone,
      items: [
        {
          name: 'iPhone 15 Pro Max',
          price: '$1,199',
          rating: 4.9,
          image: 'https://via.placeholder.com/300x300/9B59B6/FFFFFF?text=iPhone+15+Pro',
          description: 'The ultimate travel companion with pro-level camera capabilities.',
          amazonLink: 'YOUR_AMAZON_AFFILIATE_LINK_3',
          features: ['Titanium design', 'Action Button', 'USB-C'],
          ourReview: 'Perfect for quick content creation and staying connected while traveling.'
        },
        {
          name: 'Anker PowerCore 26800mAh',
          price: '$65',
          rating: 4.6,
          image: 'https://via.placeholder.com/300x300/E74C3C/FFFFFF?text=Anker+PowerCore',
          description: 'High-capacity power bank to keep all your devices charged.',
          amazonLink: 'YOUR_AMAZON_AFFILIATE_LINK_4',
          features: ['26800mAh capacity', 'Fast charging', 'Multiple ports'],
          ourReview: 'Essential for long travel days. Can charge our phone multiple times!'
        }
      ]
    },
    {
      id: 'audio',
      name: 'Audio Gear',
      icon: Headphones,
      items: [
        {
          name: 'Sony WH-1000XM5 Headphones',
          price: '$399',
          rating: 4.8,
          image: 'https://via.placeholder.com/300x300/F39C12/FFFFFF?text=Sony+WH1000XM5',
          description: 'Industry-leading noise cancellation for flights and busy cities.',
          amazonLink: 'YOUR_AMAZON_AFFILIATE_LINK_5',
          features: ['30-hour battery', 'Multipoint connection', 'Quick charge'],
          ourReview: 'Game-changer for long flights and noisy restaurant environments.'
        },
        {
          name: 'Rode VideoMic Pro Plus',
          price: '$329',
          rating: 4.7,
          image: 'https://via.placeholder.com/300x300/2ECC71/FFFFFF?text=Rode+VideoMic',
          description: 'Professional microphone for crystal-clear audio recording.',
          amazonLink: 'YOUR_AMAZON_AFFILIATE_LINK_6',
          features: ['Broadcast-quality audio', 'Built-in battery', 'Safety channel'],
          ourReview: 'Essential for capturing clear audio in busy restaurant environments.'
        }
      ]
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ))
  }

  return (
    <section id="gear" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-cyan-100 text-cyan-800 rounded-full px-4 py-2 text-sm font-semibold mb-4">
            Ctrl+Salt+Repeat
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Tech Gear & Recommendations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The essential tech gear we use to create our content and enhance our travel experiences. 
            As Amazon Associates, we earn from qualifying purchases.
          </p>
        </div>

        {/* Gear Categories */}
        <div className="space-y-16">
          {gearCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <div key={category.id} className="space-y-8">
                {/* Category Header */}
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
                    <IconComponent className="h-6 w-6 text-cyan-500 mr-3" />
                    <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                  </div>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.items.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="md:flex">
                        {/* Image */}
                        <div className="md:w-1/3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="md:w-2/3 p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="text-xl font-bold text-gray-900 line-clamp-2">
                              {item.name}
                            </h4>
                            <span className="text-2xl font-bold text-cyan-600 ml-4">
                              {item.price}
                            </span>
                          </div>

                          {/* Rating */}
                          <div className="flex items-center mb-3">
                            {renderStars(item.rating)}
                            <span className="ml-2 text-sm text-gray-600">({item.rating})</span>
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 mb-4">{item.description}</p>

                          {/* Features */}
                          <div className="mb-4">
                            <h5 className="font-semibold text-gray-900 mb-2">Key Features:</h5>
                            <ul className="space-y-1">
                              {item.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Our Review */}
                          <div className="mb-4 p-3 bg-cyan-50 rounded-lg">
                            <h5 className="font-semibold text-cyan-800 mb-1">Our Take:</h5>
                            <p className="text-sm text-cyan-700 italic">"{item.ourReview}"</p>
                          </div>

                          {/* CTA Button */}
                          <Button 
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                            onClick={() => window.open(item.amazonLink, '_blank')}
                          >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Check Price on Amazon
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-16 p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            Affiliate Disclosure
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            As Amazon Associates, we earn from qualifying purchases. This means when you click on our affiliate links and make a purchase, 
            we may receive a small commission at no extra cost to you. We only recommend products we genuinely use and believe in. 
            Your support helps us continue creating content and exploring new tech innovations around the world!
          </p>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Get Our Gear Updates
            </h3>
            <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
              Be the first to know about new gear reviews, exclusive deals, and our latest tech discoveries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
              />
              <Button className="bg-white text-cyan-600 hover:bg-gray-100 px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GearSection

