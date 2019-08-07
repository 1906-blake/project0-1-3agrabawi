import { Reimbursement } from '../models/reimbursement';
export function convertReimbursement(row) {
    console.log('convert');
     return new Reimbursement(row.reimbursement_id, row.username , row.amount, row.date_submited, row.date_resolved, row.description, row.r_username, row.status_id, row.type);
   }


