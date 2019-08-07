import { Pool } from 'pg';

const connectionConfiguration = {
    user: process.env.EXPENSE_DB_USERNAME || 'postgres',
    host: process.env.EXPENSE_DB_URL || 'localhost',
    database: process.env.EXPENSE_DB_NAME || 'reimbursements',
    password: process.env.EXPENSE_DB_PASSWORD ||'Abood1994',
    port: +process.env.EXPENSE_DB_PORT || 5432,
    max: 5
};

console.log(connectionConfiguration);

export const connectionPool = new Pool(connectionConfiguration);