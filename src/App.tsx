import Menu from "./Components/Menu";
import MainRoutes from "./Components/MainRoutes";
import { configureValidation } from "./Components/Validation";

configureValidation();

function App() {
  return (
    <div>
      <Menu />
      <div className="container mx-8">
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;
