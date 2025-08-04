const Contact = () => {
  return (
    <section className="min-h-screen relative py-20 overflow-hidden bg-[#080808]">
      {/* Creative Background Pattern */}
      <div className="absolute inset-0">
        {/* Honeycomb Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(135deg, rgba(var(--primary-rgb), 0.15) 25%, transparent 25%),
                           linear-gradient(225deg, rgba(var(--primary-rgb), 0.15) 25%, transparent 25%),
                           linear-gradient(45deg, rgba(var(--secondary-rgb), 0.15) 25%, transparent 25%),
                           linear-gradient(315deg, rgba(var(--secondary-rgb), 0.15) 25%, transparent 25%)`,
          backgroundPosition: '40px 0, 40px 0, 0 0, 0 0',
          backgroundSize: '80px 80px',
          backgroundRepeat: 'repeat'
        }}></div>

        {/* Animated Lines */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(5)].map((_, i) => (
            <div key={i}
                 className="absolute h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-full"
                 style={{
                   top: `${20 * i}%`,
                   animation: `slideRight ${8 + i * 2}s linear infinite`,
                   left: `-100%`
                 }}
            ></div>
          ))}
          {[...Array(5)].map((_, i) => (
            <div key={i + 5}
                 className="absolute w-px bg-gradient-to-b from-transparent via-secondary/50 to-transparent h-full"
                 style={{
                   left: `${20 * i}%`,
                   animation: `slideDown ${8 + i * 2}s linear infinite`,
                   top: `-100%`
                 }}
            ></div>
          ))}
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full filter blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-secondary/20 rounded-full filter blur-xl"></div>
        <div className="absolute top-3/4 left-3/4 w-24 h-24 bg-purple-500/20 rounded-full filter blur-xl"></div>

        {/* Overlay to improve content visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Get in <span className=" text-purple-500 text-primary">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-purple-500 mx-auto rounded-full shadow-glow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/10 rounded-xl p-8 backdrop-blur-md border border-white/20 shadow-lg shadow-primary/5">
                <h3 className="text-2xl font-semibold mb-4 text-primary drop-shadow-lg">
                  Let's Connect
                </h3>
                <p className="text-white/90 leading-relaxed mb-8 text-lg">
                  Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
                </p>
                <div className="space-y-6">
                  <a href="mailto:contact@example.com" className="flex items-center gap-4 text-white/90 hover:text-white transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10 flex items-center justify-center group-hover:border-primary/30 transition-all duration-300">
                      <i className="fas fa-envelope text-lg text-white"></i>
                    </div>
                    <span>contact@example.com</span>
                  </a>
                  <a href="tel:+1234567890" className="flex items-center gap-4 text-white/90 hover:text-white transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10 flex items-center justify-center group-hover:border-primary/30 transition-all duration-300">
                      <i className="fas fa-phone text-lg text-white"></i>
                    </div>
                    <span>+1 (234) 567-890</span>
                  </a>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10 flex items-center justify-center">
                      <i className="fas fa-map-marker-alt text-lg text-white"></i>
                    </div>
                    <span>New York, NY, United States</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-primary outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-primary outline-none transition-colors"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-primary outline-none transition-colors resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
