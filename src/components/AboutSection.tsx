const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My journey and what motivates me
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            {/* Replace with a photo of yourself or work environment */}
            <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
              <div className="text-gray-400 dark:text-gray-500 text-lg">
                Your Workspace Image
              </div>
              {/* Uncomment when you have an image
              <Image
                src="/about-image.jpg"
                alt="My workspace"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
              */}
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm a passionate Full Stack Developer with over 7 years of
              experience designing and developing scalable enterprise
              applications. I'm proficient in .NET, C#, ASP.NET Core, Angular,
              React, TypeScript, and API design, with expertise in both backend
              and frontend development.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              I have extensive experience in architecting cloud-based
              microservices on Azure and AWS, optimizing system performance, and
              building data-driven REST APIs. I'm skilled in modern frontend
              frameworks, Azure AD integration, and CQRS patterns. I'm
              passionate about delivering high-quality software, improving
              business processes, and collaborating in agile, diverse teams to
              drive innovation.
            </p>

            <div className="mt-8">
              <h3 className="font-semibold text-xl mb-4">
                3 Great Reasons to Work With Me
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-2">
                    1
                  </span>
                  <div>
                    <span className="font-medium">Career Growth:</span> I'm
                    always looking for opportunities to advance and take on
                    roles that align with long-term career goals.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-2">
                    2
                  </span>
                  <div>
                    <span className="font-medium">Learning Opportunities:</span>{" "}
                    I thrive when working with advanced technologies and
                    collaborative teams.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-2">
                    3
                  </span>
                  <div>
                    <span className="font-medium">Challenging Projects:</span>{" "}
                    I'm motivated by complex and impactful projects that are
                    professionally rewarding and personally fulfilling.
                  </div>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>
                    Bachelor in Control and Automation Engineering, Universidade
                    Federal de Minas Gerais (2015-2020)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Location</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Belo Horizonte, Minas Gerais, Brazil</li>
                  <li>Available for remote work worldwide</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
