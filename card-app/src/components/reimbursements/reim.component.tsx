import React, { Component } from 'react'
import { environment } from '../../environment';
import { Reimbursement } from '../../models/reimbursement';



interface IState {
    reimbursement: Reimbursement[]
}

export default class reimbursement extends Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            reimbursement: []
 
        };
    }

    async componentDidMount() {
        this.getreimbursement();
     
    }
  

   getreimbursement = async () => {
    const resp = await fetch(environment.context +'/reimbursements', {
        credentials: 'include'
    });
    const cardsFromServer = await resp.json();
    this.setState({
        reimbursement: cardsFromServer,
        
    });
    console.log(cardsFromServer);
}


   

    render() {
        const reimbursement = this.state.reimbursement;
        return (
            <div id="reimbursement-table-container">
               ,
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Id </th>
                            <th scope="col">author</th>
                            <th scope="col">amount</th>
                            {/* <th scope="col">amount</th> */}
                            <th scope="col">dateSubmitted</th>
                            <th scope="col">dateResolved</th>
                            <th scope="col">resolver</th>
                            <th scope="col">status</th>
                            <th scope="col">type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reimbursement.map(reimbursement =>
                                <tr key={'reimbursementId' + reimbursement.reimbursementId}>
                                    <td>{reimbursement.reimbursementId}</td>
                                    <td>{reimbursement.author}</td>
                                    <td>{reimbursement.amount}</td>
                                    <td>{reimbursement.dateSubmitted}</td>
                                    <td>{reimbursement.dateResolved}</td>
                                    <td>{reimbursement.resolver}</td>
                                    <td>{reimbursement.status}</td>
                                    <td>{reimbursement.type}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
