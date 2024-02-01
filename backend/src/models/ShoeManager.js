const AbstractManager = require("./AbstractManager");

class ShoeManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "shoe" });
  }

  // The C of CRUD - Create operation

  async create(shoe) {
    const { brand, model, name, color, date_release: dateRelease } = shoe;
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `insert into ${this.table} (brand, model, name, color, date_release) values (?, ?, ?, ?, ?)`,
      [brand, model, name, color, dateRelease]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  async update(id, updatedShoeData) {
    const {
      brand,
      model,
      name,
      color,
      date_release: dateRelease,
    } = updatedShoeData;
    await this.database.query(
      `UPDATE ${this.table} SET brand = ?, model = ?, name = ?, color = ?, date_release = ? WHERE id = ?`,
      [brand, model, name, color, dateRelease, id]
    );
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ShoeManager;
