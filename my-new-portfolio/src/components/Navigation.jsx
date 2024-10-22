import { NavLink } from 'react-router-dom'; // Import NavLink for navigation links

function Navigation() {
  return (
    <nav className="mt-6">
      {/* Navigation links with flexbox for centering */}
      <ul className="flex justify-center space-x-10">
        {/* About Me link */}
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? 'text-2xl font-bold text-white border-b-2 border-gray-500' // Style applied if the link is active
                : 'text-2xl text-white hover:text-gray-300 hover:underline transition duration-300' // Style applied if the link is inactive
            }
          >
            About Me
          </NavLink>
        </li>

        {/* Portfolio link */}
        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive
                ? 'text-2xl font-bold text-white border-b-2 border-gray-500'
                : 'text-2xl text-white hover:text-gray-300 hover:underline transition duration-300'
            }
          >
            Portfolio
          </NavLink>
        </li>

        {/* Contact link */}
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'text-2xl font-bold text-white border-b-2 border-gray-500'
                : 'text-2xl text-white hover:text-gray-300 hover:underline transition duration-300'
            }
          >
            Contact
          </NavLink>
        </li>

        {/* Resume link */}
        <li>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive
                ? 'text-2xl font-bold text-white border-b-2 border-gray-500'
                : 'text-2xl text-white hover:text-gray-300 hover:underline transition duration-300'
            }
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
