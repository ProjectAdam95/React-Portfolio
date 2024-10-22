import { BrowserRouter as Router } from 'react-router-dom'; // Importing Router for route management
import Header from './Header'; // Importing Header component
import Footer from './Footer'; // Importing Footer component
import AppRoutes from '../Routes'; // Importing application routes

// App component: The root component that wraps all other components with routing and layout structure
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Flex container to create a full-height layout */}
        <Header /> {/* Header component */}
        
        <main className="flex-grow"> {/* Main content area that expands to fill available space */}
          <AppRoutes /> {/* Application routes that handle different pages */}
        </main>
        
        <Footer /> {/* Footer component */}
      </div>
    </Router>
  );
}

export default App;
