import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/common/header';

const Register = React.lazy(() => import('./components/pages/user/register'));
const Login = React.lazy(() => import('./components/pages/user/login'));
const Search = React.lazy(() => import('./components/pages/search'));
const MovieDetails = React.lazy(() => import('./components/pages/movieDetails'));

const Navigation = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Header />
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/search/:movieTitle?" component={Search} />
          <Route path="/movie/:movieId?" component={MovieDetails} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Navigation;
