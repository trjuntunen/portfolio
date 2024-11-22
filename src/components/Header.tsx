export default function Header() {
    return (
      <header
        id="header"
        className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-8"
      >
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-400 flex items-center justify-center mb-6">
          <img
            src="/assets/linkedin_profile_pic.jpeg"
            alt="Your Profile Picture"
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Name */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Theodore Juntunen
        </h1>
  
        {/* Bio */}
        <p className="text-lg text-gray-600">
          Experienced software engineer specializing in the development of <br />
          full-stack web applications, APIs, and large-scale software systems.
        </p>
      </header>
    );
  }
  