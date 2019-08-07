import { Role } from "./Role";

export class User {
  userId: number;
  username: string;
  pass: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
 

  constructor(user_Id = 0, user_name = '', password = '', 
  firstname = '', lastName = '', role = new Role(0,''), email = '') {
    this.userId = user_Id;
    this.username = user_name;
    this.pass = password;
    this.firstName = firstname;
    this.lastName = lastName
    this.role = role; 
    this.email = email;
    
  }
}