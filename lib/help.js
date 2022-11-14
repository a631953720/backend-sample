const { getAllData, getDataByKey, createOrUpdateData, deleteData } = require("./data");
const { getUserPsw } = require("./user");

// 取得所有資料
console.log(getAllData());

// 刪除特定資料
console.log(deleteData('aaa'));

// 新增或更新一筆資料
console.log(createOrUpdateData('aaa', {
  source: 456
}));

// 取得特定資料
console.log(getDataByKey('aaa'));

// 取得使用者密碼
console.log(getUserPsw('andy'));