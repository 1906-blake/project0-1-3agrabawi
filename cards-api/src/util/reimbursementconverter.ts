import { Reimbursement } from '../models/reimbursement';
// import { User } from '../models/user';
// import { Role } from '../models/role';
// import { ReimbursementStatus } from '../models/reimbursement-status';
// import { ReimbursementType } from '../models/reimbursement-type';


// export function convertReimbursement(row: any) {
//     return new Reimbursement(row.reimbursementid,
//             new User(row.author, row.author_username, row.author_password && '', row.author_firstname, row.author_lastname, row.author_email,
//                 row.author_role_id && new Role(row.author_role_id, row.author_role)), row.amount, row.datesubmitted, row.dateresolved, row. description,
//             row.resolver && new User(row.resolver, row.resolver_username, row.resolver_password && '', row. resolver_firstname, row.resolver_lastname, row.resolver_email,
//                 new Role(row.resolver_role_id, row.resolver_role)),
//             new ReimbursementStatus(row.status_id, row.status), row.type_id && new ReimbursementType(row.type_id, row.type_name));
// }

export function convertReimbursement(row) {
    console.log('convert');
     return new Reimbursement(row.reimbursement_id, row.username , row.amount, row.date_submited, row.date_resolved, row.description, row.r_username, row.status_id, row.type);
   }