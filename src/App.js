import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import TransactionPage from "./pages/TransactionPage";
import OverviewPage from "./pages/OverviewPage";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/overview" component={OverviewPage} />
            <Route path="/" exact component={TransactionPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
