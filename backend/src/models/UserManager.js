const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  // Appel du Constructor de la class parent (AbstractManager),
  constructor() {
    // puis passe le nom de la table voulue en configuration
    super({ table: "user" });
  }

  // The C of CRUD - Create operation
  async create(user) {
    const { admin, nickname, email, password } = user;
    // Exécute la requête SQL "INSERT" pour ajouter du contenu dans la table sélectionnée
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (admin, nickname, email, password) values (?,?,?,?)`,
      [admin, nickname, email, password]
    );

    // Renvoie l'ID du contenu nouvellement inséré
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async readByEmailWithPassword(email) {
    // Execute the SQL SELECT query to retrieve a specific user by its email
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );
    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readByEmail(email) {
    // Execute the SQL SELECT query to retrieve a specific user by its email
    const [rows] = await this.database.query(
      `select email from ${this.table} where email = ?`,
      [email]
    );
    // Return the first row of the result, which represents the user
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    // Retourne un tableau d'items
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item
  async update(admin, nickname, email, password) {
    const [affectedRows] = await this.database.query(
      `UPDATE ${this.table} SET admin=?,nickname =?,email=?,password=? WHERE id =?`,
      [admin, nickname, email, password]
    );
    return affectedRows;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID
  async delete(id) {
    const [affectedRows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return affectedRows;
  }
}

module.exports = UserManager;
