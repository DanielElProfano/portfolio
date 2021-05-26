import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense } from "react";
import routes from "./config/router/routes.js";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Spinner from "./components/Spinner";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner/>}>
        <div className="b-app">
          <NavBar />
          <Switch>
            {routes.map(({ path, component: Component }) => (
              <Route path={path} exact>
                <Component />
              </Route>
            ))}
          </Switch>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
};

export default App;
