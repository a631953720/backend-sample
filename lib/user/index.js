const path = require("path");
const { readAndParseJsonFile } = require("../utils");

const filePath = path.join(__dirname, "user.json");

/**
 * 取得使用者密碼
 * @date 2022-11-14
 * @param {string} userName
 * @returns {string | undefined}
 */
function getUserPsw(userName) {
  const user = readAndParseJsonFile(filePath);
  return user[userName]?.psw;
}

module.exports = {
  getUserPsw
};
