import PropTypes from 'prop-types'; // Import PropTypes to enforce type checking for props

function Project({ title, description, image, deployedLink, githubLink }) {
  return (
    <section className="snippet">
      {/* Project title */}
      <h2>{title}</h2>
      
      {/* Project description */}
      <p>{description}</p>
      
      {/* Project image */}
      <img src={image} alt={`${title} screenshot`} />
      
      {/* Links to the deployed application and GitHub repository */}
      <p>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a> | 
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </p>
    </section>
  );
}

// Define PropTypes for the Project component to ensure the required props are provided with the correct types
Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Project;
