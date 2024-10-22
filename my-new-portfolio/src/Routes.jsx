// Import necessary modules and components
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route for navigation
import About from './pages/About'; // Import About page component
import Portfolio from './pages/Portfolio'; // Import Portfolio page component
import Contact from './pages/Contact'; // Import Contact page component
import Resume from './pages/Resume'; // Import Resume page component

function AppRoutes() {
  return (
    <Routes>
      {/* Route for the About page - Default route */}
      <Route path="/" element={<About />} />

      {/* Route for the Portfolio page */}
      <Route path="/portfolio" element={<Portfolio />} />

      {/* Route for the Contact page */}
      <Route path="/contact" element={<Contact />} />

      {/* Route for the Resume page */}
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default AppRoutes;
