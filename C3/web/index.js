/**
 * 描述
 * @date 2022-11-13
 * @param {RequestInfo | URL} url
 * @param {RequestInit | undefined} options
 * @returns {Promise<any>}
 */
async function callAPI(url, options = {}) {
  return await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // 設定之後，每個請求會自動帶入cookie
    ...options,
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
}

function getUserFormValues() {
  const form = document.getElementById("user-form");
  const { user, psw } = form.elements;
  return {
    userName: user.value,
    psw: psw.value,
  };
}

document.body.onload = () => {
  console.log("ready");

  const submit = document.getElementById("send");
  submit.addEventListener("click", async () => {
    const data = getUserFormValues();
    console.log(data);

    const result = await callAPI("http://127.0.0.1:4567/login", {
      method: "POST",
      body: JSON.stringify(data),
    });

    console.log(result);
  });

  const testBtn = document.getElementById("test-btn");
  testBtn.addEventListener("click", async () => {
    const response = await callAPI("http://127.0.0.1:4567", {
      method: "GET",
    });
    const responseBlock = document.getElementById("response-block");
    responseBlock.innerHTML = `
        <pre>${JSON.stringify(response, null, 2)}</pre>
      `;
  });

  const testBtn2 = document.getElementById("test-btn2");
  testBtn2.addEventListener("click", async () => {
    // 可以開另一隻服務測試，測試結果發現不會傳送過去
    const response = await callAPI("http://127.0.0.1:4568/", {
      method: "GET",
    });
    const responseBlock = document.getElementById("response-block");
    responseBlock.innerHTML = `
        <pre>${JSON.stringify(response, null, 2)}</pre>
      `;
  });
};
