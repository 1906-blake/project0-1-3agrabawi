import React from 'react';
import User from '../../models/user';
import { UserCardComponent } from './usercard.component';


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
    const resp = await fetch('http://localhost:8081/users', { method: 'GET', credentials: 'include' });
       const body = await resp.json();
       this.setState({
         users: body
       })
  }

  //JAVA SCRIPT ecmap scrit[t]
  /*
  fororo
  four pillars of oops 
  abstarcion 
  popolymorphism 
  inheritance 
  encapsulations 
  access modifire 
  abstarct classes and interfaces 
  metod overloading ad overriding are tow 
  ways of achieveong poly in java
  inheritance extends 
  implement s
  interfaces 
  abstarct typres the atj speiciefies the behaicigoe of the final cavlue 
  garbage collectoe and the finalize method is used to call the garbage colector for garbage collection. pre processig 
  data types in js :
  undefinde 
  null 
  specifies the behavior ofhow an object wil behanve in the [rpogram]
  specifiies types for ut fuekds id the fnal ovjers 
  it
  has to be fthe final intefrace 
  fucntional interface wirh only oe abstrac method it has rmoe rtha nd 
  marker intercae
  */ 

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