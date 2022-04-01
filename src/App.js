import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate exact path="/home" Component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
