var koa = require('koa');
var app = koa();


// app.use(function *(){
//   this; // is the Context
//   this.request; // is a koa Request
//   this.response; // is a koa Response
// });

app.use(function *(next) {
  try {
    yield next ; 
  } catch (err) {
    this.body = { message: err.message };
    this.status = err.status || 500;
  }
});


app.use(function *(){
  console.info(this.hostname) ;
  this.throw('name required', 400) ;
  this.body = 'Hello World';
});

app.listen(3000);