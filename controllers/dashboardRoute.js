const router = require("express").Router();
const { User, Item, UserItem } = require("../models");
const withAuth = require("../utils/auth");

// router.get('/dashboard', withAuth, async (req, res) => {
//     try{
        
//     }catch(err){

//     }
// });

module.exports = router