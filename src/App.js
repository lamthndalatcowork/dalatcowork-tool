import {renderRoutes} from "react-router-config";
import './App.css';
import routes from "./routes";

const App = () => {
    return (renderRoutes(routes));
};

export default App;
