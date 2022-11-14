const path = require("path");
const { readAndParseJsonFile, updateJsonFile } = require("../utils");

const filePath = path.join(__dirname, "data.json");

/**
 * 取得所有資料
 * @date 2022-11-10
 * @returns {any}
 */
function getAllData() {
  return readAndParseJsonFile(filePath);
}

/**
 * 取得特定資料
 * @date 2022-11-10
 * @param {string} key 物件的屬性名稱
 * @returns {any}
 */
function getDataByKey(key) {
  const data = readAndParseJsonFile(filePath);
  return data[key];
}

/**
 * 更新Json file的內容
 * @date 2022-11-10
 * @param {string} key
 * @param {any} value
 * @returns {boolean}
 */
function createOrUpdateData(key, value) {
  try {
    const data = readAndParseJsonFile(filePath);
    data[key] = value;
    const newData = JSON.stringify(data, null, 2);

    updateJsonFile(filePath, newData);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

/**
 * 刪除Json file的內容
 * @date 2022-11-10
 * @param {string} key
 * @returns {boolean}
 */
function deleteData(key) {
  try {
    const data = readAndParseJsonFile(filePath);
    delete data[key];
    const newData = JSON.stringify(data, null, 2);

    updateJsonFile(filePath, newData);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

module.exports = {
  getAllData,
  getDataByKey,
  createOrUpdateData,
  deleteData,
};
