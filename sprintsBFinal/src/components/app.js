import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddMonsterPage from "../pages/add-monster-page";
import EditMonsterPage from "../pages/edit-monster-page";
import MonsterPage from "../pages/monster-page";
import NotFoundPage from "../pages/not-found-page";
import Nav from "./nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <MonsterPage />
        </Route>

        <Route path="/add">
          <AddMonsterPage />
        </Route>

        <Route path="/edit/:id">
          <EditMonsterPage />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
