import React from 'react';
import { ReimbursementCardComponent } from './reimbursementcard.component';


interface IState {
  reimbursements : any;
  reimbursement_id: number;
}

export class ReimbursementComponent extends React.Component<any, IState> {
    updatereimbursementId: any;

  constructor(props: any) {
    super(props);
    this.state = {
    reimbursements: undefined,
    reimbursement_id: 0
    };
  }

  // in here we should initialize http calls
   getId = async (id:number) => {
      
    const resp = await fetch('http://localhost:8012/reimbursements/author/userId/' + id, { method: 'GET', credentials: 'include' });
       const body = await resp.json();
       this.setState({
         reimbursements: body
        
        })
        console.log(body);
  }
  
  updateReimbursementId = (event) => {
      this.setState({
          reimbursement_id: event.target.value
      })

  }

  render() {
      const myReimbursements = this.state.reimbursements;
    return (
      <div className="container">
        <div className="row">
            <div className= "form-group">
            <input type = "number" className = "form-control" aria-describedby = "emailHelp" placeholder = "Enter reimbursement id" id ="user-input" value ={this.state.reimbursement_id} onChange = {this.updateReimbursementId}/>
            <button  id = "but" type = "submit" className="btn blue-gradient" onClick={() => this.getId(+this.state.reimbursement_id)}>Search</button>
            </div>
            <div className = "row"> 
             {myReimbursements && <>
                {
                    this.state.reimbursements.map(currReimb => (
                        <ReimbursementCardComponent key={'reimb-'+currReimb.reimbursement_id} reimbursement={currReimb}/>
                    ))
                }

            </>}
            </div>
        </div>
      </div>
    );
  }
}