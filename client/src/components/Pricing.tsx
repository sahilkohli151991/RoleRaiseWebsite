import { Check, CreditCard, Zap, Star, Crown, Settings, Users, Award } from 'lucide-react';
import PayPalButton from './PayPalButton';

export default function Pricing() {
  const programs = [
    {
      name: "Interview Mastery",
      icon: <Zap className="w-6 h-6" />,
      originalPrice: 9564,
      discountedPrice: 2980,
      description: "Perfect for interview preparation",
      features: [
        "Resume & LinkedIn optimization",
        "Interview prep course",
        "2 mock interviews",
        "Salary negotiation guide",
        "Job-search strategy session",
        "Community access"
      ]
    },
    {
      name: "Dream Job Accelerator",
      icon: <Star className="w-6 h-6" />,
      originalPrice: 17964,
      discountedPrice: 5980,
      description: "Most comprehensive career transformation",
      featured: true,
      features: [
        "Everything in Interview Mastery",
        "Personal FAANG mentor",
        "5 guaranteed referrals",
        "Unlimited 1:1 coaching",
        "600+ applications handled",
        "Expert salary negotiation (+ $34K avg.)",
        "LinkedIn & resume overhaul by ex-recruiters",
        "24/7 Slack support",
        "Job placement acceleration"
      ]
    },
    {
      name: "Elite Executive",
      icon: <Crown className="w-6 h-6" />,
      originalPrice: 29964,
      discountedPrice: 8980,
      description: "For executives & senior professionals",
      features: [
        "Everything in Dream Job Accelerator",
        "Dedicated career strategist",
        "10 guaranteed C-suite referrals",
        "Executive presence coaching",
        "Board interview prep",
        "Equity negotiation masterclass",
        "Priority job placement",
        "1,000+ job applications managed"
      ]
    },
    {
      name: "Custom Enterprise",
      icon: <Settings className="w-6 h-6" />,
      originalPrice: null,
      discountedPrice: "Custom",
      description: "Fully bespoke career roadmap",
      isCustom: true,
      features: [
        "Fully bespoke career roadmap",
        "Unlimited applications & referrals",
        "Dedicated account manager",
        "Tailored timeline & milestones",
        "Enterprise-level support",
        "Success acceleration"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-brand-cloud-mist">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <div className="section-badge mb-6">
            <CreditCard className="w-4 h-4 mr-2" />
            Investment Options
          </div>
          <h2 className="heading-2 mb-6">Your $200K+ Career Investment</h2>
          <p className="body-text-large max-w-3xl mx-auto">
            Choose the fastest path to your dream role. Average ROI: 400% within 90 days
          </p>
          <div className="mt-6 bg-red-100 border border-red-400 rounded-lg p-4 inline-block">
            <p className="text-red-800 font-bold">
              🔥 Limited Time: 40% OFF All Programs - Act Fast!
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                program.featured 
                  ? 'border-brand-denim-blue transform scale-105 relative' 
                  : 'border-brand-sky-blue hover:border-brand-denim-blue'
              }`}
              role="article"
              aria-label={`${program.name} program details`}
            >
              {program.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-emerald-teal text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
              )}

              {/* Discount Badge */}
              {!program.isCustom && (
                <div className="absolute -top-3 -right-3">
                  <div className="bg-brand-coral-blush text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12">
                    40% OFF
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-3 rounded-full ${
                    program.featured ? 'bg-brand-emerald-teal text-white' : 'bg-brand-sky-blue text-brand-slate-navy'
                  }`}>
                    {program.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-brand-slate-navy mb-3 font-heading">{program.name}</h3>
                <p className="text-brand-graphite-gray mb-6 text-sm font-body">{program.description}</p>
                
                <div className="pricing-container">
                  {!program.isCustom ? (
                    <>
                      <div className="text-lg text-brand-graphite-gray line-through mb-2">
                        ${program.originalPrice?.toLocaleString()}
                      </div>
                      <div className="text-4xl font-black text-brand-slate-navy mb-3 font-heading">
                        ${program.discountedPrice.toLocaleString()}
                      </div>
                    </>
                  ) : (
                    <div className="text-4xl font-black text-brand-slate-navy mb-3 font-heading">
                      {program.discountedPrice}
                    </div>
                  )}
                  <p className="text-brand-graphite-gray font-medium text-sm">One-time payment</p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-4 h-4 text-brand-emerald-teal mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-brand-graphite-gray text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="paypal-button-container">
                {!program.isCustom ? (
                  <PayPalButton 
                    amount={program.discountedPrice.toString()}
                    currency="USD"
                    intent="CAPTURE"
                    id={`paypal-button-${program.name.toLowerCase().replace(/\s+/g, '-')}`}
                  />
                ) : (
                  <button 
                    className="w-full bg-primary text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors duration-200"
                    onClick={() => {
                      // Scroll to contact section or open Calendly
                      const bookCallSection = document.getElementById('book-call');
                      if (bookCallSection) {
                        bookCallSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    aria-label="Get custom enterprise pricing"
                  >
                    Get Custom Quote
                  </button>
                )}
              </div>
              
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  💰 Money-back guarantee • 🔒 Secure payment
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">90-Day Guarantee</div>
                <div className="text-sm text-gray-600">Job offer or money back</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">4.9/5 Rating</div>
                <div className="text-sm text-gray-600">From 742+ clients</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Crown className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">FAANG Mentors</div>
                <div className="text-sm text-gray-600">Ex-employees guide you</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="heading-4 mb-2">90-Day Guarantee</h3>
                <p className="text-gray-600 text-sm">Get 3+ interviews or full refund</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="heading-4 mb-2">FAANG Mentors</h3>
                <p className="text-gray-600 text-sm">Direct access to top executives</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="heading-4 mb-2">92% Success Rate</h3>
                <p className="text-gray-600 text-sm">Proven track record of results</p>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-green-100 rounded-full text-green-800 font-semibold mb-4">
                <Check className="w-5 h-5 mr-2" />
                Risk-Free Investment
              </div>
              <p className="text-gray-600">Join 500+ professionals who transformed their careers with our proven system</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
