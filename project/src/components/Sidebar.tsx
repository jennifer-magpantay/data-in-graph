import { NavLink } from "react-router-dom";

// assets
import Logo from "../assets/logo.svg";

// routes
import { routes } from "../routes/routes";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* logo */}
      <div className="sidebar--header">
        <img src={Logo} alt="Logpipsum" />
      </div>

      <div className="sidebar--body">
        {/* menu list */}
        <nav>
          <ul className="sidebar--list">
            {routes.map((item) => (
              <li key={item.id}>
                {/* to use isActive properly, add the styles to the NavLink component */}
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "navlink--active" : "navlink"
                  }
                  style={({ isActive }) => ({
                    color: isActive ? "#ffffff" : undefined,
                  })}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

// reference: https://aastudio.fr/Sidebar-and-Aside-are-different.html
