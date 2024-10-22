import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="mt-6">
      <ul className="flex justify-center space-x-10">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? 'text-2xl font-bold text-white border-b-2 border-gray-500'
                : 'text-2xl text-white hover:text-gray-300 hover:underline transition duration-300'
            }
          >
            About Me
          </NavLink>
        </li>
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
