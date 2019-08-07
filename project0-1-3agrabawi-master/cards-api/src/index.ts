import express from 'express';
import { usersRouter } from './routers/users.router';
import { reimbursementsRouter } from './routers/reimbursementsrouter';
import { sessionMiddleware } from './middleware/session.middleware';
import { authRouter } from './routers/auth.router';
import bodyParser from 'body-parser';
import { roleRouter } from './routers/role.router';
import { statusRouter } from './routers/status.router';
import { typeRouter } from './routers/type.router';

const port = process.env.PORT || 8012; //APP_PORT;
const app = express();

app.use((req, res, next) => {
    console.log(`request made with url: ${req.url} and method ${req.method}`)
    next();
})



// allow cross origins
app.use((req, resp, next) => {
    console.log(req.get('host'));
    resp.header('Access-Control-Allow-Origin', `${req.headers.origin}`);
    resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    resp.header('Access-Control-Allow-Credentials', 'true');
    resp.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT, PATCH');
    next();
  });

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
app.use('/status', statusRouter);
app.use('/role', roleRouter);
app.use('/type', typeRouter);
app.use(authRouter);


app.listen(port, () => {
    console.log('app started on port: ' + port);
});