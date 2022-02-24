import express from 'express';
import mongoose from 'mongoose';

const app   =   express();
const port  =   5500;

const mongoURL  =   "mongodb+srv://alejandropl07:MongoDBConnect@cluster0.rico8.mongodb.net/clientes?retryWrites=true&w=majority"

mongoose.connect(mongoURL, {useNewUrlParser:true, useUnifiedTopology:true})

app.use(express.json({limit:"50mb"}))

app.post("/api/clients",    (req,res)   =>  {
    console.log("dummy EndPoint");
    res.send("You have posted something")
})

app.get("/" ,   (req,res)  =>  {
    res.send("Hello world");
});

app.listen(port, () =>  {
    console.log(`Server is listening at http//localhost:${port}`)
})