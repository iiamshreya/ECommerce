const RunServer = require("./database/connection");
const express = require("express")
const userRoute = require('./routes/userRoute');
const productRoutes = require('./routes/productRoutes');
const paymentRoutes = require('./routes/paymentRoute')

const app = express()
const port = 3000

app.use('/api/v1',productRoutes)
app.use('/api/v1/user',userRoute)
app.use('/api/v1/payment',paymentRoutes)



RunServer()
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})