import React from 'react';
import { ReimbursementStatusCardComponent } from './reimbursementstatuscard.component';


interface IState {
  reimbursements : any;
  reimbursementId: number;
}

export class ReimbursementStatusComponent extends React.Component<any, IState> {
    updatereimbursementId: any;

  constructor(props: any) {
    super(props);
    this.state = {
    reimbursements: undefined,
    reimbursementId: 0
    };
  }

  // in here we should initialize http calls
   getId = async (id:number) => {
      
    const resp = await fetch('http://localhost:8012/reimbursements/status/' + id, { method: 'GET', credentials: 'include' });
    //ask shreyas about it we might do it the status not the reim id 
       const body = await resp.json();
       this.setState({
         reimbursements: body
        
        })
        console.log(body);
        
  }
  
  updateReimbursementId = (event) => {
      this.setState({
          reimbursementId: event.target.value
      })

  }

  render() {
      const myReimbursements = this.state.reimbursements;
      console.log('hit');
    return (
      <div className="container">
        <div className="row">
            <div className= "form-group">
            <input type = "number" className = "form-control" aria-describedby = "emailHelp" placeholder = "Enter status id" id ="user-input" value ={this.state.reimbursementId} onChange = {this.updateReimbursementId}/>
            <button id = "but" type = "submit" className = "btn btn-primary" onClick={() => this.getId(+this.state.reimbursementId)}>Search</button>
            </div>
            <div className = "row"> 
             {myReimbursements && <>
                {
                    this.state.reimbursements.map(currReimb => (
                        <ReimbursementStatusCardComponent key={'reimb-'+currReimb.reimbursementId} reimbursement={currReimb}/>
                    ))
                }

            </>}
            </div>
        </div>
      </div>
    );
  }
}