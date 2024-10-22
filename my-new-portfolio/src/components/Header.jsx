import Navigation from './Navigation';

function Header() {
  return (
    <header 
      className="text-white text-center py-8 shadow-md"
      style={{ backgroundColor: '#2d2d2d' }}
    >
      <h1 
        className="text-4xl font-bold mb-2 transition-transform transform hover:scale-105 duration-300"
      > 
        
        Adam Todorovic
      </h1>
      <p className="text-2xl font-light">
        Web Developer & Collaborator
      </p>
      <Navigation />
    </header>
  );
}

export default Header;
