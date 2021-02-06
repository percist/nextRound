import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupForm";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";
import BuddiesSidebar from "./components/BuddiesSidebar"
import SplashPage from "./components/SplashPage/SplashPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/" exact>
            <SplashPage />
          </Route>
          <Route path="/users/:id" exact >
            <HomePage />
          </Route>
          <Route path="/users/:id/buddies" exact >
            <BuddiesSidebar />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
