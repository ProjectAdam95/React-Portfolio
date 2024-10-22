import LayoutWrapper from '../components/LayoutWrapper';

function Portfolio() {
  const projects = [
    {
      title: 'Weather API',
      description: 'This is a Weather Dashboard application where the user is given a landing page with form inputs. The user is asked to enter a city of choice so they can view a 5-day forecast. The user is presented with the weather for the following 5 days.',
      image: '/src/assets/images/Image1.png',
      deployedLink: 'https://projectadam95.github.io/Weather-Dashboard/',
      githubLink: 'https://github.com/ProjectAdam95/Weather-Dashboard'
    },
    {
      title: 'Employee Tracker',
      description: 'The Employee Tracker application allows users to manage a company employee database using a command-line interface. (The "View App" link is a preview gif of the functionality of the app as it runs in the terminal.)',
      image: '/src/assets/images/Image2.png',
      deployedLink: 'https://jumpshare.com/v/qk9pPIHoA8N78npiF2GS',
      githubLink: 'https://github.com/ProjectAdam95/Employee-Tracker'
    },
    {
      title: 'Network API',
      description: 'A social network web application where users can share their thoughts, react to friends thoughts, and create a friend list. (The "View App" link is a preview gif of the functionality of the app as it is tested through Insomnia.)',
      image: '/src/assets/images/Image3.png',
      deployedLink: 'https://jumpshare.com/v/o4dIqstxUmmXHiZxREcA?b=cq1WtVSaRLReVEw3ElPR',
      githubLink: 'https://github.com/ProjectAdam95/Network-API'
    },
    {
      title: 'Note Taker 101',
      description: 'This is a Note Taker application that allows users to create, save, and delete notes. The user is presented with a home page where they click "Get Started". The next page allows the user to create new notes and have a list of saved notes that can be viewed and deleted as needed.',
      image: '/src/assets/images/Image4.png',
      deployedLink: 'https://note-taker101.onrender.com',
      githubLink: 'https://github.com/ProjectAdam95/Note-Taker101'
    },
    {
      title: 'Task Board',
      description: 'This is a task board application where the user is able to manage project tasks. The user is prompted to fill out a form when "Add Task" is clicked with Title, Description and Due Date. This will allow the user to view their projects on the board which are in progress, overdue or due in the future.',
      image: '/src/assets/images/TaskBoard.png',
      deployedLink: 'https://projectadam95.github.io/Task-Board/',
      githubLink: 'https://github.com/ProjectAdam95/Task-Board'
    },
    {
      title: 'SVG Logo Maker',
      description: 'This application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.(The "View App" link is a preview gif of the functionality of the app as it is tested through the terminal.)',
      image: '/src/assets/images/Image6.png',
      deployedLink: 'https://jumpshare.com/v/9noxHjkfe4YvLuUuZjfM',
      githubLink: 'https://github.com/ProjectAdam95/SVG-Logo-Maker'
    },
  ];

  return (
    <LayoutWrapper>
      <div className="text-center mb-10">
        <h2 className="text-5xl font-extrabold mb-6 text-gray-900 drop-shadow-lg tracking-tight">
          My Projects
        </h2>
        <p className="text-lg text-gray-700 font-light tracking-wide">
          Here are some of the recent projects I’ve worked on.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-gray-50 bg-opacity-90 shadow-xl border border-gray-300 rounded-3xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-40 object-cover rounded-md mb-4 shadow-md hover:shadow-lg transition duration-300"
            />
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 drop-shadow-sm">
              {project.title}
            </h3>
            <p className="text-gray-700 font-light tracking-wide mb-4">
              {project.description}
            </p>
            <div className="flex justify-between items-center">
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xl font-semibold transition hover:text-blue-800">
                View App
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xl font-semibold transition hover:text-blue-800">
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </LayoutWrapper>
  );
}

export default Portfolio;
