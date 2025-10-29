import { Check } from 'lucide-react';

export default function Mission() {
  const missions = [
    "To connect with the NRIs, PIOs and OCIs of West Bengal and bring them closer to their roots giving them a sense of belongingness.",
    "To build a bridge for communication with their State of origin.",
    "To re-affirm their identity by issuing NRWB Card as a step towards enabling responsive governance.",
    "To monitor their general welfare and implement programmes to address them effectively.",
    "To recognize outstanding contribution by NRBs and honouring them with Apon Bangla Pravasi Ratna Awards.",
    "To collaborate their skills for the economic and industrial development of the state."
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-8 py-8">
      <div className="max-w-5xl w-full">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 sm:mb-10">Mission</h1>
        
        <div className="space-y-4 sm:space-y-6">
          {missions.map((mission, index) => (
            <div key={index} className="flex items-start gap-3 sm:gap-4">
              <Check className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 flex-shrink-0 mt-0.5 font-bold stroke-[3]" />
              <p className="text-base sm:text-lg text-gray-900 leading-relaxed font-normal">
                {mission}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}