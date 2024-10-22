import PropTypes from 'prop-types';

function Project({ title, description, image, deployedLink, githubLink }) {
  return (
    <section className="snippet">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={`${title} screenshot`} />
      <p>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a> | 
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </p>
    </section>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  deployedLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default Project;
