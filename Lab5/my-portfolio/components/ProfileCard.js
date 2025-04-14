const ProfileCard = () => (
    <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 dark:bg-gray-800 dark:text-white animate-fade-in">
      <h1 className="text-4xl font-bold mb-4">Daneilo McDonald</h1>
      <p className="text-lg mb-6">
        Hi 👋 I'm Daneilo, a computer programming student at Humber College.
        I’m passionate about front-end development, mobile apps, and building useful projects with modern tech.
      </p>
      <div className="space-y-2">
        <div>
          <strong>Email:</strong>{" "}
          <a href="mailto:daneilo@email.com" className="text-blue-600 underline">
            daneilo@email.com
          </a>
        </div>
        <div>
          <strong>GitHub:</strong>{" "}
          <a href="https://github.com/DaneiloMcDonald" target="_blank" className="text-blue-600 underline">
            github.com/DaneiloMcDonald
          </a>
        </div>
        <div>
          <strong>LinkedIn:</strong>{" "}
          <a href="https://linkedin.com/in/daneilo" target="_blank" className="text-blue-600 underline">
            linkedin.com/in/daneilo
          </a>
        </div>
      </div>
    </div>
  );
  
  export default ProfileCard;
  