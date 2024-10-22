// Import necessary modules and components
import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering to the DOM
import App from './components/App'; // Import main App component
import './styles.css'; // Import global CSS styles

// Get the root DOM element and render the App component inside it
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* StrictMode helps to identify potential problems in the application */}
    <App />
  </React.StrictMode>
);
