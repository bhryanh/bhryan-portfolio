const SkillsSection = () => {
  const frontendSkills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 80 },
    { name: 'Express', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Django', level: 65 },
    { name: 'MongoDB', level: 75 },
    { name: 'PostgreSQL', level: 70 },
  ];

  const otherSkills = [
    { name: 'Git & GitHub', level: 85 },
    { name: 'Docker', level: 65 },
    { name: 'AWS', level: 60 },
    { name: 'CI/CD', level: 70 },
    { name: 'Agile/Scrum', level: 80 },
    { name: 'UI/UX Design', level: 75 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Here are the technologies and tools I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory title="Frontend Development" skills={frontendSkills} />
          <SkillCategory title="Backend Development" skills={backendSkills} />
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

const SkillCategory = ({ title, skills }: { title: string; skills: Skill[] }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-6 text-center">{title}</h3>
      <div className="space-y-5">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
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