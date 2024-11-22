export default function SkillsSection() {
    const skills = [
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🌐" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "TypeScript", icon: "🛠️" },
    ];
  
    const stats = [
      { label: "Projects Completed", value: "75+" },
      { label: "Client Satisfaction", value: "95%" },
    ];
  
    return (
      <section id="skills" className="bg-gray-50 py-16 px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Skills & Achievements</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-gray-700 mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center space-x-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-orange-500">{stat.value}</p>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  