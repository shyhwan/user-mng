"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    try {
      const { id, pw } = await UserStorage.getUserInfo(client.id);

      if (id) {
        if (id === client.id && pw === client.pw) {
          return { success: true };
        }
        return { success: false, msg: "비밀번호가 틀렸습니다." };
      }
      return { success: false, msg: "존재하지 않는 아이디입니다." };
    } catch (err) {
      return { seccess: false, msg: err };
    }
  }

  async join() {
    const client = this.body;
    const response = await UserStorage.join(client);
    return response;
  }
}

module.exports = User;
