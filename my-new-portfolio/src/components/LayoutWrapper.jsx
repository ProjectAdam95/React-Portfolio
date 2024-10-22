import PropTypes from 'prop-types'; // Import PropTypes for type checking
import HeroSection from '../components/HeroSection'; // Import HeroSection component

// LayoutWrapper component wraps all children components, providing a consistent layout with a hero section and background image
function LayoutWrapper({ children }) {
  return (
    <div 
      // Main container styling: flex column layout, centers children, and sets full screen height with a background image
      className="flex flex-col items-center justify-start min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/src/assets/images/Office333.png')", // Background image for the entire layout
        backgroundAttachment: "fixed", // Keeps the background image fixed during scrolling
      }}
    >
      {/* Hero section at the top of the page */}
      <HeroSection />

      {/* Main content container for children elements */}
      <div className="container mx-auto mt-6">
        {children}
      </div>
    </div>
  );
}

// Type checking for props
LayoutWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWrapper;
