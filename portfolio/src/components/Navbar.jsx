import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navopen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const initActiveBox = () => {
    if (!lastActiveLink.current) return;
    activeBox.current.style.top = `${lastActiveLink.current.offsetTop}px`;
    activeBox.current.style.left = `${lastActiveLink.current.offsetLeft}px`;
    activeBox.current.style.width = `${lastActiveLink.current.offsetWidth}px`;
    activeBox.current.style.height = `${lastActiveLink.current.offsetHeight}px`;
  };
  window.addEventListener("resize", initActiveBox);

  useEffect(() => {
    initActiveBox();
  }, []);

  const activeCurrentLink = (event) => {
    // Remove active class from the previous link
    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove("active");
    }

    // Add active class to the current link
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    // Update activeBox position
    activeBox.current.style.top = `${event.target.offsetTop}px`;
    activeBox.current.style.left = `${event.target.offsetLeft}px`;
    activeBox.current.style.width = `${event.target.offsetWidth}px`;
    activeBox.current.style.height = `${event.target.offsetHeight}px`;
  };

  const navItems = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      ref: lastActiveLink,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    // {
    //   label: "Reviews",
    //   link: "#reviews",
    //   className: "nav-link",
    // },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={`navbar ${navopen ? "active" : ""}`}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};
Navbar.propTypes = {
  navopen: PropTypes.bool.isRequired,
};

export default Navbar;
