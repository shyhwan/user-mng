"use strict";

const db = require("../config/db");

class UserStorage {
  static getUser(...fields) {}

  static getUserInfo(id) {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users WHERE id = ?", [id], (err, data) => {
        if (err) reject(err);
        console.log(data[0]);
        resolve(data[0]);
      });
    });
  }

  static save(userInfo) {}
}

module.exports = UserStorage;
