const router = require("express").Router();
const { User, Item, UserItem } = require("../models");
const withAuth = require("../utils/auth");

// Define a route handler for GET requests to the /dashboard endpoint
// add withAuth
router.get("/", withAuth, async (req, res) => {
  try {
    // Find the user in the database with the ID stored in the session
    const userData = await User.findOne({
      attributes: { exclude: ["password"] },
      include: [{model: Item, through: UserItem}],
      where: {id: req.session.user_id},
    });
    const items = userData.get({ plain: true});
    // Render the dashboard view with the user data and logged-in status
    res.render("dashboard", {...items,
      logged_in: req.session.logged_in, // Set the logged-in status for the view
    });
  } catch (err) {
    // If there was an error with the database query, send a JSON error response with a 500 status code
    res.status(500).json(err);
  }
});



// I changed to /dashboard/products and added withAuth. Is this correct?
// router.get("/products", withAuth, async (req, res) => {
//   try {
//     const products = await Product.findAll({
//       include: [
//         Category,
//         {
//           model: Tag,
//           through: ProductTag,
//         },
//       ],
//     });
//     return res.json(products);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;

// users food items that theyve added to their shopping list and their pantry
//user table item table join table useritem table
