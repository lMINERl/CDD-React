import React from 'react';
import Navigation from '../components/Navigation';
import ListingPage from '../containers/ListingPage';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={ListingPage} />
          <Redirect from="/home" to="/" />
          <Route
            render={() => {
              return (
                <h1 className="text-center mt-5">
                  Page you request is
                  <br /> Not Found
                  <i className="fa fa-warning" />
                </h1>
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
