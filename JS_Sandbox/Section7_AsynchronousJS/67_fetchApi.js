document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJSON);
document.getElementById("button3").addEventListener("click", getExternal);

function getText() {
  fetch("67_test.txt")
    .then((resp) => resp.text())
    // .then(handleErrors)
    .then((data) => (document.getElementById("output").innerHTML = data))
    .catch((err) => console.log(err));
  // fetch("67_test.txt")
  //   .then((resp) => {
  //     return resp.text();
  //   })
  //   // .then(handleErrors)
  //   .then((data) => {
  //     document.getElementById("output").innerHTML = data;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
}

function getJSON() {
  fetch("67_posts.json")
    .then((resp) => resp.json())
    // .then(handleErrors)
    .then((data) => {
      let output = "";
      data.forEach((post) => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
  // fetch("67_posts.json")
  //   .then((resp) => {
  //     return resp.json();
  //   })
  //   // .then(handleErrors)
  //   .then((data) => {
  //     let output = "";
  //     data.forEach((post) => {
  //       output += `<li>${post.title}</li>`;
  //     });
  //     document.getElementById("output").innerHTML = output;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
}

function getExternal() {
  fetch("https://api.github.com/users")
    .then((resp) => resp.json())
    // .then(handleErrors)
    .then((data) => {
      let output = "";
      data.forEach((user) => (output += `<li>${user.login}</li>`));
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
  // fetch("https://api.github.com/users")
  //   .then((resp) => {
  //     return resp.json();
  //   })
  //   // .then(handleErrors)
  //   .then((data) => {
  //     let output = "";
  //     data.forEach((user) => {
  //       output += `<li>${user.login}</li>`;
  //     });
  //     document.getElementById("output").innerHTML = output;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
}

// function handleErrors(resp) {
//   if (!resp.ok) {
//     throw new Error(resp.error);
//   }
//   return resp;
// }
