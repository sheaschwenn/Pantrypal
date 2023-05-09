const router = require('express').Router();
const {User, Item, UserItem} = require('../models')
const withAuth = require('../utils/auth')


// router.get('/', async (req,res)=>{
//     try{
//         const itemData = await Item.findAll({

//         })
//     }
// })