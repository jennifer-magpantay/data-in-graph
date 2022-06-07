// route screens
import { Overview } from "../screens/Overview";
import { StatsByAge } from "../screens/StatsByAge";
import { StatsByGender } from "../screens/StatsByGender";
import { StatsByIndustry } from "../screens/StatsByIndustry";

export const routes = [
  { id: 1, title: "Overview", path: "/", element: <Overview /> },
  {
    id: 2,
    title: "Stats by age",
    path: "/stats-by-age",
    element: <StatsByAge />,
  },
  {
    id: 3,
    title: "Stats by gender",
    path: "/stats-by-gender",
    element: <StatsByGender />,
  },
  {
    id: 4,
    title: "Stats by industry",
    path: "/stats-by-industry",
    element: <StatsByIndustry />,
  },
];
