import { http } from "./http";
import { ui } from "./ui";

// Variables
const apiUrl = "http://localhost:3000/posts";

// Get posts on DOM load
document.addEventListener("DOMContentLoaded", getPosts);

// Listen for add post
document.querySelector(".post-submit").addEventListener("click", submitPost);

// Listener for delete post
document.querySelector("#posts").addEventListener("click", deletePost);

// Listen for Edit State
document.querySelector("#posts").addEventListener("click", enableEdit);

// Listen for Cancel Button Click
document.querySelector(".card-form").addEventListener("click", cancelEdit);

// Get Posts
async function getPosts() {
  const getResp = await http.get(apiUrl);
  ui.showPosts(getResp);
}

// Submit Post
async function submitPost() {
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  const id = document.querySelector("#id").value;

  const data = {
    title, // this is the same as title: title since key/value have same name
    body,
  };

  // Validate form inputs
  if (title === "" || body === "") {
    ui.showAlert("Please fill in fields", "alert alert-danger");
  } else {
    if (id === "") {
      // Submit post, clear fields and refetch
      await http.post(apiUrl, data);
      ui.showAlert("Post Added", "alert alert-success");
      ui.clearFields();
      getPosts();
    } else {
      // Update posst, clear fields and refetch
      await http.put(`${apiUrl}/${id}`, data);
      ui.showAlert("Post Updated", "alert alert-success");
      ui.changeFormState("add");
      getPosts();
    }
  }
}

// Delete Post
async function deletePost(e) {
  if (e.target.parentElement.classList.contains("delete")) {
    const id = e.target.parentElement.dataset.id;
    if (confirm("Are you sure?")) {
      await http.delete(`${apiUrl}/${id}`);
      ui.showAlert("Post Removed", "alert alert-success");
      getPosts();
    }
  }
  e.preventDefault();
}

// Enable Edit State
async function enableEdit(e) {
  if (e.target.parentElement.classList.contains("edit")) {
    const id = e.target.parentElement.dataset.id;
    const title =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body,
    };

    ui.fillForm(data);
  }
  e.preventDefault();
}

// Cancel Edit State
async function cancelEdit(e) {
  if (e.target.classList.contains("post-cancel")) {
    ui.changeFormState("add");
  }

  e.preventDefault();
}

// Update Post
