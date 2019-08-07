import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { NavComponent } from './components/nav/nav.component';
import './include/bootstrap';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserComponent } from './components/Users/Users.component';
import { HomeComponent } from './components/home/home.component';
import { UserIdComponent } from './components/Users/Userid.component';
import { ReimbursementComponent } from './components/Reimbursements/reimbursements.component';
import { ReimbursementStatusComponent } from './components/Reimbursements/reimbursementstatus.component';
import { UserUpdateComponent } from './components/Users/userupdate.component';
import { ReimbursementUpdateComponent } from './components/Reimbursements/reimbursementupdate.component';
import { ReimbursementSubmitComponent } from './components/Reimbursements/reimbursementsubmit.component';
import { InvalidUserComponent } from './components/invaliduser.component';
const App: React.FC = () => {
  return (
    <BrowserRouter>
  
      <NavComponent />

      <div id="main-content-container">
        <Switch>
      
        <Route path="/sign-in" component={SignInComponent} />
        <Route path="/users" component={UserComponent} />
        <Route path="/home" component={HomeComponent} />
        <Route path="/usersbyid" component={UserIdComponent} />
        <Route path="/reimbursementsbyid" component={ReimbursementComponent} />
        <Route path="/reimbursementsbystatusid" component={ReimbursementStatusComponent} />
        <Route path="/usersupdate" component={UserUpdateComponent} />
        <Route path="/reimbursementupdate" component={ReimbursementUpdateComponent} />
        <Route path="/reimbursementsubmit" component={ReimbursementSubmitComponent} />
        <Route path="/invaliduser" component={InvalidUserComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
  
}


export default App;
