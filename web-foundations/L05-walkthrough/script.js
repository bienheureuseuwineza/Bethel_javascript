const L05Promise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Testing: 1, 2, 3!");
  }, 5000);
});
L05Promise.then((result) => console.log(result));
