import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
                Hi, I&apos;m{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Bhryan Perpétuo
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-400 font-medium">
                Senior Full Stack Developer
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
              Highly skilled Full Stack Developer with over 7 years of
              experience designing and developing scalable enterprise
              applications. Proficient in .NET, C#, ASP.NET Core, Angular,
              React, TypeScript, and API design.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
              >
                Contact Me
              </Link>
              <Link
                href="#projects"
                className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition"
              >
                View My Work
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/bhryanh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/bhryan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-800 shadow-xl">
              {/* Replace with your profile image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                BP
              </div>
              {/* Uncomment and update the src when you have a profile image
              <Image
                src="/profile.jpg"
                alt="Bhryan Perpétuo"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                style={{ objectFit: 'cover' }}
                priority
              />
              */}
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-300 dark:bg-blue-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-300 dark:bg-purple-900 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;
