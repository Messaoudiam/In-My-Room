/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
// const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data
    await database.query("delete from shoe");
    queries.push(
      database.query(
        `INSERT INTO shoe (brand, model, name, color, date_release) VALUES
            ('Air Jordan', '1', 'Chicago', 'WHITE/BLACK-RED', '16/09/1985'),
            ('Nike', 'Cortez', 'Forest Gump', 'WHITE/VARSITY RED-VARSITY ROYAL', '28/02/2015'),
            ('Onitsuka Tiger', 'Mexico 66', 'Kill Bill', 'YELLOW/BLACK', '01/01/2017'),
            ('Nike', 'Air Yeezy 2', 'Red October', 'RED', '09/02/2014'),
            ('Adidas', 'Stan Smith', 'White Green', 'RUNNING WHITE/RUNNING WHITE/FAIRWAY', '1964'),
            ('Adidas', 'Yeezy Boost 350', 'Turtledove', 'TURTLEDOVE/BLUE GRAPHITE/CHALK WHITE', '27/06/2015'),
            ('Air Jordan', '1', 'Maison Chateau Rouge', 'PALE VANILLA/CINNAMON', '30/11/2019')`
      )
    );

    await database.query("delete from category");
    queries.push(
      database.query(
        `INSERT INTO category (name) VALUES
            ('Running'),
            ('Basketball'),
            ('Training'),
            ('Skate'),
            ('Trail'),
            ('Fashion'),
            ('Retro'),
            ('Collab')`
      )
    );
    // Optional: Truncate tables (remove existing data)
    // await database.query("truncate item");

    // Insert fake data into the 'item' table
    // for (let i = 0; i < 10; i += 1) {
    //   queries.push(
    //     database.query("insert into item(title) values (?)", [
    //       faker.lorem.word(),
    //     ])
    //   );
    // }

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
