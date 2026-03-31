export default function Skills() {
  const skills = [
    "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", 
    "React", "Redux", "Tailwind CSS", "Next.js", 
    "Git", "Node.js", "Jest", "Git/GitHub Flow"
  ];

  return (
    <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Yetenekler
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, idx) => (
            <span 
              key={idx} 
              className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
