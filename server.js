const express=require("express")
const db=require("./db")
const pizza = require('./models/pizzamodel')
// const pizzamodel = require("./models/pizzamodel")
const app=express()
app.use(express.json())
const pizzasRoutes = require('./routes/pizzaRoutes')
const userRoute = require('./routes/userRoute')

const deleteuser=require("./routes/userRoute")

app.get("/",(req,res) => {
    res.send("server working ");
});


app.use('/api/pizzas/', pizzasRoutes);
app.use('/api/users/',userRoute)
app.use("/api/users/",deleteuser)


// app.get("/getpizzas", (req,res) => {

//     const a = pizza.find({}).then((data)=>res.send(data)).catch((err)=>console.log(err))
// //     // //res.send(a)
// //   pizza.find({} , (err , data)=>{
// //         if(err){
// //             console.log(err);
// //         }
// //         else{
// //             res.send(data);
// //         }
// //     }).then((data)=>res.send(data)).catch((err)>=console.log(err));


const port=process.env.PORT || 5000;

app.listen(port,() => "server running on port port")