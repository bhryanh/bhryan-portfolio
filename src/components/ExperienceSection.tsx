const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      role: "Senior Software Engineer",
      company: "Praxent (Remote)",
      period: "March 2025 - Present",
      description:
        "Designing and developing a scalable insurance platform for lawyers using modern technologies and best practices.",
      achievements: [
        "Designed and developed a scalable insurance platform for lawyers using .NET 8 and Entity Framework, implementing the CQRS pattern to optimize command and query performance",
        "Built responsive frontend interfaces with React, TypeScript, Tailwind CSS, shadcn/ui, and Zustand for state management, leveraging Tanstack Query for efficient data fetching and caching",
        "Implemented Azure AD integration for secure user authentication and role-based permissions, enhancing login efficiency and access control",
        "Collaborated with product owners and designers in an agile environment to deliver features, ensuring high code quality through SOLID principles and code reviews",
      ],
      techStack:
        ".NET 8, Entity Framework, CQRS, Azure AD, React, TypeScript, Tanstack Query, Tailwind CSS, shadcn/ui, Zustand, REST APIs, Microsoft SQL Server, Agile SCRUM",
    },
    {
      id: 2,
      role: "Senior Software Engineer",
      company: "Inter & Co (Consultant, Act Digital)",
      period: "January 2024 - March 2025",
      description:
        "Refactored a legacy ACH transaction system, migrating from ColdFusion to a .NET 8 microservices architecture on AWS EKS.",
      achievements: [
        "Refactored a legacy ACH transaction system, migrating from ColdFusion to a .NET 8 microservices architecture on AWS EKS, utilizing Kafka for event-driven processing, Redis for low-latency reads, and OpenSearch for logging and observability",
        "Increased Transactions Per Second (TPS) by 1000%, improving tracking, security, and performance",
        "Developed data-driven REST APIs using ASP.NET Core, implemented Terraform for infrastructure as code, integrated with S3, and used New Relic for monitoring",
        "Followed SCRUM for iterative delivery, ensuring smooth collaboration with distributed teams",
      ],
      techStack:
        ".NET 8, ASP.NET Core, ColdFusion, AWS (EKS, S3, RDS), Kafka, Amazon Aurora, PostgreSQL, Microsoft SQL Server, Redis, REST APIs, New Relic, Open Search, Terraform, SCRUM, xUnit",
    },
    {
      id: 3,
      role: "Mid Level Software Engineer",
      company: "Concert Technologies",
      period: "March 2019 - December 2023",
      description:
        "Led development of power theft detection system using satellite imagery and microservices architecture.",
      achievements: [
        "Designed and deployed a .NET 6 microservices architecture on AWS Fargate, integrating PostgreSQL, Terraform, and Lambda, while collaborating with ML engineers to containerize Python detection models in Docker",
        "Developed a responsive dashboard for operators, utilizing Angular (v12) for dynamic data visualization, implementing CI/CD with GitHub Actions and Terraform",
        "Delivered the project in phases—enabling early fraud detection and recovering 30% of the client's investment ahead of schedule",
        "Enhanced map visualization by developing a .NET 6 backend endpoint to fetch data based on the visible map frame and integrating it into the Angular frontend, improving client workflow efficiency by two hours per day",
      ],
      techStack:
        ".NET 6, Angular (v12), PostgreSQL, AWS (S3, ECS, Fargate, RDS, EC2, Lambda, SQS, SNS, DynamoDB, IAM, SageMaker, CloudWatch, API Gateway), REST APIs, JavaScript/TypeScript, CSS, HTML, xUnit, GitHub Actions, Terraform, Docker, Machine Learning, SCRUM",
    },
    {
      id: 4,
      role: "Mid Level Software Engineer",
      company: "Concert Technologies",
      period: "March 2019 - December 2023",
      description:
        "Led migration of a databus from .NET Framework 4.6 to .NET Core 3.1, increasing speed and enhancing security.",
      achievements: [
        "Led the migration of a databus from .NET Framework 4.6 to .NET Core 3.1, increasing speed by 120% and enhancing security",
        "Integrated ActiveMQ, AWS EC2, S3, RDS, CloudWatch, and Redis for a robust, scalable system",
        "Developed REST APIs and CRUD operations adhering to SOLID principles, modernized the system to fetch, update, and transform data from MSSQL, Oracle, PostgreSQL, and REST APIs",
        "Enhanced frontend with React, improved reliability with unit tests, and optimized CI/CD pipelines using Jenkins",
      ],
      techStack:
        ".NET Core, .NET Framework, AWS (S3, RDS, EC2, IAM, CloudWatch), ActiveMQ, Redis, React, xUnit, Docker, Jenkins, REST APIs, Microsoft SQL Server, PostgreSQL, Oracle",
    },
    {
      id: 5,
      role: "Intern Web Developer",
      company: "Casoca Marketplace",
      period: "February 2018 - August 2021",
      description:
        "Developed and maintained core modules of a marketplace platform using Magento 2 (PHP), handling over 50,000 monthly visitors.",
      achievements: [
        "Developed and maintained core modules of a marketplace platform using Magento 2 (PHP), handling over 50,000 monthly visitors",
        "Improved user experience by implementing JavaScript utilizing AJAX-based product filtering, HTML, and CSS, resulting in faster page load times and smoother navigation",
        "Managed cloud-hosted infrastructure, ensuring high availability and scalability",
      ],
      techStack:
        "PHP, Magento 2, HTML, CSS, JavaScript, MariaDB, Apache Server, Ubuntu, GitHub",
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
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
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
  techStack?: string;
}

const ExperienceCard = ({ experience }: { experience: Experience }) => {
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

        <div className="mb-4">
          <h5 className="font-medium mb-2">Key Achievements:</h5>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
            {experience.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>

        {experience.techStack && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <h5 className="font-medium mb-2">Tech Stack:</h5>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {experience.techStack}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceSection;
