import React from 'react';
import { UserCardComponent } from './User-card';
import { User } from '../../model/user';

interface IState {
  users : User[]
}

export class UserComponent extends React.Component<any, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      users: []
    };
  }

  // in here we should initialize http calls
  async componentDidMount() {
    const resp = await fetch('http://localhost:8012/users', { method: 'GET', credentials: 'include' });
       const body = await resp.json();
       this.setState({
         users: body
       })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.users.map(user => (
            <UserCardComponent key={'User-' +user.userId} user={user}/>
          ))}
        </div>
      </div>
    );
  }
}