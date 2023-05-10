const router = require('express').Router();
const withAuth = require('../../utils/auth')
const {User, Item, UserItem} = require('../../models')

module.exports = router

router.get('/', withAuth, async (req,res) => {
    const searchItem = req.query.search
    try{
        const findItem = await Item.findAll({
            where:{
                name: {
                    [Op.like]: `%${searchItem}%`
                }
            }
        })
        res.status(200).json({name:findItem})
    }catch(err){
        res.status(500).json(err)
    }
})