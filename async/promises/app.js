const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    setTimeout(() => {
      if (random < 0.7) {
        resolve("Returned fake data from requested URL");
      }
      reject("Connection timeout. Please make request later!");
    }, 1000);
  });
};

fakeRequest("tribo.com/api/getUser/1")
  .then((data) => {
    console.log("Done with request", data);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
