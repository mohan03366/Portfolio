import { ButtonPrimary } from "./Button";

const sitemap = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },

  { label: "Contact me", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/mohan03366" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mohan-kumar-942698233/",
  },

  { label: "Instagram", href: "https://www.instagram.com/mohan_kumar_82/" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100014596510294",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-12 text-white">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="flex flex-col space-y-6 lg:space-y-0">
          <h1 className="text-3xl font-extrabold leading-tight text-emerald-400">
            Let&apos;s work from today!
          </h1>
          <ButtonPrimary
            href="mailto:mohankumar03366@gmail.com"
            label="Start project"
            icon="chevron_right"
            className="mt-4 px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition duration-300 flex items-center"
          />
        </div>

        {/* Sitemap Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold text-emerald-500">Sitemap</h2>
          <ul className="space-y-3">
            {sitemap.map(({ label, href }, key) => (
              <li key={key}>
                <a
                  href={href}
                  className="hover:text-emerald-400 transition duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold text-emerald-500">Socials</h2>
          <ul className="space-y-3">
            {socials.map(({ label, href }, key) => (
              <li key={key}>
                <a
                  href={href}
                  className="flex items-center gap-2 hover:text-emerald-400 transition duration-200"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="text-emerald-500"
                  >
                    <path d="M12.123 2.937C11.923 2.217 11.23 2 10.5 2c-.729 0-1.423.217-1.623.937C7.834 4.42 5.652 4 5.03 4c-.507 0-.907.341-.927.813-.036.355-.247.66-.56.843-.3.174-.62.282-.96.287-.547 0-.992.375-1.08.915-.085.447.174.91.58 1.073.453.196.935.27 1.423.26h1.29c-.48.614-.607 1.48-.277 2.2.248.448.77.752 1.358.752s1.121-.304 1.358-.752c.329-.719.202-1.586-.277-2.2h1.29c.486 0 .97-.084 1.423-.28.404-.162.664-.625.58-1.073-.088-.541-.533-.915-1.08-.915-.341 0-.661-.113-.96-.287-.313-.183-.524-.488-.56-.843-.02-.472-.42-.813-.927-.813-.622 0-2.804.42-5.434-.25C5.337 4.905 5.49 4 5.923 3.5C6.198 3.22 6.528 3 6.85 3c.865 0 2.06.25 3.38.722C10.867 4.937 12.123 2.937z" />
                  </svg>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-12 border-t-2 border-emerald-500 pt-6 text-center text-sm">
        <a href="/" className="inline-block mb-2">
          <img
            src="images/logo.svg"
            width={50}
            height={50}
            alt="Logo"
            className="mx-auto"
          />
        </a>
        <p className="text-gray-300">
          © 2025 <span className="text-emerald-500">Mohan Kumar</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
