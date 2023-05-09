const router = require("express").Router();
const userRoutes = require("./userRoutes");
const itemRoutes = require("./itemRoutes");
const userItemRoutes = require("./userItemRoutes")

router.use("/user", userRoutes);
router.use("/item", itemRoutes);
router.use("/userItem", userItemRoutes);

module.exports = router;
