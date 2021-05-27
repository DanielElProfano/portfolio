import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense } from "react";
import routes from "./config/router/routes.js";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Spinner from "./components/Spinner";

const App = () => {
  return (
  <>
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Web site created using create-react-app"
      />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
   
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  
      <title>Daniel González</title>
  </head>
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
  </>
  );
};

export default App;
