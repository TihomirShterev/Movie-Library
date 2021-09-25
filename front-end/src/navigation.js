import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Navigation = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Navigation;
