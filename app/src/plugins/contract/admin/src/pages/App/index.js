/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from "react";
import { Switch, Route } from "react-router-dom";
import { NotFound } from "@strapi/helper-plugin";
import pluginId from "../../pluginId";
import HomePage from "../HomePage";
import InsertPage from "../InsertPage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
        <Route
          path={`/plugins/${pluginId}/insert`}
          component={InsertPage}
          exact
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
