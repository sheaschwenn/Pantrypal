const router = require("express").Router();
const { User, Item, UserItem } = require("../../models");
const withAuth = require("../../utils/auth");

// router.post("/", withAuth, async (req, res) => {
//   try {
//     const userItemData = await UserItem.create(
//       {
//       include:[{Item}],
//       ...req.body,
//       user_id: req.session.user_id,
//     },
//     {
//       where:{
//         item_id : req.body.
//       }
//     }
//     );
//     res.status(200).json(userItemData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.post("/", withAuth, async (req, res) => {
    try {
      const itemData = await Item.findOne({
        where: {
          name:req.body.foodName
        }
      })
      if(itemData){
        const userItemData = await UserItem.create({
          ...req.body,
          user_id: req.session.user_id,
          item_id: itemData.id
        })
        res.status(200).json(userItemData)
      }else{
        res.status(400).json({message:"item not found"})
      }
    }catch(err){
      res.status(500).json(err)
    }
  })

router.get("/",withAuth,async (req, res) => {{
  const userItemData = await UserItem.findAll({where:{user_id: req.session.user_id}})
  res.status(200).json(userItemData);
}})


router.patch("/:id", withAuth, async (req, res) => {
  try {
    const userItemData = await UserItem.update(
      {
        bought: true,
      },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );
    if (!userItemData) {
      res.status(404).json({ message: "No item with this id!" });
      return;
    }
    res.status(200).json(userItemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const userItemData = await UserItem.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!userItemData) {
      res.status(404).json({ message: "No item with this id!" });
      return;
    }
    res.status(200).json(userItemData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
