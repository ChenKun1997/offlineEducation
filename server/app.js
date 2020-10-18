const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const config = require('./config');
const path = require('path');

const app = express();

// 准备session存放的仓库
var store = new MongoDBStore({
  uri: `mongodb://${config.db_host}:${config.db_port}/${config.db_name}`,
  collection: 'sessions'
});
// Catch errors
store.on('error', function(error) {
  console.log(error);
});
app.use(require('express-session')({
  secret: 'This is a secret',
  name: 'SESSIONID',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store: store,
  resave: true,
  saveUninitialized: true
}));



app.use(express.urlencoded());
app.use(express.json());


app.use('/pc/static',express.static(path.join(__dirname,'./www')))

app.use('/mobile/static',express.static(path.join(__dirname,'./app')))





app.use('/pc/api/user', require('./routers/apiRouter'));
app.use('/pc/app/course',require('./routers/courseRouter'));


app.use('/mobile/app/course',require('./routers/courseRouter'));
app.use('/mobile/app/user', require('./routers/appRouter'));
app.use('/mobile/app/order',require('./routers/OrderRouter'))


app.use('/mobile',(req,res)=>{
  res.sendFile(path.join(__dirname,'./app/index.html'))
})
app.use('/pc',(req,res)=>{
  res.sendFile(path.join(__dirname,'./www/index.html'))
})

module.exports = app;





 

 
