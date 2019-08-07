import React from 'react';
import User from '../../models/user';


interface IUserCardProps {
  user: User;
}

export class UserCardComponent extends React.PureComponent<IUserCardProps> {
  render() {
    const User = this.props.user;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{User.username}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">firstname: {User.firstName}</li>
          <li className="list-group-item">lastname: {User.lastName}</li>
          <li className="list-group-item">Email: {User.role}</li>
          <li className="list-group-item">Role: {User.email}</li>
          <li className="list-group-item">
            <button className="btn btn-danger">Delete</button>
          </li>
        </ul>
      </div>
    )
  }
}