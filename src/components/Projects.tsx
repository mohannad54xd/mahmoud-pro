import { useState, useEffect } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ['All', 'Web App', 'Mobile App', 'UI/UX'];

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web App',
      image: '/images/projects/ecommerce.jpg',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Travel Companion App',
      category: 'Mobile App',
      image: '/images/projects/travel.jpg',
      tech: ['React Native', 'Firebase'],
      link: '#'
    },
    {
      title: 'Dashboard Design System',
      category: 'UI/UX',
      image: '/images/projects/dashboard.jpg',
      tech: ['Figma', 'Tailwind CSS'],
      link: '#'
    },
    {
      title: 'Social Media Platform',
      category: 'Web App',
      image: '/images/projects/social.jpg',
      tech: ['Next.js', 'GraphQL', 'PostgreSQL'],
      link: '#'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="min-h-screen bg-[#0a0a0a] relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-secondary/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-6xl mx-auto ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Featured <span className="  text-purple-500 text-primary">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-purple-500 mx-auto rounded-full shadow-glow"></div>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <a
                href={project.link}
                key={project.title}
                className={`group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  transition-all duration-1000`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1 rounded-full bg-white/10 text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
