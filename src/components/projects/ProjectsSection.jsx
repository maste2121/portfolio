import React from "react";
import { MdOutlinePreview } from "react-icons/md";

const projects = [
  {
    id: 1,
    title: "Church Donation App",
    description:
      "A Flutter-based app for managing donations, featuring user dashboards, music playback, and admin control.",
    image: "/public/image.jpg",
    demoLink: "https://your-demo-link.com",
    codeLink: "https://github.com/your-repo",
  },
  {
    id: 2,
    title: "Event Management System",
    description:
      "A JavaFX desktop system for managing events, users, and schedules with a MySQL database.",
    image: "/public/images.jpg",
    demoLink: "#",
    codeLink: "#",
  },
  {
    id: 3,
    title: "TechnologyN Website",
    description:
      "A responsive website built with React and TailwindCSS showcasing the latest technology trends.",
    image: "/public/imagess.jpg",
    demoLink: "https://your-site.com",
    codeLink: "https://github.com/your-repo",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-darkBrown-500">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">
          My Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Here are some of my favorite projects I’ve worked on recently.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className=" bg-darkBrown rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-ligtcyan-500 text-white text-sm font-medium rounded-md hover:bg-cyan-500 transition"
                  >
                    View Project <MdOutlinePreview />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
