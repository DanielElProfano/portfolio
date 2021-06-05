import "./App.scss";
import {Switch, Route, withRouter, useLocation } from "react-router-dom";
import { Suspense } from "react";
import routes from "./config/router/routes.js";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import Spinner from "./components/Spinner";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const App = (props) => {

  // const [footer, setFooter] = useState(true)
  let location = useLocation();
console.log("location: " + location.pathname)
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
      <Suspense fallback={<Spinner/>}>
        <div className="b-app">
             <NavBar />
        
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              
              appear={true}
              classNames="fade"
              timeout={{ enter: 1000, exit: 1000 }}
              >
                <Switch>
                  {routes.map(({ path, component: Component }) => (
                    <Route path={path} exact>
                      <Component />
                    </Route>
                  ))}
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          {location.pathname !== "/" && <Footer />}
        </div>
      </Suspense>
  </>
  );
};

export default withRouter(App);
