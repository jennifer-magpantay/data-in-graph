import { Route, Routes, Link } from "react-router-dom";

// assets
import Logo from "../assets/logo.svg";

// data
import { routes } from "../routes/routes";

interface Props {
  onClick: () => void;
}

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
            <Routes>
             {/* map routes */}
            </Routes>
          </ul>
        </nav>
      </div>
    </div>
  );
};

// reference: https://aastudio.fr/Sidebar-and-Aside-are-different.html
