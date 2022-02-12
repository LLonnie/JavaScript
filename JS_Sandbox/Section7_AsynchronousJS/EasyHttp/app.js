const http = new easyHTTP();

// GET all posts
// http.get(
//   "https://jsonplaceholder.typicode.com/posts",
//   function (err, response) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(response);
//     }
//   }
// );

// GET single posts
// http.get(
//   "https://jsonplaceholder.typicode.com/posts/2",
//   function (err, response) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(response);
//     }
//   }
// );

// POST new post
const data = {
  title: "Custom Post",
  body: "This is a custom post",
};

// http.post(
//   "https://jsonplaceholder.typicode.com/posts",
//   data,
//   function (err, response) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(response);
//     }
//   }
// );

// PUT to update post
// http.put(
//   "https://jsonplaceholder.typicode.com/posts/1",
//   data,
//   function (err, response) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(response);
//     }
//   }
// );

// DELETE post.
http.delete(
  "https://jsonplaceholder.typicode.com/posts/1",
  function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  }
);
