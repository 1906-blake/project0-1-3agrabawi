import React from 'react';
import { UserCardComponent } from './User-card';

interface IState {
  users : any;
  user_id: number;
}

export class UserIdComponent extends React.Component<any, IState> {
    updateUserID: any;

  constructor(props: any) {
    super(props);
    this.state = {
    users: undefined,
    user_id: 0
    };
  }

  // in here we should initialize http calls
   getId = async (id:number) => {
      
    const resp = await fetch('http://localhost:8012/users/' + id, { method: 'GET', credentials: 'include' });
    console.log('Not Allowed');   
    const body = await resp.json();
       
       this.setState({
         users: body
        
        })
  }
  
  updateUserId = (event) => {
      this.setState({
          user_id: event.target.value
      })

  }

  render() {
      const {user_id} = this.state;
      const myUser = this.state.users;
    return (
      <div className="container">
        <div className="row">
            <div className= "form-group">
            <input type = "number" className = "form-control" aria-describedby = "emailHelp" placeholder = "Enter user id" id ="user-input" value ={user_id} onChange = {this.updateUserId}/>
             <button id = "but" type = "submit" className = "btn btn-primary" onClick={() => this.getId(+this.state.user_id)}>Search</button> 
            {/* <button id = "but1" className=" btn-successton" type="submit">Get The User By Id</button>
             */}
            </div>
            <div> 
            {myUser && <UserCardComponent user ={myUser}/>}
            </div>
        </div>
      </div>
    );
  }
}