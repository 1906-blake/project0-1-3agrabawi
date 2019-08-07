import React from 'react';
import './App.scss';



import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/not-found/not-found.component';
import { NavComponent } from './components/app-nav/app-nav.component';
import { Home } from './components/home/home.component';

import { TicTacToe } from './components/tic-tac/tic-tac.component';


import { SignIn } from './components/sign-in/sign-in.component';
import reimbursement from './components/reimbursements/reim.component';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavComponent />
        {/* The switch will only render the first route to match */}
        <Switch>
          
          
          
          <Route path="/reimbursement" component={reimbursement} />
                    
          <Route path="/home" component={Home} />
          
          <Route path="/sign-in" component={SignIn} />
          <Route path="/tic-tac-toe" component={TicTacToe} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
