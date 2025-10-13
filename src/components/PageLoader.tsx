import { useEffect, useState } from 'react';
import Logo from '/src/Public/Logo.png';

export default function PageLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation matching loader duration
    const duration = 5800; // 5.8 seconds - matches 6 second loader
    const steps = 100;
    const increment = 100 / steps;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Slower increment for smoother animation
        return Math.min(prev + increment, 100);
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 0.3;
            transform: scale(1);
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .fade-in-up-delayed {
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .fade-in-percentage {
          animation: fadeIn 0.5s ease-out 0.4s forwards;
          opacity: 0;
        }

        .circle-animation {
          animation: scaleIn 2s ease-out forwards;
          opacity: 0.3;
        }
      `}</style>

      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center">
        {/* Background Video */}
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dlalsmidm/video/upload/v1760386083/WhatsApp_Video_2025-10-14_at_00_online-video-cutter.com_m0kxsy.mp4" type="video/mp4" />
        </video>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/80 via-sky-800/70 to-sky-700/80"></div>

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo and Brand Name */}
          <div className="text-center mb-8">
          {/* Logo Image */}
          <div className="flex justify-center mb-6">
            <img 
              src={Logo} 
              alt="আপন বাংলা Logo" 
              className="h-20 md:h-28 w-auto fade-in-up"
              style={{
                filter: 'drop-shadow(0 4px 12px rgba(255, 255, 255, 0.3))',
              }}
            />
          </div>
          
          {/* Brand Name */}
          <h1 
            className="text-4xl md:text-6xl font-bold text-white mb-3 fade-in-up-delayed"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              textShadow: '0 2px 20px rgba(255, 255, 255, 0.2)',
            }}
          >
            আপন বাংলা
          </h1>
          <p 
            className="text-white/80 text-sm md:text-base tracking-[0.3em] uppercase fade-in-percentage"
          >
            West Bengal
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-48 md:w-64 relative">
          {/* Background Line */}
          <div className="h-[2px] bg-white/20 w-full rounded-full overflow-hidden">
            {/* Progress Line */}
            <div
              className="h-full bg-gradient-to-r from-white via-sky-200 to-white rounded-full transition-all duration-200 ease-linear"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
              }}
            />
          </div>
          
          {/* Progress Percentage */}
          <div 
            className="text-xs text-white/70 text-center mt-4 font-medium tabular-nums fade-in-percentage"
          >
            {Math.round(progress)}%
          </div>
        </div>

          {/* Subtle Circle Animation */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div 
              className="w-64 h-64 md:w-96 md:h-96 border border-white/10 rounded-full circle-animation"
            />
          </div>
        </div>
      </div>
    </>
  );
}