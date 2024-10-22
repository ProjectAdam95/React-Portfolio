import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer 
      className="text-white py-6 text-center mt-auto"
      style={{ backgroundColor: '#2d2d2d' }}
    >
      <p className="text-2xl font-semibold">
       Portfolio by Adam Todorovic
      </p>
      <p className="mt-4 text-lg flex justify-center space-x-6">
        <a
          href="https://github.com/ProjectAdam95"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-gray-300 transition duration-300"
        >
          <FontAwesomeIcon icon={faGithub} className="text-5xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/adam-todorovic-82625732a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-gray-300 transition duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-5xl" />
        </a>
        <a
          href="https://x.com/adammt951"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-gray-300 transition duration-300"
        >
          <FontAwesomeIcon icon={faTwitter} className="text-5xl" />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
