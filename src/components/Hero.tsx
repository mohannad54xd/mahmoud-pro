import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="h-screen w-full bg-[#0a0a0a] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-2xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-2xl animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-[#0a0a0a] z-0"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="w-full h-full bg-grid-pattern opacity-20"></div>
      </div>

      {/* Logo with animated border */}
      <div className="absolute top-10 left-16 z-20 flex items-center gap-4">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-purple-500 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
          <div className="relative w-20 h-20 rounded-full border-2 border-white/20 bg-black/80 flex items-center justify-center hover:scale-105 transition-transform duration-500 shadow-lg shadow-primary/10">
        <h3 className="text-2xl font-bold tracking-widest text-purple-500 drop-shadow-lg select-none">
          MA
        </h3>
          </div>
        </div>
        <span className="text-lg text-purple-500 font-medium tracking-wide hidden md:inline-block">
          Mahmoud Abd Elnaby
        </span>
      </div>

      {/* Hero Content and Hero Image Wrapper */}
      <div className="relative h-full flex items-center justify-between px-20">
        {/* Hero Content */}
        <div className={`relative z-20 max-w-[600px] ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-all duration-1000 delay-300`}>
          <div className="space-y-6">
            <h1 className="text-7xl font-bold leading-tight text-white">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-purple-500 drop-shadow-lg">Mahmoud</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-purple-500 rounded-full shadow-lg"></span>
              </span>
            </h1>
            <h2 className="text-4xl tracking-wide text-white">
              A Professional{' '}
              <span className="relative inline-block group">
                <span className="relative z-10 text-secondary drop-shadow-lg">
                  Web Developer
                </span>
                <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full transition-all duration-500 h-1 bg-secondary opacity-50"></span>
              </span>
            </h2>
            <p className="text-gray-100/90 text-lg leading-relaxed tracking-wide">
              Transforming ideas into elegant digital solutions. Specializing in modern web development with a focus on performance, aesthetics, and user experience.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group hover:bg-secondary hover:border-secondary transition-all duration-300">
                <i className="fab fa-github text-white/80 group-hover:text-white transition-colors"></i>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group hover:bg-secondary hover:border-secondary transition-all duration-300">
                <i className="fab fa-linkedin-in text-white/80 group-hover:text-white transition-colors"></i>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group hover:bg-secondary hover:border-secondary transition-all duration-300">
                <i className="fab fa-twitter text-white/80 group-hover:text-white transition-colors"></i>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-6">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3.5 rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                View Projects
              </button>
              <button className="bg-white/5 text-white border border-white/10 px-8 py-3.5 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className={`relative w-[600px] h-[600px] z-10 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-all duration-1000 delay-500`}>
          <div className="relative w-full h-full group">
            {/* Animated gradient border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-purple-500 opacity-75 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
            
            {/* Image container with mask */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden z-20">
              <div className="absolute inset-0">
                <img 
                  src="/images/pfp.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/10"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
