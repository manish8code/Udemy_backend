const express = require('express');
const app = express();
const bookRouter=require('./routes/bookRoutes');
const { loggerMiddleware } = require('./middleware/logger');



app.use(express.json()) //middleware given by express to get req as json
app.use(loggerMiddleware)

//routes
app.use('/books',bookRouter)

app.listen(8000,()=>{
    console.log("serever running succesfully")
})