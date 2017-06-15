import express from 'express';
import open    from 'open';
import compression from 'compression';

const  port    = 3000,
       app     = express();

app.use(compression());
app.use(express.static('dist'));

app.listen(port, (err) => {
  err ? console.log(err) : open('http://localhost:' + port) ;
});
