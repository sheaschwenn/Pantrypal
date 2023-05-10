const router = require("express").Router();
const { User, Item, UserItem } = require("../models");
const withAuth = require("../utils/auth");

// Define a route handler for GET requests to the /dashboard endpoint
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    // Find the user in the database with the ID stored in the session
    const userData = await User.findByPk(req.session.user_id);

    // Render the dashboard view with the user data and logged-in status
    res.render("dashboard", {
      userData: userData.get({ plain: true }), // Convert the user data to a plain object for rendering
      loggedIn: req.session.loggedIn, // Set the logged-in status for the view
    });
  } catch (err) {
    // If there was an error with the database query, send a JSON error response with a 500 status code
    res.status(500).json(err);
  }
});

// I changed to /dashboard/products and added withAuth. Is this correct?
router.get("/dashboard/products", withAuth, async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        Category,
        {
          model: Tag,
          through: ProductTag,
        },
      ],
    });
    return res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// users food items that theyve added to their shopping list and their pantry
//user table item table join table useritem table
