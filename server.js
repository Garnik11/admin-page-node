const express = require('express')
const app = express()
let cors=require('cors')
app.use(cors())
app.use(express.json());
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const prodRouter = require('./routes/product_routes')
const categoryRouter = require('./routes/category_routes');
const user_router = require('./routes/user_routes');

app.use('/prod',prodRouter)
app.use('/cat', categoryRouter)
app.use("/user", user_router)









app.listen(5000)