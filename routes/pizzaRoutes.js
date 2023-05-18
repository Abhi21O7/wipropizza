const express=require("express")
const router=express.Router();
const pizza=require('../models/pizzamodel');
// const { Pizza } = require("../client/src/components/Pizza");
// const pizzamodel = require("../models/pizzamodel");
// const pizzamodel = require("../models/pizzamodel");
// const { default: Pizza } = require("../client/src/components/Pizza");

router.get("/getallpizzas", async(req,res)=> {

    try{
        const pizzas = await pizza.find({})
        res.send(pizzas);
    } catch(error) {
        return res.status(400).json({message:error});

    }

});

router.post("/addpizza", async(req,res) =>{
    const Pizza= req.body.pizza
    try{
    const newpizza = new pizza({
        name:Pizza.name,
        image:Pizza.image,
        varients:["small", "medium", "large"],
        description:Pizza.description,
        category:Pizza.category,
        prices: [Pizza.prices]

    })
    await newpizza.save()
    res.send('NEW PIZZA ADDES SUCESSFULLY')
}catch(error){
    return res.status(400).json({message:error})

}

});



router.post("/getpizzabyid", async (req, res)=>{
    const pizzaid = req.body.pizzaid

try{
    const Pizza = await pizza.findOne({_id :  pizzaid })
    res.send(Pizza)
}catch(error){
    return res. status(400).json({message:error});

}
});
router.post("/editpizza", async(req,res) => {
     const editedpizza = req.body.editedpizza

     try{
        const Pizza = await pizza.findOne({_id : editedpizza._id})

        Pizza.name = editedpizza.name,
        Pizza.description = editedpizza.description,
        Pizza.image=editedpizza.image,
        Pizza.category=editedpizza.category,
        Pizza.prices=[editedpizza.prices]

         await Pizza.save()
         res.send('pizza Details edited sucessfully')
     }catch(error) {
        return res.status(400).json({message:error})
     }
})

router.post("/deletepizza", async(req,res) => {

    const pizzaid = req.body.pizzaid
    
    try{
        await pizza.findOneAndDelete({_id: pizzaid})
        res.send('pizza deleted sucesfully')

    }catch(error){
        return res.status(400).json({message:error})

    }

})
module.exports = router;