// const express = require("express");

// const router = express.Router();

// const Store = require('../models/storeModel')




// router.post("/addstore", async (req, res) => {

//     const { storeName, storeLocation, storeContact, storeAdress } = req.body;



//     try {

//         const newStore = await new Store({ storeName, storeLocation, storeContact, storeAdress });

//         newStore.save();

//         res.status(200).json({

//             message: "New Store Added success",

//         });

//     } catch (error) {

//         res.status(400).json({

//             message: error,

//         });

//     }

// });




// router.get("/getallstores", async (req, res) => {

//     try {

//         const store = await Store.find({});

//         res.status(200).send(store);

//     } catch (error) {

//         res.status(404).json({ message: error.stack });

//     }

// });




// router.post("/deletestore", async (req, res) => {

//     const storeid = req.body.storeid;

//     try {

//         await Store.findOneAndDelete({ _id: storeid });

//         res.status(200).send("Store Deleted");

//     } catch (error) {

//         res.status(404).json({ message: error.stack });

//     }

// });




// module.exports = router;
