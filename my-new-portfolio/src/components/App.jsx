import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AppRoutes from '../Routes';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
