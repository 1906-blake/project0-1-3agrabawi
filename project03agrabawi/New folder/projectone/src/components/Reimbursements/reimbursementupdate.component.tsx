import React from 'react';
// import { number, string } from 'prop-types';
// import { User } from '../../model/user';
// import { Role } from '../../model/Role';


interface IReimbursementUpdateState {
    reimbursementId: number; 
    author: number;  
    amount: number;  
    date_Submitted: string; 
    date_Resolved: number;
    description: string; 
    resolver: number; 
    status: number; 
    type: number;
    errorMessage: string
}

export class ReimbursementUpdateComponent extends React.Component<any, IReimbursementUpdateState> {
    constructor(props) {
        super(props);
        this.state = {
            reimbursementId: 0,
            author: 0,
            amount: 0,
            date_Submitted: '',
            date_Resolved: 0,
            description: '',
            resolver: 0,
            status : 0,
            type: 0,
            errorMessage: ''
        };
    }

    submit = async (event) => {
        event.preventDefault();
        console.log('attempting to update reimbursement');
        let user = {
            reimbursementId: this.state.reimbursementId,
            author: this.state.author,
            amount: this.state.amount,
            dateSubmitted: this.state.date_Submitted,
            dateResolved: this.state.date_Resolved,
            description: this.state.description,
            resolver: this.state.resolver,
            status: this.state.status,
            type: this.state.type
        };

        console.log(user);

        try {
            const resp = await fetch('http://localhost:8012/reimbursements', {
                method: 'PATCH',
                credentials: 'include',
                body: JSON.stringify(user),
                headers: {
                    'content-type': 'application/json'
                }
            })
            console.log(resp);

            if (resp.status === 401) {
                this.setState({
                    errorMessage: 'Invalid Credentials'
                });
            } else if (resp.status === 200) {
                // redirect to spaceships page
                // const user = await resp.json();
                this.props.history.push('/home');
            } else {
                this.setState({
                    errorMessage: 'Cannot Update User'
                });
            }
        } catch (err) {
            console.log(err);
        }
    }
    updateReimbursementId(e) {
        this.setState({
            reimbursementId: e.target.value
        })
    }
    updateAuthor = (event) => {
        this.setState({
            author: event.target.value
        });
    }

    updateAmount = (event) => {
        this.setState({
            amount: event.target.value
        });
    }

    updateDateSubmitted = (event) => {
        this.setState({
            date_Submitted: event.target.value
        });
    }

    updateDateResolved = (event) => {
        this.setState({
            date_Resolved: event.target.value
        });
    }

    updateDescription = (event) => {
        this.setState({
            description: event.target.value
        });
    }

    updateResolver = (event) => {
        this.setState({
            resolver: event.target.value
        });
    }

    updateStatus = (event) => {
        this.setState({
            status: event.target.value
        });
    }
    updateType = (event) => {
        this.setState({
            type: event.target.value
        })
    }
    render() {
                    return (
                  <div id = "form">
                        <form className="form-signin" onSubmit={this.submit}>
                  <h1 className="h3 mb-3 font-weight-normal">Update Reimbursement</h1>
           
                  <label>ReimbursementId</label>
                  <input type="text" id="reimbursementId" name="reimbursementid"
                    className="form-control" placeholder="reimbursementId"
                    required value={this.state.reimbursementId} onChange={(e) => this.updateReimbursementId(e)} />
           
                  <label>Author</label>   
                  <input type="text" id="author" name="Author"
                    className="form-control" placeholder="author"
                    required value={this.state.author} onChange = {(e) => {this.updateAuthor(e)}}/>
           
                  <label>Amount</label>
                  <input type="text" id="amount" name="amount"
                    className="form-control" placeholder="amount"
                    required value={this.state.amount} onChange= {(e) => {this.updateAmount(e)}} />
           
                  <label>Date Submitted</label>
                  <input type="text" id="date-submitted" name="Date-submitted"
                    className="form-control" placeholder="datesubmitted"
                    required value={this.state.date_Submitted} onChange= {(e) => {this.updateDateSubmitted(e)}} />
           
                  <label>Date Resolved</label>
                  <input type="text" id="date-resolved" name="Date-resolved"
                    className="form-control" placeholder="dateresolved"
                    required value={this.state.date_Resolved} onChange= {(e) => {this.updateDateResolved(e)}}/>
           
                  <label>Description</label>
                  <input type="text" id="description" name="description"
                    className="form-control" placeholder="description"
                    required value={this.state.description} onChange={(e) => {this.updateDescription(e)}} />
           
                  <label>Resolver</label>
                  <input type="text" id="resolver" name="resolver"
                    className="form-control" placeholder="resolver"
                    required value={this.state.resolver} onChange={(e) => {this.updateResolver(e)}} />

                    
                  <label>Status</label>
                  <input type="text" id="status" name="status"
                    className="form-control" placeholder="status"
                    required value={this.state.status} onChange={(e) => {this.updateStatus(e)}} />
                    
                  <label>Type</label>
                  <input type="text" id="type" name="type"
                    className="form-control" placeholder="type"
                    required value={this.state.type} onChange={(e) => {this.updateType(e)}} />
           
                  <button id = "but"  className="btn btn-lg btn-primary btn-block" type="submit">Update</button>
                  <p id="login-error">{this.state.errorMessage}</p>
                  </form>
                  </div>
        );
    }
}