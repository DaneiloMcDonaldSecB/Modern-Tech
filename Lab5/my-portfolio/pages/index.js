import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daneilo McDonald | Developer Portfolio</title>
      </Head>

      {/* HERO SECTION */}
      <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Daneilo McDonald</h1>
        <p className="text-xl md:text-2xl max-w-xl">
          Aspiring Full-Stack Developer • Passionate about building creative and useful things on the web.
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-6 bg-white text-gray-800 text-center">
        <h2 className="text-4xl font-semibold mb-6">About Me</h2>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed">
          I'm a Computer Programming student at Humber College who enjoys building clean, functional, and aesthetic digital experiences.
          My interests include front-end development, cross-platform apps, and modern UI/UX. I’m constantly learning and growing as a developer.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-20 px-6 bg-gray-100 text-gray-800">
        <h2 className="text-4xl font-semibold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Project 1: Recipe Explorer */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-2">Recipe Explorer</h3>
            <p className="text-gray-600 mb-3">
              A cross-platform mobile app built with React Native and Firebase to search, save, and explore recipes. Includes login, favorites sync, and dark mode.
            </p>
            <a
              href="https://github.com/DaneiloMcDonaldSecB/RecipeExplorer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </div>

          {/* Project 2: React Portfolio */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-2">React Portfolio Website</h3>
            <p className="text-gray-600 mb-3">
              A clean and responsive portfolio website built using React and CSS to showcase my bio, projects, and contact information.
            </p>
            <a
              href="https://github.com/DaneiloMcDonaldSecB/Modern-Tech/tree/main/Portfolio%20Assignment/react-portfolio-main"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-8 text-center">
        <p className="mb-2">© 2025 Daneilo McDonald</p>
        <div className="space-x-4">
          <a href="https://github.com/DaneiloMcDonaldSecB" target="_blank" className="hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/daneilo" target="_blank" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  );
}
