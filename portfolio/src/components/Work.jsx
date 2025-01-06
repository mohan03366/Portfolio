import WorkCard from "./WorkCard";

const Work = () => {
  const works = [
    {
      imgSrc: "/images/project1.jpg.png",
      title: "Full stack Riding-App",
      tags: ["API", "googleMapAPI", "Development"],
      projectLink: "https://github.com/mohan03366/Riding-App",
    },
    {
      imgSrc: "/images/project2.jpg.png",
      title: "LMS FRONTED",
      tags: ["API", "ReactJs"],
      projectLink: "https://github.com/mohan03366/Lms-Fronted-hn",
    },
    {
      imgSrc: "/images/project2.jpg.png",
      title: "LMS Backend",
      tags: ["Development", "API", "Mongodb"],
      projectLink: "https://github.com/mohan03366/LMS-backend",
    },
    {
      imgSrc: "/images/project3.jpg.png",
      title: "instaClone",
      tags: ["Web-design", "Development"],
      projectLink: "https://github.com/mohan03366/instaclone",
    },
    {
      imgSrc: "/images/project-5.jpg",
      title: "eCommerce website",
      tags: ["eCommerce", "Development"],
      projectLink: "https://github.com/mohan03366/MYNTRA-PROJECT",
    },
    {
      imgSrc: "/images/project4.jpg.png",
      title: "vCard Personal portfolio",
      tags: ["Web-design", "Development"],
      projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
    },
  ];

  return (
    <section id="work" className="section bg-zinc-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-emerald-400">
          My Portfolio Highlights
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <WorkCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
