const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Here's a little bit about myself and my journey
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
              I'm a passionate Full Stack Developer with a background in
              Computer Science. With over 5 years of experience in web
              development, I've worked on a wide range of projects from small
              business websites to complex enterprise applications.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              My approach to development focuses on creating clean, maintainable
              code that delivers exceptional user experiences. I'm constantly
              learning new technologies and methodologies to stay at the
              forefront of the industry.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>BS in Computer Science, University Name</li>
                  <li>Web Development Certification</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Interests</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Open Source Contribution</li>
                  <li>UI/UX Design</li>
                  <li>Artificial Intelligence</li>
                  <li>Mobile Development</li>
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
