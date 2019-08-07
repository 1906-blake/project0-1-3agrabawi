import { ReimbursementStatus } from "./ReimbursementStatus";

export class Reimbursement
{
    reimbursement_id: number; // primary key
    author: number;  // foreign key -> User, not null
    amount: number;  // not null
    date_submitted: string; // not null
    date_resolved: number;
    description: string; // not null
    resolver: number; // foreign key -> User
    status_id: ReimbursementStatus; // foreign ey -> ReimbursementStatus, not null
    type: number // foreign key -> ReimbursementType
    
    constructor(reimbursementId: number, author: number, 
      amount: number, dateSubmitted: string, dateResolved: number,
       description: string, resolver: number, status: ReimbursementStatus, type: number){
    this.reimbursement_id = reimbursementId,
    this.author = author,
    this.amount = amount,
    this.date_submitted = dateSubmitted,
    this.date_resolved = dateResolved,
    this.description = description,
    this.status_id = status,
    this.resolver = resolver,
    this.type = type;
  }
}