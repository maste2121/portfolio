/* eslint-disable no-unused-vars */
import React from "react";
import { MdOutlinePreview } from "react-icons/md";
import { FadeIn } from "../Frameworkmotion/Fade";
// 🚨 FIX: Correctly import 'motion' from framer-motion. Assuming 'Frameer' was a typo.
import { motion } from "framer-motion";

const projects = [
  // ✅ New Quiz App Project
  {
    id: 1,
    title: "Quiz App",
    description:
      "An interactive quiz web app with Sign In / Sign Up and real-time scoring built using HTML, CSS, and JavaScript.",
    image: "/public/quiz.png", // 📷 Add an image in your /public folder (e.g., quiz.jpg)
    demoLink: "https://maste2121.github.io/quiz-app/", // 🌐 Replace with your deployed GitHub Pages link
  },
  {
    id: 2,
    title: "Scientific Calculator App",
    description:
      "A modern Flutter-based scientific calculator with trigonometric, logarithmic, and history features.",
    image: "/cal.jpg", // Screenshot of your Flutter app
    demoLink: "/app-release.apk", // Optional, leave # if no online demo
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-darkBrown-500">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title animation: Fades in from the top ('down') */}
        <motion.h2
          variants={FadeIn("down", 0.2)} // Direction 'down', 0.2s delay
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl font-bold mb-6 text-gray-800 dark:text-white"
        >
          My Projects
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Here are some of my favorite projects I’ve worked on recently.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            // Determine animation direction: 'left' for even indices (0, 2, 4...), 'right' for odd indices (1, 3, 5...)
            const direction = index % 2 === 0 ? "left" : "right";
            // Set a staggered delay based on the index
            const delay = 0.3 + index * 0.1;

            return (
              // Apply animation to the project card wrapper
              <motion.div
                key={project.id}
                variants={FadeIn(direction, delay)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-darkBrown rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300"
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
                  <div className="flex justify-between items-center">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-4 py-2 bg-cyan-600 text-white text-sm font-medium rounded-md hover:bg-cyan-500 transition"
                    >
                      <MdOutlinePreview /> View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
