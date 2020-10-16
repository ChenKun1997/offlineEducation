const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const config = require('./config');

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
app.use('/api/user', require('./routers/apiRouter'));
app.use('/app/user', require('./routers/appRouter'));
app.use('/app/course',require('./routers/courseRouter'));
app.use('/app/order',require('./routers/OrderRouter'))
module.exports = app;





 

 
