import "./style/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Dashboard } from "./screens/Dashboard";

// set the router
export function App() {
  return (
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  );
}
