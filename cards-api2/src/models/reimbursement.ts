import { ReimbursementStatus } from './reimbursementStatus';
import { ReimbursementType } from './reimbursementType';
import { Role } from './role';
//import { User } from './users';

export class Reimbursement {
    constructor( 
        public reimbursementId: number, // primary key
        public author: Role,  // foreign key -> User, not null
        public amount: number,  // not null
        public dateSubmitted: string, // not null
        public dateResolved: string,
        public description: string, // not null
        public resolver: Role, // foreign key -> User
        public status: ReimbursementStatus, // foreign ey -> ReimbursementStatus, not null
        public type: ReimbursementType
    ) { }
}