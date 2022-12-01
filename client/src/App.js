import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import TopBar from "./components/TopBar";
import "./style/TopBar.css";
import "./App.css"
import "./style/MainContainer.css"
import MainContainer from "./components/MainContainer";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <TopBar />
          <MainContainer />
        </Route>
      </Switch>
</BrowserRouter>

  );
}

export default App;
