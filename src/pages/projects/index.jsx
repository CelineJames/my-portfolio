import { projects } from "../home/projects/projects";

export default function Projects() {
  return (
    <div className="w-full bg-primary dark:bg-black py-24 px-4 md:px-12">
      <h1 className="text-2xl md:text-3xl font-bold text-dark dark:text-primary mb-10 -z-50 md:max-w-3xl">
        Here are some of the projects I’ve worked on. Private projects still have public GitHub code access.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="border-t border-black/20 hover:bg-secondary dark:bg-secondary dark:hover:bg-primary  rounded-lg shadow-xl overflow-hidden p-4 flex flex-col justify-between group"
          >
            <img
              src={project.image}
              alt={project.heading}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2 text-dark dark:text-white  group-hover:text-primary dark:group-hover:text-dark">
              {project.Heading}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 group-hover:text-primary dark:group-hover:text-dark">
              {project.text}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tools.map((tool, toolIdx) => (
                <span
                  key={toolIdx}
                  className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex justify-between mt-auto gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                GitHub
              </a>
              <a
                href={project.livesite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-600 hover:underline"
              >
                Live Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
