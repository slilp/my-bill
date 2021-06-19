import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
import "./style/main.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./views/Footer";
import Header from "./views/Header";

const Dashboard = lazy(() => import("./views/Dashboard"));

function App() {
  return (
    <Suspense fallback={<h1 className="text-center">Loading...</h1>}>
      <Header></Header>
      <Switch>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Redirect to="/dashboard"></Redirect>
      </Switch>
      <Footer></Footer>
    </Suspense>
  );
}

export default App;
