import { Route, Routes } from "react-router-dom";
import routes from "../route.config";

const MainRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
