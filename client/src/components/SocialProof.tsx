import { Star, Users, Award, TrendingUp } from 'lucide-react';

export default function SocialProof() {
  const companyLogos = [
    { name: "Google", src: "/attached_assets/Google_Logo_1.png" },
    { name: "Meta", src: "/attached_assets/Meta_idlf4cVSsS_1.png" },
    { name: "Amazon", src: "/attached_assets/Amazon_Logo_1.png" },
    { name: "Netflix", src: "/attached_assets/Netflix_Logo_1.png" },
    { name: "Stripe", src: "/attached_assets/Stripe_Logo_1.png" },
    { name: "KPMG", src: "/attached_assets/KPMG_id9tLD2YU7_1.png" },
    { name: "X", src: "/attached_assets/X_idJxGuURW1_1.png" },
    { name: "Innovaccer", src: "/attached_assets/Innovaccer_id6-tvzgdK_1.png" },
    { name: "BeOne Medicines", src: "/attached_assets/BeOne Medicines_idjdyMFja5_1.png" },
  ];

  const additionalCompanies = [
    "Microsoft", "Apple", "Tesla", "Uber", "Airbnb", "Spotify", 
    "Salesforce", "Adobe", "Oracle", "IBM", "LinkedIn", "Snapchat"
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Logos */}
        <div className="text-center mb-12">
          <div className="section-badge mb-8">
            <TrendingUp className="w-4 h-4 mr-2" />
            Success Stories
          </div>
          <h2 className="heading-3 mb-4">Where Our Clients Work Now</h2>
          
          {/* Animated Banner */}
          <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-3 px-6 rounded-full inline-block mb-8 shadow-lg">
            <div className="flex items-center justify-center space-x-2">
              <span className="animate-pulse text-yellow-200">🎯</span>
              <span className="font-semibold text-sm sm:text-base">742+ Tech Professionals Placed in 2025</span>
              <span className="animate-pulse text-yellow-200">🚀</span>
            </div>
          </div>
          
          {/* Scrolling Company Logos */}
          <div className="overflow-hidden relative">
            <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-green-50 to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-blue-50 to-transparent z-10"></div>
            
            <div className="animate-[scroll_40s_linear_infinite] flex items-center space-x-8 sm:space-x-12 whitespace-nowrap">
              {/* Company logos with images */}
              {companyLogos.map((company, index) => (
                <div key={`logo-${index}`} className="flex items-center justify-center min-w-[100px] sm:min-w-[120px] hover:scale-110 transition-transform duration-300">
                  <img 
                    src={company.src}
                    alt={company.name}
                    className="h-8 sm:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
              
              {/* Additional companies as text */}
              {additionalCompanies.map((company, index) => (
                <div key={`text-${index}`} className="flex items-center justify-center min-w-[100px] sm:min-w-[120px] hover:scale-110 transition-transform duration-300">
                  <span className="text-lg sm:text-2xl font-bold text-gray-600 opacity-80 hover:opacity-100 transition-opacity duration-300">
                    {company}
                  </span>
                </div>
              ))}
              
              {/* Duplicate for seamless loop */}
              {companyLogos.map((company, index) => (
                <div key={`logo-dup-${index}`} className="flex items-center justify-center min-w-[100px] sm:min-w-[120px] hover:scale-110 transition-transform duration-300">
                  <img 
                    src={company.src}
                    alt={company.name}
                    className="h-8 sm:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
              
              {additionalCompanies.map((company, index) => (
                <div key={`text-dup-${index}`} className="flex items-center justify-center min-w-[100px] sm:min-w-[120px] hover:scale-110 transition-transform duration-300">
                  <span className="text-lg sm:text-2xl font-bold text-gray-600 opacity-80 hover:opacity-100 transition-opacity duration-300">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-3">
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
            <div className="text-2xl font-black text-gray-900">4.9/5</div>
            <div className="text-sm text-gray-600">Client Rating</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-3">
              <Users className="w-8 h-8 text-blue-500" />
            </div>
            <div className="text-2xl font-black text-gray-900">742+</div>
            <div className="text-sm text-gray-600">Clients Hired</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-3">
              <Award className="w-8 h-8 text-green-500" />
            </div>
            <div className="text-2xl font-black text-gray-900">90%</div>
            <div className="text-sm text-gray-600">Success Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex justify-center mb-3">
              <TrendingUp className="w-8 h-8 text-purple-500" />
            </div>
            <div className="text-2xl font-black text-gray-900">$34K</div>
            <div className="text-sm text-gray-600">Avg. Salary Increase</div>
          </div>
        </div>
      </div>
    </section>
  );
}