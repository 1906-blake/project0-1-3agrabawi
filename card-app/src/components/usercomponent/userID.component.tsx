import React from 'react';
import { UserCardComponent } from './usercard.component';

interface IState {
  users : any;
  userId: number;
}

export class UserIdComponent extends React.Component<any, IState> {
    updateUserID: any;

  constructor(props: any) {
    super(props);
    this.state = {
    users: undefined,
    userId: 0
    };
  }

  // in here we should initialize http calls
   getId = async (id:number) => {
      
    const resp = await fetch('http://localhost:8081/users/' + id, { method: 'GET', credentials: 'include' });  
    const body = await resp.json();
       
       this.setState({
         users: body
        
        })
  }
  
//   updateUserId = (event) => {
//       this.setState({
//           userId: event.target.value
//       })

//   }

  render() {
      const {userId} = this.state;
      const myUser = this.state.users;
    return (
      <div className="container">
        <div className="row">
            <div className= "form-group">
            <input type = "number" className = "form-control" aria-describedby = "emailHelp" placeholder = "Enter user id" id ="user-input" value ={userId} onChange = {this.updateUserID}/>
            <button id = "but" type = "submit" className = "btn btn-primary" onClick={() => this.getId(+this.state.userId)}>Search</button>
            </div>
            <div> 
            {myUser && <UserCardComponent user ={myUser}/>}
            </div>
        </div>
      </div>
    );
  }
}