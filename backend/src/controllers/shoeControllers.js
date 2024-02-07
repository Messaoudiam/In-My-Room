// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const shoes = await tables.shoe.readAll();

    // Respond with the items in JSON format
    res.json(shoes);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const shoe = await tables.shoe.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (shoe == null) {
      res.sendStatus(404);
    } else {
      res.json(shoe);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  // Extract the updated item data from the request body
  const updatedShoeData = req.body;

  try {
    // Update the item in the database based on the provided ID
    const success = await tables.shoe.update(req.params.id, updatedShoeData);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with success status
    if (!success) {
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const shoe = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.shoe.create(shoe);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    await tables.shoe.delete(id);
    res.status(200).json({ message: "your shoe is deleted" });
  } catch (err) {
    res.status(404).json({ err: "your shoe is not deleted" });
  }
  next();
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
