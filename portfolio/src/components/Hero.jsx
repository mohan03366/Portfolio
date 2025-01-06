import { ButtonPrimary, ButtonOutline } from "./Button"; // Import your ButtonPrimary component

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 lg:pt-36 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-zinc-50"
    >
      <div className="container mx-auto lg:grid lg:grid-cols-2 items-center lg:gap-10 px-6 lg:px-12 xl:px-20">
        {/* Left Content */}
        <div className="space-y-6 lg:space-y-8">
          {/* Availability Info */}
          <div className="flex items-center gap-3">
            <figure className="w-10 h-10 rounded-lg overflow-hidden  shadow-lg ring-2 ring-emerald-400">
              <img
                src="/images/hero-mohan.png"
                width={40}
                height={40}
                alt="mohan image"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 w-full h-full animate-ping rounded-full bg-emerald-400"></span>
              </span>
              Available for work
            </div>
          </div>

          {/* Hero Heading */}
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tighter">
            Building Scalable <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Modern Websites
            </span>{" "}
            for the Future
          </h2>

          {/* Call-to-Action Buttons */}
          <div className="flex items-center gap-4">
            <ButtonPrimary
              href="https://drive.google.com/file/d/14WZQLO0xemlGKuwuAT4p6ZJSNB0uc9p3/view?usp=sharing"
              label="Download CV"
              icon="download"
              classes="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg ring-2 ring-emerald-400/70"
            />

            <ButtonOutline
              href="#about"
              label="Scroll Down"
              icon="arrow_downward"
              classes="lg:px-8 lg:py-4 px-6 py-3"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <figure className="relative shadow-2xl rounded-3xl overflow-hidden ring-8 ring-zinc-800/50 hover:ring-emerald-400/70 transition-all duration-500 group">
            <img
              src="/images/hero-mohan.png"
              width={656}
              height={800}
              alt="Hero Banner"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 group-hover:contrast-125 "
            />
            {/* Decorative Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/20 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Decorative Glow Effect */}
            <div className="absolute -z-10 -top-10 -left-10 w-96 h-96 bg-emerald-400/10 blur-3xl rounded-full group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="absolute -z-10 -bottom-10 -right-10 w-96 h-96 bg-cyan-400/10 blur-3xl rounded-full group-hover:opacity-50 transition-opacity duration-500"></div>
          </figure>

          {/* Decorative Element */}
          <div className="absolute -z-10 w-96 h-96 bg-gradient-to-tr from-emerald-400 to-cyan-400 opacity-30 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
