import Navigation from './Navigation';

// Header component: Represents the top navigation header for the website
function Header() {
  return (
    <header 
      className="text-white text-center py-8 shadow-md"
      style={{ backgroundColor: '#2d2d2d' }} // Dark grey background color for the header
    >
      {/* Title section with a hover effect */}
      <h1 
        className="text-4xl font-bold mb-2 transition-transform transform hover:scale-105 duration-300"
      > 
        Adam Todorovic
      </h1>
      
      {/* Subtitle providing a brief role description */}
      <p className="text-2xl font-light">
        Web Developer & Collaborator
      </p>

      {/* Navigation component for the header links */}
      <Navigation />
    </header>
  );
}

export default Header;
