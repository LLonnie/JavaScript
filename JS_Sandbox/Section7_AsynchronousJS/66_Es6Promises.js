const posts = [
  {
    title: "Post 1",
    body: "This is post one.",
  },
  {
    title: "Post 2",
    body: "This is post two.",
  },
];

// Asynchronus approach using es6 Promises

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      posts.push(post);

      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Something went wrong");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post 3", body: "This is post three." })
  .then(getPosts)
  .catch((err) => {
    console.log(err);
  });
