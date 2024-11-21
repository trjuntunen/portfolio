// src/components/Header.tsx
export default function Header() {
    return (
      <header id="header" className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-8">
        <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-orange-400">
          <img src="/profile.jpg" alt="Your Profile Picture" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800">Your Name</h1>
        <p className="text-lg text-gray-600 mt-4">
          Passionate Full-Stack Developer Creating Innovative Web Solutions
        </p>
      </header>
    );
  }
  