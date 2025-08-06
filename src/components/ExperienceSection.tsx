const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "Jan 2022 - Present",
      description:
        "Lead frontend development for enterprise applications. Implemented modern React architecture with TypeScript and advanced state management techniques. Mentored junior developers and conducted code reviews.",
      achievements: [
        "Reduced page load time by 40% through code splitting and lazy loading",
        "Implemented a component library used across multiple projects",
        "Led the migration from a legacy codebase to a modern React stack",
      ],
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Web Innovators",
      period: "Mar 2019 - Dec 2021",
      description:
        "Developed and maintained web applications for clients in various industries. Worked across the full stack with React, Node.js, and SQL/NoSQL databases.",
      achievements: [
        "Designed and implemented a custom CMS for a media company",
        "Integrated payment gateways for multiple e-commerce platforms",
        "Deployed and maintained cloud infrastructure on AWS",
      ],
    },
    {
      id: 3,
      role: "Junior Web Developer",
      company: "Digital Agency",
      period: "Jun 2017 - Feb 2019",
      description:
        "Collaborated with designers and senior developers to create responsive websites and web applications. Specialized in frontend development with HTML, CSS, and JavaScript.",
      achievements: [
        "Developed responsive layouts for more than 20 client websites",
        "Implemented SEO best practices, improving organic search rankings",
        "Created interactive data visualizations using D3.js",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My professional journey in the tech industry
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-800 space-y-10">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

const ExperienceCard = ({
  experience,
  isLast,
}: {
  experience: Experience;
  isLast: boolean;
}) => {
  return (
    <div className="relative">
      {/* Timeline dot */}
      <div className="absolute -left-[41px] mt-1.5 w-5 h-5 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900"></div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ml-2 transition hover:shadow-lg">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
          <h3 className="text-xl font-bold">{experience.role}</h3>
          <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
            {experience.period}
          </span>
        </div>

        <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">
          {experience.company}
        </h4>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {experience.description}
        </p>

        <div>
          <h5 className="font-medium mb-2">Key Achievements:</h5>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
            {experience.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
