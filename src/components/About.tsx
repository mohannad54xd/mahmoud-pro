import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Next.js', level: 85 },
    { name: 'MongoDB', level: 75 }
  ];

  return (
    <section className="min-h-screen bg-[#0a0a0a] relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-2xl animate-blob"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-2xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-4xl mx-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">
              About <span className=" text-purple-500 text-primary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-purple-500 mx-auto rounded-full shadow-glow"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white/90">My Journey</h3>
              <p className="text-gray-400/90 leading-relaxed">
                With over 5 years of experience in web development, I've had the privilege of working
                on diverse projects that have shaped my expertise in creating innovative digital solutions.
              </p>
              <p className="text-gray-400/90 leading-relaxed">
                My passion lies in crafting seamless user experiences and building scalable applications
                that make a real impact. I believe in continuous learning and staying ahead of industry trends.
              </p>
              
              {/* Experience Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                  <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">5+</h4>
                  <p className="text-white/80 mt-2">Years of Experience</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                  <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">50+</h4>
                  <p className="text-white/80 mt-2">Projects Completed</p>
                </div>
              </div>
            </div>

            {/* Right Column - Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white/90">My Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">{skill.name}</span>
                      <span className="text-white/60">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary transform origin-left transition-transform duration-1000"
                        style={{ 
                          transform: isVisible ? `scaleX(${skill.level / 100})` : 'scaleX(0)'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
