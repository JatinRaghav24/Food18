import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodrouts.js"
import userRouter from "./routes/userroutes.js"
import 'dotenv/config'
import cartRouter from "./routes/cartroutes.js"
import orderRouter from "./routes/orderroute.js"




const app = express()
const port = process.env.port || 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();


//Api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get('/', (req, res) => {
  res.send('thakur khaarnak')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

//mongodb+srv://food18:food18@food18.4j1vn2u.mongodb.net/?retryWrites=true&w=majority&appName=Food18