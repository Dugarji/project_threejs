import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import dalleRoutes from './routes/dalle.routes.js'

dotenv.config()

const app=express();
app.use(cors());
app.use(express.json({limit:"100mb"}))

app.use('/api/v1/dalle',dalleRoutes);

app.listen(10000,()=>console.log("Server started on port 8080"))
