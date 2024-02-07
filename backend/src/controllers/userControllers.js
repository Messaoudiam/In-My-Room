const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the user data from the request body
  const dataUser = req.body;
  try {
    // Insert the user into the database
    const user = await tables.user.readByEmail(dataUser.email);
    if (user !== undefined) {
      res.status(400).json("Email déjà utilisé");
    } else {
      const insertId = await tables.user.create(dataUser);
      res.status(201).json({ insertId });
    }
    // Respond with HTTP 201 (Created) and the ID of the newly inserted user
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    // Delete the item from the database
    await tables.user.delete(req.params.id);
    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
  add,
  deleteUser,
};
