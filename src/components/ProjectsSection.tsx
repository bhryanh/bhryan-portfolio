"use client";
import { useState } from "react";

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, shopping cart, and payment processing.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    image: "/project-placeholder.jpg",
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1-demo.example.com",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A task management application with drag-and-drop interface, real-time updates, and team collaboration features.",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    image: "/project-placeholder.jpg",
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://project2-demo.example.com",
    category: "Frontend",
  },
  {
    id: 3,
    title: "Blog API",
    description:
      "A RESTful API for a blog platform with authentication, post management, and comment functionality.",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT"],
    image: "/project-placeholder.jpg",
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://project3-api-docs.example.com",
    category: "Backend",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current and forecasted weather data from multiple sources.",
    technologies: ["React", "Redux", "Chart.js", "Weather API"],
    image: "/project-placeholder.jpg",
    githubUrl: "https://github.com/yourusername/project4",
    liveUrl: "https://project4-demo.example.com",
    category: "Frontend",
  },
  {
    id: 5,
    title: "Inventory Management System",
    description:
      "An inventory management system for small businesses with barcode scanning and reporting features.",
    technologies: ["React", "Node.js", "MySQL", "Docker"],
    image: "/project-placeholder.jpg",
    githubUrl: "https://github.com/yourusername/project5",
    liveUrl: "https://project5-demo.example.com",
    category: "Full Stack",
  },
  {
    id: 6,
    title: "Authentication Microservice",
    description:
      "A microservice for handling user authentication and authorization with OAuth integration.",
    technologies: ["Node.js", "Express", "Redis", "JWT", "OAuth"],
    image: "/project-placeholder.jpg",
    githubUrl: "https://github.com/yourusername/project6",
    liveUrl: "https://project6-api-docs.example.com",
    category: "Backend",
  },
];

const ProjectsSection = () => {
  const categories = ["All", "Frontend", "Backend", "Full Stack"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Check out some of my recent work
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  category: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition hover:shadow-xl">
      <div className="relative h-48">
        {/* Project Image Placeholder - Replace with actual images later */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white">
          <span className="text-xl font-semibold">{project.title}</span>
        </div>
        {/* Uncomment when you have actual project images
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
        */}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            Code
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
