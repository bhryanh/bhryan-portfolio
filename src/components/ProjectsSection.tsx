"use client";
import { useState } from "react";

// Project data based on work experience
const projects = [
  {
    id: 1,
    title: "Lawyer Insurance Platform",
    description:
      "A scalable insurance platform for lawyers with secure authentication and modern UI.",
    technologies: [
      "C#",
      ".NET 8",
      "Entity Framework",
      "CQRS",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Azure AD",
    ],
    image: "/project-placeholder.jpg",
    githubUrl: "#",
    liveUrl: "#",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Banking ACH Transaction System",
    description:
      "A microservices-based system for handling ACH transactions, replacing a legacy ColdFusion application.",
    technologies: [
      "C#",
      ".NET 8",
      "ASP.NET Core",
      "AWS EKS",
      "Kafka",
      "Redis",
      "Terraform",
      "Microservices",
    ],
    image: "/project-placeholder.jpg",
    githubUrl: "#",
    liveUrl: "#",
    category: "Backend",
  },
  {
    id: 3,
    title: "Power Theft Detection Platform",
    description:
      "A system that uses satellite imagery and machine learning to detect power theft in rural areas.",
    technologies: [
      "C#",
      ".NET 6",
      "Angular",
      "AWS Fargate",
      "PostgreSQL",
      "Lambda",
      "Docker",
      "Machine Learning",
    ],
    image: "/project-placeholder.jpg",
    githubUrl: "#",
    liveUrl: "#",
    category: "Full Stack",
  },
  {
    id: 4,
    title: "Map Visualization Enhancement",
    description:
      "A feature that displays points of interest on a map based on the visible frame, improving workflow efficiency.",
    technologies: [
      "C#",
      ".NET 6",
      "Angular",
      "Google Maps API",
      "REST API",
      "TypeScript",
    ],
    image: "/project-placeholder.jpg",
    githubUrl: "#",
    liveUrl: "#",
    category: "Frontend",
  },
  {
    id: 5,
    title: "Databus Migration",
    description:
      "Migration of a legacy databus from .NET Framework 4.6 to .NET Core 3.1, improving performance and security.",
    technologies: [
      "C#",
      ".NET Core",
      "AWS",
      "ActiveMQ",
      "Redis",
      "SQL Server",
      "Oracle",
      "PostgreSQL",
    ],
    image: "/project-placeholder.jpg",
    githubUrl: "#",
    liveUrl: "#",
    category: "Backend",
  },
  {
    id: 6,
    title: "E-commerce Marketplace",
    description:
      "A marketplace platform built with Magento 2, handling over 50,000 monthly visitors.",
    technologies: [
      "PHP",
      "Magento 2",
      "JavaScript",
      "HTML",
      "CSS",
      "MariaDB",
      "Apache",
      "Ubuntu",
    ],
    image: "/project-placeholder.jpg",
    githubUrl: "#",
    liveUrl: "#",
    category: "Full Stack",
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Notable Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Highlights from my professional work
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
