export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8 text-center">
        {/* Contact Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-400 mb-4">
            Feel free to reach out if you'd like to collaborate or just say hi!
          </p>
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="mailto:theodore.juntunen@example.com"
                className="hover:text-orange-400"
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/theodore-juntunen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/trjuntunen"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
  
        {/* Copyright Section */}
        <div>
          <p>© 2024 Theodore Juntunen. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  