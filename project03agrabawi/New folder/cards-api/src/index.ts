import express from 'express';
import { usersRouter } from './routers/users.router';
import { reimbursementsRouter } from './routers/reimbursementsrouter';
import { sessionMiddleware } from './middleware/session.middleware';
import { authRouter } from './routers/auth.router';
import bodyParser from 'body-parser';

const port = process.env.PORT || 8012; //APP_PORT;
const app = express();

app.use((req, res, next) => {
    console.log(`request made with url: ${req.url} and method ${req.method}`)
    next();
})


app.use(bodyParser.json());

/**
 * Session middleware
 */
app.use(sessionMiddleware);

/**
 *
 */
app.use('/users', usersRouter);
app.use('/reimbursements', reimbursementsRouter);
app.use(authRouter);


app.listen(port, () => {
    console.log('app started on port: ' + port);
});