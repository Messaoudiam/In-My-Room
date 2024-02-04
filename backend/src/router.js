const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const shoeControllers = require("./controllers/shoeControllers");

// Route to get a list of items
router.get("/shoes", shoeControllers.browse);

// Route to get a specific item by ID
router.get("/shoes/:id", shoeControllers.read);

// Route to add a new item
router.post("/shoes", shoeControllers.add);

// Route to patch an existant item
router.patch("/shoes/:id", shoeControllers.edit);

/* ************************************************************************* */

module.exports = router;
