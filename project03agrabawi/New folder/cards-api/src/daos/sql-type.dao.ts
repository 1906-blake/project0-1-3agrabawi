import { connectionPool } from '../util/connection';
import { PoolClient } from 'pg';
import {ReimbursementType} from '../models/reimbursement-type'




export async function findAll() {
    console.log('finding all type');
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); // basically .then is everything after this
        const result = await client.query('SELECT * FROM type');
        return result.rows.map(sqlType => new ReimbursementType(sqlType.type_id, sqlType.type));
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}