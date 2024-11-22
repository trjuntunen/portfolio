export default function WorkSection() {
    const projects = [
      { title: "Project A", description: "A brief description of Project A.", link: "#" },
      { title: "Project B", description: "A brief description of Project B.", link: "#" },
      { title: "Project C", description: "A brief description of Project C.", link: "#" },
      { title: "Project D", description: "A brief description of Project D.", link: "#" },
      { title: "Project E", description: "A brief description of Project E.", link: "#" },
      { title: "Project F", description: "A brief description of Project F.", link: "#" },
    ];
  
    return (
      <section id="work" className="bg-white py-16 px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">My Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-lg">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a href={project.link} className="text-blue-500 mt-2 inline-block">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  