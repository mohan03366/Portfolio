const About = () => {
  const aboutItems = [
    {
      label: "Projects Done",
      number: 6,
    },
    {
      label: "Years of Experience",
      number: 2,
    },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-400 py-16 mt-10"
    >
      <div className="container mx-auto text-center text-white px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">About Me</h2>
        <p className="text-lg lg:text-xl mb-10 max-w-4xl mx-auto leading-relaxed">
          "I’m Mohan, a web development student with a deep passion for creating
          user-friendly websites. I’m always eager to learn new technologies and
          collaborate on exciting projects to hone my skills and turn ideas into
          reality."
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {aboutItems.map(({ label, number }, key) => (
            <div
              key={key}
              className="flex flex-col items-center justify-center bg-white bg-opacity-20 rounded-xl shadow-lg p-6 hover:scale-105 transform transition-all duration-300 group"
            >
              <div className="text-5xl font-bold text-emerald-500 mb-4 group-hover:text-cyan-400 transition-all">
                <span className="text-6xl font-semibold">{number}</span>+
              </div>
              <p className="text-sm md:text-lg font-medium">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <img
            src="/images/logo.svg"
            alt="Logo"
            width={40}
            height={40}
            className="mx-auto transform transition-all duration-500 hover:scale-110 hover:rotate-6"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
