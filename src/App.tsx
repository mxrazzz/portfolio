import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Briefcase,
  GraduationCap,
} from "lucide-react";

function App() {
  const projects = [
    {
      title: "Full Stack MERN App",
      description:
        "A full stack MERN e-learning platform with user authentication, course management, and quiz functionality.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600",
      link: "https://ui.earth.com",
      github: "#",
    },
    {
      title: "Humanitarian Data Trends & Analysis",
      description:
        "Transformed conflict data into interactive dashboards, improving workflow efficiency and driving stakeholder engagement.",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1600",
      link: "#",
      github: "#",
    },
    {
      title: "Tournament Bracket Organiser",
      description:
        "A web-based tool for managing tournament brackets, allowing users to set up matchups, track progress, and store data securely with Firebase.",
      image:
        "https://png.pngtree.com/thumb_back/fw800/background/20231004/pngtree-neon-trophy-icon-a-glowing-symbol-of-victory-in-3d-rendering-image_13565564.png",
      link: "https://github.com/mxrazzz/tourn-bracket-organisor",
      github: "https://github.com/mxrazzz/tourn-bracket-organisor",
    },
    {
      title: "Java 2D Platformer",
      description:
        "A level-based action game built in Java with smooth animations, enemy AI, and real-time physics interactions.",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600",
      link: "https://github.com/mxrazzz/Java2D-Platformer",
      github: "https://github.com/mxrazzz/Java2D-Platformer",
    },
  ];

  const techStack = [
    {
      name: "SQL",
      image: "https://www.svgrepo.com/show/331761/sql-database-sql-azure.svg",
    },
    { name: "Python", image: "https://www.svgrepo.com/show/452091/python.svg" },
    { name: "Excel", image: "https://www.svgrepo.com/show/373589/excel.svg" },
    {
      name: "Tableau",
      image: "https://www.svgrepo.com/show/354428/tableau-icon.svg",
    },
    {
      name: "Power BI",
      image: "https://www.svgrepo.com/show/306593/powerbi.svg",
    },
    {
      name: "Looker",
      image: "https://www.svgrepo.com/show/354012/looker-icon.svg",
    },
    {
      name: "GCP",
      image: "https://www.svgrepo.com/show/353805/google-cloud.svg",
    },
    { name: "Git", image: "https://www.svgrepo.com/show/452210/git.svg" },
    { name: "Linux", image: "https://www.svgrepo.com/show/448236/linux.svg" },
    {
      name: "Java",
      image: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
    },
    {
      name: "JavaScript",
      image: "https://www.svgrepo.com/show/353925/javascript.svg",
    },
    { name: "React", image: "https://www.svgrepo.com/show/452092/react.svg" },
  ];

  // Local resume file path
  const resumeUrl = "/resume.pdf";

  // Alternative: Load resume from GitHub
  // To use this instead, comment out the above resumeUrl and uncomment the following line:
  // const resumeUrl = "https://raw.githubusercontent.com/mxrazzz/portfolio/main/resume.pdf";
  // Make sure to upload your resume to your GitHub repository first!

  const [emailCopied, setEmailCopied] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm Meraz Hossain
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Computer Science grad | Data enthusiast | Problem solver with a
            keyboard.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/mxrazzz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/mxrazzz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:mxrazzz@gmail.com"
              className="hover:text-blue-200 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">Tech Stack</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg shadow-md overflow-hidden mb-2 flex items-center justify-center bg-white p-2">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm text-gray-600">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Experience Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                <Briefcase className="w-8 h-8 mr-3" />
                Experience
              </h2>
              <div className="space-y-8">
                {/* Business Intelligence Intern */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Awin Global
                  </h3>
                  <p className="text-gray-600">
                    Business Intelligence Internship
                  </p>
                  <ul className="mt-2 text-gray-700 list-disc list-inside">
                    <li>
                      Led a project to optimize 15 legacy SQL reports, reducing
                      delivery time by 60% while improving data integrity.
                    </li>
                    <li>
                      Developed 20+ interactive Tableau/Power BI dashboards,
                      enabling real-time monitoring of KPIs and product
                      performance.
                    </li>
                    <li>
                      Automated 40+ SQL reports with Databricks, transforming
                      raw data into actionable insights for stakeholders.
                    </li>
                    <li>
                      Resolved 100+ Jira tickets and documented 200+ SQL
                      queries, enhancing system reliability and workflow
                      efficiency.
                    </li>
                    <li>
                      Analyzed marketing performance data, providing strategic
                      recommendations that optimized campaign ROI.
                    </li>
                    <li>
                      Partnered cross-functionally in Agile environment (Azure
                      DevOps) to build analytics solutions for clients like Nike
                      & Samsung.
                    </li>
                  </ul>
                  <div className="flex flex-wrap justify-center gap-4 mt-4">
                    <img
                      src="https://www.svgrepo.com/show/452091/python.svg"
                      alt="Python"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/331761/sql-database-sql-azure.svg"
                      alt="SQL"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/354428/tableau-icon.svg"
                      alt="Tableau"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/306593/powerbi.svg"
                      alt="Power BI"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/373589/excel.svg"
                      alt="Excel"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/448240/microsoft-teams.svg"
                      alt="MS Teams"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/303401/microsoft-azure-3-logo.svg"
                      alt="Microsoft Azure"
                      className="w-8 h-8"
                    />
                  </div>
                </div>

                {/* Python Developer */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Money4You
                  </h3>
                  <p className="text-gray-600">Python Developer</p>
                  <ul className="mt-2 text-gray-700 list-disc list-inside">
                    <li>
                      Automated data extraction from 40+ charity websites using
                      Python/BeautifulSoup, reducing manual effort by 80%.
                    </li>
                    <li>
                      Boosted script reliability by 30% via error-handling
                      protocols and modular code design.
                    </li>
                    <li>
                      Collaborated in a 3-developer team, managing Git workflows
                      and enforcing code quality standards.
                    </li>
                  </ul>
                  <div className="flex flex-wrap justify-center gap-4 mt-4">
                    <img
                      src="https://www.svgrepo.com/show/452091/python.svg"
                      alt="Python"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/452210/git.svg"
                      alt="Git"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/448240/microsoft-teams.svg"
                      alt="MS Teams"
                      className="w-8 h-8"
                    />
                  </div>
                </div>

                {/* Private Tutor */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Freelance
                  </h3>
                  <p className="text-gray-600">Private Tutor</p>
                  <ul className="mt-2 text-gray-700 list-disc list-inside">
                    <li>
                      Mentored 10+ STEM students to a 90% success rate by
                      simplifying complex concepts through clear communication.
                    </li>
                    <li>
                      Built trust with students/parents through active listening
                      and progress transparency, ensuring long-term engagement.
                    </li>
                    <li>
                      Improved student performance by diagnosing learning gaps
                      and adapting teaching methods in real-time.
                    </li>
                  </ul>
                  <div className="flex flex-wrap justify-center gap-4 mt-4">
                    <img
                      src="https://www.svgrepo.com/show/373589/excel.svg"
                      alt="Excel"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/448240/microsoft-teams.svg"
                      alt="MS Teams"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="border-l-2 border-gray-300 pl-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                <GraduationCap className="w-8 h-8 mr-3" />
                Education
              </h2>
              <div className="space-y-8">
                {/* Le Wagon */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Le Wagon
                  </h3>
                  <p className="text-gray-600">Data Analytics Bootcamp</p>
                  <ul className="mt-2 text-gray-700 list-disc list-inside">
                    <li>
                      Built scalable data pipelines (dbt, BigQuery) to
                      ingest/transform 10+ datasets, reducing cleaning time by
                      50%.
                    </li>
                    <li>
                      Developed predictive models (scikit-learn, Prophet) to
                      forecast trends (e.g., churn, revenue) with 85% accuracy
                      in Python.
                    </li>
                    <li>
                      Designed 15+ interactive dashboards (Power BI, Looker
                      Studio) for marketing/sales teams, enabling real-time KPI
                      tracking.
                    </li>
                    <li>
                      Automated data collection via APIs (Zapier, Google Tag
                      Manager) and SQL queries, improving reporting efficiency
                      by 40%.
                    </li>
                  </ul>
                  <div className="flex flex-wrap justify-center gap-4 mt-4">
                    <img
                      src="https://www.svgrepo.com/show/331761/sql-database-sql-azure.svg"
                      alt="SQL"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/452091/python.svg"
                      alt="Python"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/306593/powerbi.svg"
                      alt="Power BI"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/354012/looker-icon.svg"
                      alt="Looker"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/375551/bigquery.svg"
                      alt="BigQuery"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/330270/dbt.svg"
                      alt="dbt"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.vectorlogo.zone/logos/fivetran/fivetran-icon.svg"
                      alt="Fivetran"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/353380/airflow.svg"
                      alt="Airflow"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/353827/google-tag-manager.svg"
                      alt="Google Tag Manager"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/354595/zapier.svg"
                      alt="Zapier"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg"
                      alt="Google Colab"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/473742/pandas.svg"
                      alt="Pandas"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://icon.icepanel.io/Technology/svg/scikit-learn.svg"
                      alt="Scikit Learn"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.vectorlogo.zone/logos/plotly/plotly-icon.svg"
                      alt="Plotly"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg"
                      alt="Google Sheets"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/452210/git.svg"
                      alt="Git"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/353805/google-cloud.svg"
                      alt="Google Cloud Platform"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg"
                      alt="Google Analytics"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Bachelor's in Computer Science
                  </h3>
                  <p className="text-gray-600">City University of London</p>
                  <ul className="mt-2 text-gray-700 list-disc list-inside">
                    <li>
                      Focused on Data Structures, Cloud Computing, and Web
                      Development.
                    </li>
                    <li>Completed projects in Java, React, and Docker.</li>
                  </ul>
                  <div className="flex flex-wrap justify-center gap-4 mt-4">
                    <img
                      src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
                      alt="JavaScript"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                      alt="HTML5"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                      alt="CSS3"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.svgrepo.com/show/331761/sql-database-sql-azure.svg"
                      alt="SQL"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.vectorlogo.zone/logos/java/java-icon.svg"
                      alt="Java"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.vectorlogo.zone/logos/isocpp/isocpp-icon.svg"
                      alt="C++"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.vectorlogo.zone/logos/php/php-icon.svg"
                      alt="PHP"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.vectorlogo.zone/logos/linux/linux-icon.svg"
                      alt="Linux"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.vectorlogo.zone/logos/wireshark/wireshark-icon.svg"
                      alt="Wireshark"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
                      alt="Google Cloud Platform"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                      alt="MongoDB"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                      alt="Express.js"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                      alt="React"
                      className="w-8 h-8"
                    />
                    <img
                      src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                      alt="Node.js"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex space-x-4 mb-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      Code
                    </a>
                  </div>
                  {/* Tech Stack for Each Project */}
                  <div className="flex flex-wrap justify-center gap-4">
                    {project.title === "Full Stack MERN App" && (
                      <>
                        <img
                          src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                          alt="MongoDB"
                          className="w-8 h-8"
                        />
                        <img
                          src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                          alt="Express.js"
                          className="w-8 h-8"
                        />
                        <img
                          src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                          alt="React"
                          className="w-8 h-8"
                        />
                        <img
                          src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                          alt="Node.js"
                          className="w-8 h-8"
                        />
                      </>
                    )}
                    {project.title ===
                      "Humanitarian Data Trends & Analysis" && (
                      <>
                        <img
                          src="https://www.svgrepo.com/show/375551/bigquery.svg"
                          alt="BigQuery"
                          className="w-8 h-8"
                        />
                        <img
                          src="https://www.svgrepo.com/show/331761/sql-database-sql-azure.svg"
                          alt="SQL"
                          className="w-8 h-8"
                        />
                        <img
                          src="https://www.svgrepo.com/show/452091/python.svg"
                          alt="Python"
                          className="w-8 h-8"
                        />
                        <img
                          src="https://www.svgrepo.com/show/354012/looker-icon.svg"
                          alt="Looker"
                          className="w-8 h-8"
                        />
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg"
                          alt="Google Sheets"
                          className="w-8 h-8"
                        />
                      </>
                    )}
                    {project.title === "Tournament Bracket Organiser" && (
                      <>
                        <img
                          src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                          alt="HTML5"
                          className="w-8 h-8"
                        />
                        <img
                          src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                          alt="CSS3"
                          className="w-8 h-8"
                        />
                        <img
                          src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
                          alt="JavaScript"
                          className="w-8 h-8"
                        />
                        <img
                          src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                          alt="Firebase"
                          className="w-8 h-8"
                        />
                      </>
                    )}
                    {project.title === "Java 2D Platformer" && (
                      <>
                        <img
                          src="https://www.vectorlogo.zone/logos/java/java-icon.svg"
                          alt="Java"
                          className="w-8 h-8"
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Get in Touch
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg flex justify-center space-x-4">
            {/* Resume Button */}
            <button
              onClick={() => window.open(resumeUrl, "/resume.pdf")}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              <FileText className="w-5 h-5 mr-2" />
              Download Resume
            </button>

            {/* Copy Email Button */}
            <button
              onClick={() => {
                navigator.clipboard.writeText("mxrazzz@gmail.com");
                setEmailCopied(true);
                setTimeout(() => setEmailCopied(false), 2000); // Revert after 2 seconds
              }}
              className={`inline-flex items-center px-6 py-3 ${
                emailCopied ? "bg-green-600" : "bg-gray-600"
              } text-white rounded-lg hover:${
                emailCopied ? "bg-green-700" : "bg-gray-700"
              } transition-colors shadow-md`}
            >
              <Mail className="w-5 h-5 mr-2" />
              {emailCopied ? "Email Copied!" : "Copy Email"}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p>
            © {new Date().getFullYear()} Meraz Hossain. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
