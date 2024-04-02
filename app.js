const express = require('express');
const bodyparser = require('body-parser');
const userRouter = require('./routes/user.routes');
const emailRouter = require('./routes/email.route');



var manoj = Number(0);
const app = express();

app.use(bodyparser.json());

app.use((req,res,next)=>{
    manoj = manoj + 1;

    console.log(`run var manoj:${manoj}` );
    next();
});





app.use('/user',userRouter);

    
app.use('/email',emailRouter);













const post = 3000;

app.listen(post,()=>{
    console.log('server started at ',post);
})