"use strict";

const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");

const output = {
  list: (req, res) => {
    res.render("board/list");
  },
  view: (req, res) => {
    res.render("board/view");
  },
  edit: (req, res) => {
    res.render("board/edit");
  },
};

// const process = {
//   list: (req, res) => {
//     const user = new User(req.body);
//     const response = user.login();
//     return res.json(response);
//   },

// };

module.exports = { output };
