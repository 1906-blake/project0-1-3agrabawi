// import express from 'express';
// import bodyParser from 'body-parser';
// import session from 'express-session';
// import { usersRouter } from './routers/usersRouter';
// import { reimbursementsRouter } from './routers/reimbursementRouter';
// import { authRouter } from './routers/loginRouter';

// const appStart = express();

// const sess = {
//     secret: 'secretSecretIGotASecret',
//     cookie: {secure: false},
//     resave: false,
//     saveUnitialized: false
// };

// appStart.use(session(sess));
// appStart.use(bodyParser.json());
// appStart.use((req, resp, next) => {
//     (process.env.MOVIE_API_STAGE === 'prod')
//       ? resp.header('Access-Control-Allow-Origin', process.env.DEMO_APP_URL)
//       : resp.header('Access-Control-Allow-Origin', `http://localhost:5432`);
//     resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     resp.header('Access-Control-Allow-Credentials', 'true');
//     resp.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
//     next();
//    });
// appStart.use('/users', usersRouter);
// appStart.use('/reimbursements', reimbursementsRouter);
// appStart.use('/login', authRouter);

// appStart.listen(3000);

const express = require('express')
const bodyParser = require('body-parser')
export const app = require('express')()
const session= require('express-session')
const port = 3300

 app.use((req, resp, next) => {
    resp.header('Access-Control-Allow-Origin', `http://localhost:5432`);
   resp.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   resp.header('Access-Control-Allow-Credentials', 'true');
   resp.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
   next();
})

const userRouter= require( './routers/usersRouter')
const loginRouter= require( './routers/loginRouter')
const reimRouter= require( './routers/reimRouter')


app.use('/login', express.static( 'webpages'))
app.use('', express.static( 'webpages'))
app.use('/users', express.static( 'webpages'))
app.use('/reimbursements', express.static( 'webpages'))


app.use(bodyParser.json())
app.use(express.json())  // to support JSON-encoded bodies
app.use(express.urlencoded()) // to support URL-encoded bodies

app.use((req, res, next) => {
  console.log(`request was made with url: ${req.path} and method: ${req.method}`);
  next(); // will pass the request on to search for the next piece of middleware
});


const sess = {
    secret: 'lottery',
    cookie: { secure: false },
    resave: false,
    saveUninitialized: false
  };
 
  app.use(session(sess));
  

 app.get('', async  function (req,res){ await res.sendFile(path.resolve('webpages/index.ts'))})
 let  path = require('path');

app.get('/login', async function (req,res){ await res.sendFile(path.resolve('webpages/login/login.html'))})

app.get('/reimbursements', async function (req,res){ 
   
  if(req.session.user.role === 'admin' || req.session.user.role === 'finance-manager'){ 
    await res.sendFile(path.resolve('webpages/Reimbursement/myreimbursement.html'))}
  
  else{
    console.log("Invalid")

  }})



app.get('/users', async function (req,res){
  
  if(req.session.user.role === 'admin' || req.session.user.role === 'finance-manager'){ 
    await res.sendFile(path.resolve('webpages/users/manage-users.html'))}
  
  else{
    await res.sendFile(path.resolve('webpages/users/user.html'))

  }
  
})



app.get('/logout', function(req, res){})
app.use('/users', userRouter);
app.use('/login',loginRouter);
app.use('/reimbursements',reimRouter);


  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })
  