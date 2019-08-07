export class ReimbursementStatus
{
    status_id: number; // primary key
    status: string; // not null, unique
    constructor( statusId: number, status: string){
      this.status_id = statusId;
      this.status = status;
  }
}