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
    await database.query("delete from user");
    queries.push(
      database.query(
        `INSERT INTO user (admin, nickname, email, password) VALUES
            ('1', 'Mess', 'mess@gmail.com', '123abcABC@@'),
            ('0', 'AliLeBoss', 'alileboss@gmail.com', '123abcABC@@'),
            ('0', 'GaetanLeBG', 'gaetanlebg@gmail.com', '123abcABC@@')`
      )
    );

    await database.query("delete from shoe");
    queries.push(
      database.query(
        `INSERT INTO shoe (brand, model, name, color, image, date_release) VALUES
            ('Air Jordan', '1', 'Chicago', 'WHITE/BLACK-RED', '/assets/aj1chi.png', '16/09/1985'),
            ('Nike', 'Cortez', 'Forest Gump', 'WHITE/VARSITY RED-VARSITY ROYAL', '/assets/cortavavez.png', '28/02/2015'),
            ('Onitsuka Tiger', 'Mexico 66', 'Kill Bill', 'YELLOW/BLACK', '/assets/otmkb.png', '01/01/2017'),
            ('Nike', 'Air Yeezy 2', 'Red October', 'RED', '/assets/ay1ro.png', '09/02/2014'),
            ('Adidas', 'Stan Smith', 'White Green', 'RUNNING WHITE/RUNNING WHITE/FAIRWAY', '/assets/stans.png', '1964'),
            ('Adidas', 'Yeezy Boost 350', 'Turtledove', 'TURTLEDOVE/BLUE GRAPHITE/CHALK WHITE', '/assets/ybtd.png', '27/06/2015'),
            ('Air Jordan', '1', 'Maison Chateau Rouge', 'PALE VANILLA/CINNAMON', '/assets/aj1maison.png', '30/11/2019')`
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
