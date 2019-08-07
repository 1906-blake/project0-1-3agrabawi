import React from 'react';

interface IReimbursementStatusCardProps {
  reimbursement: any;
}

export class ReimbursementStatusCardComponent extends React.PureComponent<IReimbursementStatusCardProps> {
  render() {
    const reimbursements = this.props.reimbursement;
    console.log(reimbursements);
    return (
      <div className="card col-md-4 col-sm-6 col-xs-12">
        <img src="https://smartvest.com/wp-content/uploads/2018/01/reimbursement-specialists-contact@2x-800x800.png"
          className="card-img-top"
          alt="..." />
        <div className="card-body">
          <h5 className="card-title">{reimbursements.reimbursement_id}</h5>
        </div>
        <ul className="list-group list-group-flush">
        <li className="list-group-item"><h2>Status</h2> {reimbursements.status === 3 ? "Denied": reimbursements.status === 2? "Approved" : "Pending"}</li>
          <li className="list-group-item">reimbursement ID: {reimbursements.reimbursementId}</li>
          {/* <li className="list-group-item">author: {reimbursements.author}</li> */}
          <li className="list-group-item">date_submitted: {reimbursements.dateSubmitted }</li>
          <li className="list-group-item">date_resolved: {reimbursements.dateResolved}</li>
          <li className="list-group-item">description: {reimbursements.description }</li>
          <li className="list-group-item">
            <button className="btn btn-danger">Delete</button>
          </li>
        </ul>
      </div>
    )
  }
}