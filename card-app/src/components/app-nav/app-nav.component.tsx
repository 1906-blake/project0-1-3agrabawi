import React from 'react';
import { Link } from 'react-router-dom';
import RevLogo from '../../assets/rev-logo.png';

export class NavComponent extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-expand-lg navbar-light bg-light display-front nav-pad">
        <div className="navbar-header c-pointer shift-left">
          <Link to="/home" className="unset-anchor">
            <img className="img-adjust-position rev-logo" src={RevLogo} alt="revature" />
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ml-auto margin-nav">
            <li className="nav-item active">
              <Link to="/home" className="unset-anchor nav-link">Home</Link>
            </li>
            <li className="nav-item active">
              <Link to="/sign-in" className="unset-anchor nav-link">Sign In</Link>
            </li>
            
            <li className="nav-item active dropdown">
              <div className="nav-link dropdown-toggle pointer" id="Users-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Users</div>
              <div className="dropdown-menu" aria-labelledby="examples-dropdown">
              <div className="dropdown-item"><Link to="/user" className="unset-anchor nav-link">AllUsers</Link></div>
                <div className="dropdown-item"><Link to="/usersbyid" className="unset-anchor nav-link active">GetUsersById</Link></div>
                <div className="dropdown-item"><Link to="/usersupdate" className="unset-anchor nav-link active">UpdateUsers</Link></div>
              </div>
            </li> 
            <li className="nav-item active dropdown">
              
              
            </li>
            <li className="nav-item active">

               <li className="nav-item active dropdown">
              <div className="nav-link dropdown-toggle pointer" id="Reimbursements-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Reimbursements</div>
              <div className="dropdown-menu" aria-labelledby="examples-dropdown">
              <div className="dropdown-item"><Link to="/reimbursement" className="unset-anchor nav-link">AllReimbursements</Link></div>
                <div className="dropdown-item"><Link to="/reimbursementsbyid" className="unset-anchor nav-link active">GetReimbursementsByAuthorId</Link></div>
                <div className="dropdown-item"><Link to="/reimbursementsbystatusid" className="unset-anchor nav-link active">GetReimbursementsByStatusId</Link></div>
                <div className="dropdown-item"><Link to="/reimbursementupdate" className="unset-anchor nav-link active">UpdateReimbursement</Link></div>
                <div className="dropdown-item"><Link to="/reimbursementsubmit" className="unset-anchor nav-link active">SubmitReimbursement</Link></div>
              </div>
              
            </li>
           
            </li>
  
          </ul>
        </div>
      </nav>
    );
  }
}