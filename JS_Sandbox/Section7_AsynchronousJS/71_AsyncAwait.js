// async function myFunc() {
//   // return "Hello";

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello2"), 1000);
//   });

//   const error = false;

//   if (!error) {
//     const res = await promise; // This will wait until promise is resolved.
//     return res;
//   } else {
//     await Promise.reject(new Error("Something went wrong"));
//   }
// }

// myFunc()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

async function getUsers() {
  // await response of the fetch call.
  // Only proceed once the promise is resolved.
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // only proceed once the promise is resolved
  const data = await response.json();
  return data;
}

getUsers().then((users) => console.log(users));
