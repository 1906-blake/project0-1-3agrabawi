import express from 'express';
import { usersRouter } from './routers/usersRouter';
import { reimbursementsRouter } from './routers/reimbursementRouter';
import bodyParser from 'body-parser';



const port = process.env.PORT || 8012; //APP_PORT;
const app = express();

app.use((req, res, next) => {
    console.log(`request made with url: ${req.url} and method ${req.method}`)
    next();
})


app.use(bodyParser.json());

// allow cross origins
app.use((req, resp, next) => {
    console.log(req.get('host'));
    resp.header('Access-Control-Allow-Origin', `${req.headers.origin}`);
    resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    resp.header('Access-Control-Allow-Credentials', 'true');
    resp.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT, PATCH');
    next();
  });


/**
 *
 */
app.use('/users', usersRouter);
app.use('/reimbursements', reimbursementsRouter);


app.listen(port, () => {
    console.log('app started on port: ' + port);
});