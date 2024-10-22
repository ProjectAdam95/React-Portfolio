import PropTypes from 'prop-types'; 
import HeroSection from '../components/HeroSection'; 

function LayoutWrapper({ children }) {
  return (
    <div 
      className="flex flex-col items-center justify-start min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/src/assets/images/Office333.png')",
        backgroundAttachment: "fixed",
      }}
    >
      
      <HeroSection />

      
      <div className="container mx-auto mt-6">
        {children}
      </div>
    </div>
  );
}

LayoutWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWrapper;
