const BackgroundPattern = () => {
  return (
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
  );
};

export default BackgroundPattern;
