import LayoutWrapper from '../components/LayoutWrapper';

function About() {
  return (
    <LayoutWrapper>
      <div className="text-center mx-auto space-y-10 mt-12 py-12 px-6 bg-gray-50 bg-opacity-90 shadow-2xl border border-gray-300 rounded-3xl max-w-2xl">
        {}
        <a 
          href="https://starwars.fandom.com/wiki/Stormtrooper" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src="/src/assets/images/StormTrooper.jpg" 
            alt="Adam Todorovic Avatar" 
            className="w-48 h-48 rounded-full shadow-xl mx-auto transition-transform duration-300 transform hover:scale-110 hover:rotate-3"
          />
        </a>

        {}
        <div>
          <h2 className="text-5xl font-extrabold mb-4 text-gray-900 drop-shadow-lg tracking-tight">
            Adam Todorovic
          </h2>
          <h3 className="text-2xl text-gray-600 mb-4 font-light tracking-wide">
            Web Developer & Collaborator
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed tracking-wide font-light">
            I'm a passionate web developer focused on building responsive and intuitive applications using modern technologies like React and Node.js. I aim to create efficient and user-friendly solutions while continuously improving my skills.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4 tracking-wide font-light">
            Whether I'm working solo or with a team, I take pride in writing clean, scalable code and delivering smooth user experiences. I'm always driven to achieve outstanding results that meet the goals of every project I work on.
          </p>
        </div>

        {}
        <div className="pt-6">
          <a 
            href="/contact" 
            className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition duration-300 hover:underline"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </LayoutWrapper>
  );
}

export default About;
