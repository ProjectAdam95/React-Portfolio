// Import necessary components
import LayoutWrapper from '../components/LayoutWrapper';

function Resume() {
  // Array of proficiencies with name, image, and link for each skill
  const proficiencies = [
    {
      name: 'HTML',
      image: '/assets/images/HTML.png',
      link: 'https://en.wikipedia.org/wiki/HTML',
    },
    {
      name: 'CSS',
      image: '/assets/images/CSS.png',
      link: 'https://en.wikipedia.org/wiki/CSS',
    },
    {
      name: 'JavaScript',
      image: '/assets/images/JS.png',
      link: 'https://en.wikipedia.org/wiki/JavaScript',
    },
    {
      name: 'React',
      image: '/assets/images/React.png',
      link: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)',
    },
    {
      name: 'Node.js',
      image: '/assets/images/Node.png',
      link: 'https://en.wikipedia.org/wiki/Node.js',
    },
    {
      name: 'Python',
      image: '/assets/images/Python.png',
      link: 'https://en.wikipedia.org/wiki/Python_(programming_language)',
    },
  ];

  return (
    <LayoutWrapper>
      <section className="text-center mx-auto space-y-10 mt-12 py-12 px-6 bg-gray-50 bg-opacity-90 shadow-2xl border border-gray-300 rounded-3xl max-w-2xl">
        {/* Resume Header */}
        <h2 className="text-5xl font-extrabold mb-6 text-gray-900 drop-shadow-lg tracking-tight">
          Resume
        </h2>

        {/* Download Resume Button */}
        <a
          href="/resume101.pdf"
          download
          className="bg-gray-800 text-white px-8 py-4 rounded-full shadow-lg hover:bg-gray-700 transition-transform duration-300 transform hover:scale-105 mb-8"
        >
          Download My Resume
        </a>

        {/* Proficiencies Header */}
        <h3 className="text-3xl font-semibold mb-6 text-gray-800">Proficiencies</h3>

        {/* Display proficiencies in a grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {proficiencies.map((proficiency) => (
            <a
              key={proficiency.name}
              href={proficiency.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              {/* Proficiency Image */}
              <img
                src={proficiency.image}
                alt={`${proficiency.name} icon`}
                className="w-16 h-16 mb-4 transition-transform transform hover:rotate-12"
              />
              {/* Proficiency Name */}
              <span className="text-lg text-gray-700 font-semibold">{proficiency.name}</span>
            </a>
          ))}
        </div>
      </section>
    </LayoutWrapper>
  );
}

export default Resume;
