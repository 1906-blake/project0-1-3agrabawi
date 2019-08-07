import { PoolClient } from 'pg';
import { connectionPool } from '../util/connection';
import { convertReimbursement}  from '../util/reimbursementconverter';
import { Reimbursement } from '../models/reimbursement';


export async function findAll() {
    console.log('finding all reimbursements');
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); 

        const result = await client.query(`select * from reimbursement r
		inner join type t on (r.type = t.type_id)
        inner join status using (status_id)
        inner join users n on (r.author = n.user_id)
        left join resolver_view q on (r.resolver = q.r_user_id)
        `);
        return result.rows.map(convertReimbursement);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}


export async function findByReimbursementStatusId(statusId: number) {
    console.log('finding status by status id: ' + statusId);
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); 
        console.log(statusId);
        const result = await client.query(`select * from reimbursement r
		left join type t on (r.type = t.type_id)
        left join status using (status_id)
        left join users n on (r.author = n.user_id)
        left join resolver_view q on (r.resolver = q.r_user_id)
        WHERE status_id = $1`, [statusId]);
        return result.rows.map(convertReimbursement);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return undefined;
}




export async function findByuserId(userId: number) {
    console.log('finding status by authorid: ' + userId);
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); 

        const result = await client.query(`select * from reimbursement r
		inner join type t on (r.type = t.type_id)
        inner join status using (status_id)
        inner join users n on (r.author = n.user_id)
        left join resolver_view q on (r.resolver = q.r_user_id)
		 WHERE user_id = $1`, [userId]);

        return result.rows.map(convertReimbursement);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return undefined;
}




export async function findReimbursementById(id: number) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); 

        const result = await client.query(`select * from reimbursement r
		inner join type t on (r.type = t.type_id)
        inner join status using (status_id)
        inner join users n on (r.author = n.user_id)
        left join resolver_view q on (r.resolver = q.r_user_id)
		 WHERE reimbursement_id = $1`, [id]);
        const sqlReim = result.rows[0];

        return sqlReim && convertReimbursement(sqlReim);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return undefined;
}


export async function createReimbursement(reimbursement: Reimbursement) {
    let client: PoolClient;
    reimbursement.dateSubmitted = new Date().toUTCString();
    try {
        client = await connectionPool.connect();
        const queryString = `
            INSERT INTO reimbursement (amount, author, resolver, date_submited, date_resolved, description, status_id, type)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                RETURNING *
        `;
        const result = await client.query(queryString, [reimbursement.amount, reimbursement.author.userId, reimbursement.resolver && reimbursement.resolver.userId,
        reimbursement.dateSubmitted, reimbursement.dateResolved, reimbursement.description, reimbursement.status, reimbursement.type]);
        const sqlReimbursement = result.rows[0];
        return convertReimbursement(sqlReimbursement);
    } catch (error) {
        console.log(error);
    } finally {
        client && client.release();
    }
    return undefined;
}



export async function updateReimbursement(reimbursement: Partial<Reimbursement>) {
    const oldReimbursement = await findReimbursementById(reimbursement.reimbursementId);
    if (!oldReimbursement) {
        return undefined;
    }
    reimbursement = {
        ...oldReimbursement,
        ...reimbursement
    };
    let client: PoolClient;
    try {
        client = await connectionPool.connect();
        const queryString = `
        UPDATE reimbursement SET author = $1, amount = $2, date_submited = $3, date_resolved = $4, description = $5, resolver = $6, status_id = $7, type = $8
        WHERE reimbursement_id = $9
                RETURNING *
        `;
        const params = [reimbursement.author, reimbursement.amount, reimbursement.dateSubmitted, reimbursement.dateResolved, reimbursement.description, reimbursement.resolver, reimbursement.status, reimbursement.type, reimbursement.reimbursementId];
        const result = await client.query(queryString, params);



        const sqlReimbursement = result.rows[0];
        return convertReimbursement(sqlReimbursement);
    } catch (error) {
        console.log(error);
    } finally {
        client && client.release();
    }
    return undefined;
}