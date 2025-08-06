const SkillsSection = () => {
  const languagesSkills = [
    { name: "C#", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 90 },
    { name: "Python", level: 75 },
    { name: "PHP", level: 70 },
    { name: "ColdFusion", level: 65 },
  ];

  const backendSkills = [
    { name: ".NET 8 / Core", level: 95 },
    { name: "ASP.NET Core", level: 95 },
    { name: "Entity Framework", level: 90 },
    { name: "REST APIs", level: 95 },
    { name: "CQRS Pattern", level: 90 },
    { name: "Microservices", level: 85 },
  ];

  const frontendSkills = [
    { name: "React", level: 85 },
    { name: "Angular", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Zustand", level: 80 },
    { name: "Tanstack Query", level: 85 },
    { name: "shadcn/ui", level: 80 },
  ];

  const cloudSkills = [
    { name: "Azure (App Services, Functions)", level: 85 },
    { name: "Azure AD", level: 80 },
    { name: "AWS (EKS, Lambda, S3)", level: 80 },
    { name: "AWS (RDS, EC2, SQS, SNS)", level: 80 },
    { name: "Docker", level: 85 },
    { name: "Terraform", level: 75 },
  ];

  const databaseSkills = [
    { name: "MS SQL Server", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "Amazon Aurora", level: 80 },
    { name: "Redis", level: 85 },
    { name: "Oracle", level: 75 },
    { name: "DynamoDB", level: 70 },
  ];

  const otherSkills = [
    { name: "GitHub Actions / CI/CD", level: 85 },
    { name: "Kafka", level: 80 },
    { name: "xUnit / Testing", level: 85 },
    { name: "New Relic / Monitoring", level: 75 },
    { name: "Agile / SCRUM", level: 90 },
    { name: "Kubernetes", level: 70 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory title="Languages" skills={languagesSkills} />
          <SkillCategory title="Backend Development" skills={backendSkills} />
          <SkillCategory title="Frontend Development" skills={frontendSkills} />
          <SkillCategory title="Cloud Solutions" skills={cloudSkills} />
          <SkillCategory title="Databases" skills={databaseSkills} />
          <SkillCategory title="Other Skills" skills={otherSkills} />
        </div>
      </div>
    </section>
  );
};

interface Skill {
  name: string;
  level: number;
}

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: Skill[];
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-6 text-center">{title}</h3>
      <div className="space-y-5">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
