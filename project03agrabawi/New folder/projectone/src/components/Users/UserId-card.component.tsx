import React from 'react';
import { User } from '../../model/user';

interface IUserCardProps {
  user: User;
}

export class UserCardComponent extends React.PureComponent<IUserCardProps> {
  render() {
    const User = this.props.user;
    return (
      <div className="card col-md-4 col-sm-6 col-xs-12">
        <div className="card-body">
          <h5 className="card-title">{User.username}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">First Name: {User.firstName}</li>
          <li className="list-group-item">last_name: {User.lastName}</li>
          <li className="list-group-item">email: {User.email}</li>
          <li className="list-group-item" value={User.role.roleId}>Role ID : {User.role.role}</li>
          <li className="list-group-item">
            <button className="btn btn-danger">Delete</button>
          </li>
        </ul>
      </div>

  //     <table className="table table-striped table-dark">
  //     <thead>
  //         <tr>
  //             <th scope="col">Name</th>
  //             <th scope="col">Game</th>
  //             <th scope="col">Condition</th>
  //             <th scope="col">Value</th>
  //             <th scope="col">Owner</th>
  //         </tr>
  //     </thead>
  //     <tbody>
  //         {
  //             User.map(card =>
  //                 <tr key={'cardId-' + card.id}>
  //                     <td>{card.name}</td>
  //                     <td>{card.game.name}</td>
  //                     <td>{card.quality.label}</td>
  //                     <td>{card.value}</td>
  //                     <td>{card.owner && card.owner.username}</td>
  //                 </tr>)
  //         }
  //     </tbody>
  // </table>
    )
  }
}