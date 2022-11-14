const express = require("express");
const cors = require("cors");
const session = require("express-session");
const { getUserPsw } = require("../lib/user");

const app = express();
const port = 4567;

app.use(
  cors({
    origin: "http://127.0.0.1:5500", // '*' 的話瀏覽器會拒絕寫入token
    credentials: true, // 前端credentials設定為'include'的情況下需要打開這個設定，才能寫入token
  })
);
app.use(express.json());

// Express middleware，這樣寫會讓所有API近來之前先做一些處理
app.use(
  session({
    secret: "mySecret", //
    name: "user", // 存在cookie的key
    saveUninitialized: false, // 以此範例，沒登入的使用者不會更新session的內容
    resave: true, // 打開會一直保持同一個session
    cookie: {
      maxAge: 30 * 1000, // 設定過期時間
      secure: false,
    },
  })
);

app.get("/", (req, res) => {
  const sessionID = req.sessionID;
  const { user, isLogin } = req.session;

  console.log({ sessionID, user, isLogin });
  if (isLogin) {
    return res.status(200).json({ message: "我還記得你" });
  } else {
    return res.status(401).json({ message: "你是不是沒登入????" });
  }
});

// POST /login
// 實作簡單的登入流程
// Tips: 可以用下面的方式來做簡單測試
console.log(getUserPsw('andy')); // 會得到密碼 1234562

app.post("/login", (req, res) => {
  const { userName, psw } = req.body;
  // 先記錄誰來過
  req.session.user = userName;
  const queryPsw = getUserPsw(userName);
  if (!queryPsw) {
    return res.status(404).json({ message: "沒這個用戶" });
  }
  if (psw === getUserPsw(userName)) {
    // 寫入資料到session store內
    req.session.isLogin = true;
    return res.status(200).json({ message: "登入成功" });
  } else {
    req.session.isLogin = false;
    return res.status(401).json({ message: "資料怪怪der" });
  }
});

app.listen(port, () => {
  console.log(`server listen at port: ${port}`);
});
