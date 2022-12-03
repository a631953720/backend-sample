const express = require("express");
const { getAllData, getDataByKey, createOrUpdateData, deleteData } = require("../lib/data");

const app = express();
const port = 4567;

app.use(express.json());

// GET 取得
// 1. 取得所有學生的分數
app.get('/source', (req, res) => {
  const data = getAllData();
  res.status(200).json(data);
});


// 127.0.0.1:4567/andy => user = andy
// 2. 取得單一學生分數，透過學生名字(以不重複為前提)取得分數
app.get('/source/:user', (req, res) => {
  const { user } = req.params;

  const data = getDataByKey(user);
  
  // 判斷data為真 {} [] ' ' 'sss' 1 
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).json({ errorMessage: "User not found" });
  }
});

// 3. 取得分數到餘60分的學生 (額外的流程來處理這段資料的判斷 source > 60)

// POST 新增
// PUT 更新，可以設計為部分更新 (跟POST相同邏輯，所以不額外寫)
app.post('/source', (req, res) => {
  const { body } = req;
  const { userName, source } = body;

  // 檢查資料的內容是否符合預期
  if (typeof userName === 'string' && typeof source === 'number') {
    // 資料的操作有可能失敗，所以會需要檢查資源修改是否正常
    const isUpdateSuccess = createOrUpdateData(userName, {
      source, // source: source
    });

    if (isUpdateSuccess) {
      res.status(201).json({ message: "user create success" });
    } else {
      res.status(500).json({ errorMessage: "user create fail" });
    }
  } else {
    res.status(400).json({ errorMessage: "userName must be a string and source must be a number" });
  }
});

// DELETE 刪除
app.delete('/source/:user', (req, res) => {
  const { user } = req.params;

  const data = getDataByKey(user);
  if (!data) {
    // 樣板字串
    return res.status(404).json({ errorMessage: `User ${user} not found` });
  }

  const isDeleteSuccess = deleteData(user);

  if (isDeleteSuccess) {
    return res.status(200).json({ message: "delete user success" });
  } else {
    return res.status(500).json({ errorMessage: "delete user fail" });
  }
});

app.listen(port, () => {
  console.log(`server listen at port: ${port}`);
});

console.log(getAllData());
console.log(deleteData('aaa'));
console.log(
  createOrUpdateData("aaa", {
    source: 44,
  })
);
console.log(getDataByKey('aaa'));
