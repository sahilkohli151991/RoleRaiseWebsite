import { Shield, Target, DollarSign, RotateCcw } from 'lucide-react';

export default function Guarantee() {
  const guarantees = [
    {
      icon: <Target className="w-12 h-12 text-white" />,
      title: "Interview Acceleration",
      description: "3 interviews in 90 days with our proven system"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-white" />,
      title: "Salary Optimization", 
      description: "+$34K average salary increase with expert negotiation"
    },
    {
      icon: <RotateCcw className="w-12 h-12 text-white" />,
      title: "Ongoing Support",
      description: "Continuous coaching until you achieve your goals"
    }
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white mb-6 border border-white/20">
            <Shield className="w-4 h-4 mr-2" />
            Proven Results System
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Our proven system delivers consistent results
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {guarantees.map((item, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-white/90">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-white/20">
            <p className="text-lg font-semibold text-white">
              <strong>Think About It:</strong> Investing $2,980 now vs. staying $50K/year under-paid for another year...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}