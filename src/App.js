import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import Spinner from './components/Spinner/Spinner';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

import './App.css';

const Box = lazy(() => import('./components/Box/Box'));

function App() {
  return (
    <div className="App">
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Box} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;
