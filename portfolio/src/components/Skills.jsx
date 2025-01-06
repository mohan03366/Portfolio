const Skills = () => {
  const skillItem = [
    {
      imgSrc: "/images/figma.svg",
      label: "Figma",
      desc: "Design tool",
    },
    {
      imgSrc: "/images/css3.svg",
      label: "CSS",
      desc: "User Interface",
    },
    {
      imgSrc: "/images/javascript.svg",
      label: "JavaScript",
      desc: "Interaction",
    },
    {
      imgSrc: "/images/nodejs.svg",
      label: "NodeJS",
      desc: "Web Server",
    },
    {
      imgSrc: "/images/expressjs.svg",
      label: "ExpressJS",
      desc: "Node Framework",
    },
    {
      imgSrc: "/images/mongodb.svg",
      label: "MongoDB",
      desc: "Database",
    },
    {
      imgSrc: "/images/react.svg",
      label: "React",
      desc: "Framework",
    },
    {
      imgSrc: "/images/tailwindcss.svg",
      label: "TailwindCSS",
      desc: "User Interface",
    },
  ];

  return (
    <section
      id="skills"
      className="section py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-white mb-6 tracking-tight">
          Technologies I Work With
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Dive into the tools and technologies I’m learning and using to build
          interactive, user-friendly applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {skillItem.map(({ label, imgSrc, desc }, key) => (
            <div
              key={key}
              className="group relative bg-white rounded-xl shadow-2xl p-8 transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl overflow-hidden"
            >
              <div className="flex justify-center items-center mb-6">
                <img
                  src={imgSrc}
                  alt={label}
                  className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                {label}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-800 mt-2 transition-colors duration-300">
                {desc}
              </p>
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 via-purple-500/30 to-cyan-400/30 opacity-0 group-hover:opacity-50 rounded-xl transition-opacity duration-500"></div>
              {/* Decorative Ripple Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
