import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">BHRYAN PERPÉTUO</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              A highly skilled Full Stack Developer with over 7 years of
              experience designing and developing scalable enterprise
              applications.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/bhryanh" aria-label="GitHub">
                <GithubIcon />
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/bhryan"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </SocialLink>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#skills">Skills</FooterLink>
              <FooterLink href="#projects">Projects</FooterLink>
              <FooterLink href="#experience">Experience</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href="mailto:bhryan.perpetuo@gmail.com"
                  className="hover:text-gray-900 dark:hover:text-white transition"
                >
                  bhryan.perpetuo@gmail.com
                </a>
              </li>
              <li>+55 (38) 9 9864-4574</li>
              <li>Belo Horizonte, Minas Gerais, Brazil</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>
            © {currentYear} Bhryan Henderson Lopes Perpétuo. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
      >
        {children}
      </Link>
    </li>
  );
};

const SocialLink = ({
  href,
  "aria-label": ariaLabel,
  children,
}: {
  href: string;
  "aria-label": string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
    >
      {children}
    </a>
  );
};

// Social Icons
const GithubIcon = () => (
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
);

const LinkedInIcon = () => (
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
);

export default Footer;
