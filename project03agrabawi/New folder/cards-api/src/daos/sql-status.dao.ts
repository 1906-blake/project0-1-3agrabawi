import { connectionPool } from '../util/connection';
import { PoolClient } from 'pg';
//import { convertSqlStatus } from '../util/status.converter';
import { ReimbursementStatus } from '../models/reimbursement-status';



export async function findAll() {
    console.log('finding all status');
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const result = await client.query('SELECT * FROM status');
        return result.rows.map(sqlStatus => new ReimbursementStatus(sqlStatus.status_id, sqlStatus.status_name));
    

    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}