import PropTypes from "prop-types";

// Base Button Styles
const baseClasses =
  "inline-flex items-center justify-center gap-4 px-6 py-3 rounded-full font-semibold text-lg tracking-wide transition-all duration-300 transform focus:outline-none relative overflow-hidden";

// Premium Icon styling
const iconClasses =
  "material-symbols-outlined text-xl transition-all duration-300 transform group-hover:scale-110";

// Hover Effects for both buttons
const hoverClasses =
  "group hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-500 hover:scale-105 hover:shadow-lg hover:ring-4 hover:ring-emerald-400/50";

// Active States
const activeClasses = "active:scale-95 active:shadow-sm";

// Combined Classes for Button
const combinedClasses = baseClasses + hoverClasses + activeClasses;

// ButtonPrimary Component
const ButtonPrimary = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={combinedClasses + " " + classes}
      >
        <span className="relative z-10">{label}</span>
        {icon && (
          <span className={`${iconClasses} z-10`} aria-hidden="true">
            {icon}
          </span>
        )}
        {/* Background Gradient & Hover Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-400 opacity-30 rounded-full group-hover:opacity-100 transition-opacity duration-500"></div>
        {/* Decorative Ripple Effect */}
        <div className="absolute inset-0 bg-emerald-400/30 opacity-0 rounded-full group-hover:opacity-100 animate-ping"></div>
      </a>
    );
  } else {
    return (
      <button className={combinedClasses + " " + classes}>
        <span className="relative z-10">{label}</span>
        {icon && (
          <span className={`${iconClasses} z-10`} aria-hidden="true">
            {icon}
          </span>
        )}
        {/* Background Gradient & Hover Animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-400 opacity-30 rounded-full group-hover:opacity-100 transition-opacity duration-500"></div>
        {/* Decorative Ripple Effect */}
        <div className="absolute inset-0 bg-emerald-400/30 opacity-0 rounded-full group-hover:opacity-100 animate-ping"></div>
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

// Updated ButtonOutline Component
const ButtonOutline = ({ href, target = "_self", label, icon, classes }) => {
  return (
    <a
      href={href}
      target={target}
      className={`inline-flex items-center justify-center gap-4 px-6 py-3 text-lg font-semibold text-zinc-100 border-2 border-emerald-500 rounded-full bg-transparent transition-all duration-300 ease-out transform hover:scale-105 hover:bg-emerald-500/10 hover:text-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-offset-2 shadow-lg hover:shadow-2xl focus:shadow-xl active:scale-95 ${classes}`}
    >
      {/* Updated icon with outline */}
      {icon && (
        <span className="material-symbols-outlined text-xl border-2 border-emerald-500 p-1 rounded-full transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:text-emerald-500">
          {icon}
        </span>
      )}
      <span>{label}</span>
    </a>
  );
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
