import express from 'express';
import http from 'http';
import bp from 'body-parser';
const app =express();
app.set('port',9000);
app.use(bp.json({limit: '10mb'}));
app.use(bp.text());
app.use(bp.urlencoded({extended: true}));
app.get("/",(req,res)=>{
  res.status(200).send("Test");
});
http.createServer(app).listen(app.get('port'),()=>{
  console.log('Server running');
});
