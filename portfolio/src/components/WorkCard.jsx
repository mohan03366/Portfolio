import PropTypes from "prop-types";

const WorkCard = ({ imgSrc, title, tags, projectLink, classes = "" }) => {
  return (
    <div
      className={`group relative bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${classes}`}
    >
      {/* Image Section */}
      <figure className="relative overflow-hidden rounded-t-xl">
        <img
          src={imgSrc}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </figure>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((label, key) => (
            <span
              className="bg-emerald-500/20 text-emerald-400 text-sm px-3 py-1 rounded-full font-medium shadow-sm"
              key={key}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Action Link */}
      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center bg-transparent group-hover:bg-emerald-500/20 transition-colors duration-300"
      >
        <span
          className="material-symbols-outlined text-3xl text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        >
          arrow_outward
        </span>
      </a>
    </div>
  );
};

WorkCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default WorkCard;
