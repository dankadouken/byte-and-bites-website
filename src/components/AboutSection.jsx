import { Users, MapPin, Calendar, Award } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const AboutSection = () => {
  const stats = [
    { icon: MapPin, number: '15+', label: 'Cities Explored' },
    { icon: Calendar, number: '2+', label: 'Years Creating' },
    { icon: Users, number: '50K+', label: 'Followers' },
    { icon: Award, number: '100+', label: 'Tech Experiences' }
  ]

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Tech Explorer & Content Creator',
      bio: 'Former software engineer turned travel content creator. Passionate about discovering how technology enhances our daily experiences.',
      image: 'https://via.placeholder.com/300x300/4ECDC4/FFFFFF?text=Alex',
      specialties: ['Smart Cities', 'Travel Tech', 'Video Production']
    },
    {
      name: 'Maya Rodriguez',
      role: 'Food Enthusiast & Tech Reviewer',
      bio: 'Culinary school graduate with a love for innovative dining experiences and food technology.',
      image: 'https://via.placeholder.com/300x300/FF6B6B/FFFFFF?text=Maya',
      specialties: ['Food Tech', 'Restaurant Innovation', 'Photography']
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Byte & Bites
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate explorers at the intersection of technology and food, 
            bringing you unique perspectives on how innovation enhances our travel and dining experiences.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              To showcase how technology is revolutionizing the way we travel, eat, and experience cities around the world. 
              From self-driving taxis to robot restaurants, we explore the cutting-edge innovations that are shaping our future, 
              one byte and bite at a time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Explore</h4>
                <p className="text-gray-600 text-sm">Discover tech innovations in cities worldwide</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Experience</h4>
                <p className="text-gray-600 text-sm">Try cutting-edge tech and amazing food</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Share</h4>
                <p className="text-gray-600 text-sm">Bring you authentic reviews and insights</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-cyan-100 text-cyan-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet the Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-cyan-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.specialties.map((specialty, specialtyIndex) => (
                    <span
                      key={specialtyIndex}
                      className="bg-cyan-100 text-cyan-800 text-sm px-3 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            What We Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3">City Tech Tours</h4>
                <p className="text-gray-600 text-sm">
                  Explore smart cities and their technological innovations while discovering amazing local food scenes.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3">Tech Reviews</h4>
                <p className="text-gray-600 text-sm">
                  Honest reviews of travel tech, food gadgets, and innovative dining experiences.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-gray-900 mb-3">Community</h4>
                <p className="text-gray-600 text-sm">
                  Building a community of tech-savvy travelers and food enthusiasts who love innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Journey
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Follow us as we explore the world's most innovative cities and discover how technology is transforming our relationship with food and travel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600">
              Subscribe to Our Channel
            </Button>
            <Button variant="outline" size="lg" className="border-cyan-500 text-cyan-600 hover:bg-cyan-50">
              Follow Our Adventures
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

