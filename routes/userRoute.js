const express = require("express")
const router = express.Router();
const User = require("../models/usermodel");
const usermodel = require("../models/usermodel");



router.post("/register", (req,res) =>{

      const {Name, Email, Password} = req.body
      const newUser = new User({Name, Email, Password})

      try{
         newUser.save()
         res.send("User registered succesfully")
      } catch(error){
         res.status(400).json({message: error})     
      }
});

router.post("/login",async (req,res) =>{

   const { Email, Password} = req.body
   // const newUser = new User({Name, Email, Password})

   try{
      const user= await User.find({Email, Password})
      if(user.length>0){
         
        const currentUser = {
               Name: user[0].Name,
               Email:user[0].Email,
               isAdmin: user[0].isAdmin,
               _id : user[0]._id
               
               
            
        }
         res.send(currentUser);
      }
      else{
        return res.status(400).json({message: "user  login failed"}) 
      }
   } catch(error){
      return  res.status(400).json({message: "something went wrong"}) 
   }
});

router.get("/getallusers", async (req, res)=> {
   try{
      const users = await User.find({})
      res.send(users)

   }catch(error){
      return res.status(400).json({meassage:error})

   }
})

router.post("/deleteuser", async (req, res)=> {

    const userid = req.body.userid
    try{
      await User.findOneAndDelete({_id : userid})
      res.send("user deleted sucesfully")

    }catch(error){
       return res.status(400).json({message:error})

    }

})    

module.exports= router