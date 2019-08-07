import { connectionPool } from '../utils/connectionPool';
import { PoolClient } from 'pg';
import { convertUser } from '../utils/userconverter';
import {User} from '../models/users';
 

export async function findAll() {
    console.log('finding all users');
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); 

        const result = await client.query('SELECT * FROM users left join role using (role_id)');
        return result.rows.map(convertUser);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release(); 
    }
    console.log('found all');
    return undefined;
}

export async function findById(id: number) {
    console.log('finding user by id: ' + id);
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); 
        const result = await client.query('SELECT * FROM users WHERE user_id = $1', [id]);
        const sqlUser = result.rows[0];
        return sqlUser && convertUser(sqlUser);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return undefined;
}


export async function findByFirstName(firstName: string) {
    console.log('finding users by first name');
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); 
        const result = await client.query('SELECT * FROM users WHERE first_name = $1', [firstName]);
        return result.rows.map(convertUser);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return undefined;
}



export async function findByUsernameAndPassword(username: string, password: string) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect();

        const queryString = `
            SELECT * FROM users
                WHERE username = $1 AND pass = $2
        `;
        const result = await client.query(queryString, [username, password]);
        const sqlUser = result.rows[0]; 
        return sqlUser && convertUser(sqlUser);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    return undefined;
}

export async function save(user: User) {
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); 
        const queryString = `
            INSERT INTO users (username, pass, first_name, last_name, email, role_id)
            VALUES 	($1, $2, $3, $4, $5, $6, $7)
            RETURNING user_id
        `;
        const params = [user.username, user.password, user.firstName, user.lastName,  user.email, user.role];
        const result = await client.query(queryString, params);
        return result.rows[0].user_id;
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}


export async function update(user: User) {
    const oldUser = await findById(user.userId);
    if (!oldUser) {
        return undefined;
    }
    user = {
        ...oldUser,
        ...user
    };
    console.log(user);
    let client: PoolClient;
    try {
        client = await connectionPool.connect(); 
        const queryString = `
            UPDATE users SET username = $1, pass = $2, first_name = $3, last_name = $4,email = $5, role_id = $6
            WHERE user_id = $7
            RETURNING *
        `;
        const params = [user.username, user.password, user.firstName, user.lastName, user.email, user.role, user.userId];
        const result = await client.query(queryString, params);
        const sqlUser = result.rows[0];
        return convertUser(sqlUser);
    } catch (err) {
        console.log(err);
    } finally {
        client && client.release();
    }
    console.log('found all');
    return undefined;
}



