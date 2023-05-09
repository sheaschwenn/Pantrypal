const router = require("express").Router();
const { User, Item, UserItem } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const userItemData = await UserItem.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(userItemData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const userItemData = await UserItem.update(
      {
        bought: true,
      },
      {
        where: {
          id: req.params.id,
          item_id: res.body.item_id,
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
        item_id: res.body.item_id,
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
