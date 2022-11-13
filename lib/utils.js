const fs = require("fs");

/**
 * 讀取檔案並執行Json parse
 * @date 2022-11-10
 * @param {string} filePath
 * @returns {any}
 */
 function readAndParseJsonFile(filePath) {
  const buffer = fs.readFileSync(filePath);

  return JSON.parse(buffer.toString());
}

/**
 * 寫入新的資料到Json檔案內
 * @date 2022-11-10
 * @param {string} filePath
 * @param {string} data
 * @returns {void}
 */
function updateJsonFile(filePath, data) {
  fs.writeFileSync(filePath, data);
}

module.exports = {
  readAndParseJsonFile,
  updateJsonFile
};
