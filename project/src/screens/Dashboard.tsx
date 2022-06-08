import { Route, Routes } from "react-router-dom";

import { Sidebar } from "../components/Sidebar";
import { Main } from "../components/Main";

// routes
import { routes } from "../routes/routes";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <Main>
        {/* routes */}
        <Routes>
          {routes.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
        </Routes>
      </Main>
    </div>
  );
};
