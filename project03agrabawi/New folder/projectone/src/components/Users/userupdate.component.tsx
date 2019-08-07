import React from 'react';
// import { number, string } from 'prop-types';
// import { User } from '../../model/user';
// import { Role } from '../../model/Role';


interface IUserUpdateState {
   
    user_id: number;
    username: string;
    pass: string;
    firstname: string;
    lastname: string;
    email: string;
    role_id : number;
    errorMessage: string;
}

export class UserUpdateComponent extends React.Component<any, IUserUpdateState> {
    constructor(props) {
        super(props);
        this.state = {
            
            user_id: 0,
            username: '',
            pass: '',
            firstname: '',
            lastname: '',
            email: '',
            role_id : 0,
            errorMessage: ''
        };
    }

    submit = async (event) => {
        event.preventDefault();
        console.log('attempting to login');

        try {
            const resp = await fetch('http://localhost:8012/users', {
                method: 'PATCH',
                credentials: 'include',
                body: JSON.stringify({
                    userId: this.state.user_id,
                    username: this.state.username,
                    password: this.state.pass,
                    firstName: this.state.firstname,
                    lastName: this.state.lastname,
                    email: this.state.email,
                    role: 1 // es2al leesh 1 mesh zay elly foog
                }),
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
   
    updateUserId = (event) => {
        this.setState({
            user_id: event.target.value
        });
    }

    updateUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    updatePassword = (event) => {
        this.setState({
            pass: event.target.value
        });
    }

    updateFirstName = (event) => {
        this.setState({
            firstname: event.target.value
        });
    }

    updateLastName = (event) => {
        this.setState({
            lastname: event.target.value
        });
    }

    updateEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    updateRole = (event) => {
        this.setState({
            role_id: event.target.value
        });
    }
    render() {
                    return (
                        <div id = "form">
                  <form className="form-signin" onSubmit={this.submit}>
                  <h1 className="h3 mb-3 font-weight-normal">Update User</h1>
           
                  <label>The User ID</label>
                  <input type="text" id="inputUserId" name="userId"
                    className="form-control" placeholder="UserId"
                    required value={this.state.user_id} onChange={(e) => this.updateUserId(e)} />
           
                  <label>Username</label>   
                  <input type="text" id="inputUsername" name="username"
                    className="form-control" placeholder="Username"
                    required value={this.state.username} onChange = {(e) => {this.updateUsername(e)}}/>
           
                  {/* <label>Password</label>
                  <input type="password" id="inputPassword" name="password"
                    className="form-control" placeholder="Password"
                    required value={this.state.pass} onChange= {(e) => {this.updatePassword(e)}} />
            */}
                  <label>First Name</label>
                  <input type="text" id="inputFirstName" name="firstName"
                    className="form-control" placeholder="First Name"
                    required value={this.state.firstname} onChange= {(e) => {this.updateFirstName(e)}} />
           
                  <label>Last Name</label>
                  <input type="text" id="inputLastName" name="lastName"
                    className="form-control" placeholder="Last Name"
                    required value={this.state.lastname} onChange= {(e) => {this.updateLastName(e)}}/>
           
                  <label>email</label>
                  <input type="text" id="iXnputEmail" name="email"
                    className="form-control" placeholder="email"
                    required value={this.state.email} onChange={(e) => {this.updateEmail(e)}} />
{/*            
                  <label>Role</label>
                  <input type="text" id="inputRole" name="role"
                    className="form-control" placeholder="Role"
                    required value={this.state.role_id} onChange={(e) => {this.updateRole(e)}} /> 
            */}
                  <button id = "but"  className="btn btn-lg btn-primary btn-block" type="submit">Update</button>
                  <p id="login-error">{this.state.errorMessage}</p>
                  
                </form>
                </div>
            
        );
    }
}