import { Zap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Assessment",
      description: "We analyze your current skills, experience, and career goals to create a personalized roadmap"
    },
    {
      number: 2,
      title: "Mentorship",
      description: "Get matched with a senior executive mentor from Google, Meta, Amazon, or other top companies"
    },
    {
      number: 3,
      title: "Preparation",
      description: "Intensive training on technical skills, system design, behavioral interviews, and negotiation"
    },
    {
      number: 4,
      title: "Success",
      description: "Land your $200K+ role with our 92% success rate and ongoing support through your first 90 days"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <div className="section-badge mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Our Process
          </div>
          <h2 className="heading-2 mb-6">How We Transform Your Career</h2>
          <p className="body-text-large">
            Our proven 4-step system has helped 500+ professionals land $200K+ roles
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-3xl p-10 text-center shadow-xl border border-brand-sky-blue card-hover hover:shadow-2xl transition-all duration-300 hover:border-brand-denim-blue">
              <div className="w-16 h-16 bg-brand-emerald-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-black text-white">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
