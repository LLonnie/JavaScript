// Init GitHub Class
const github = new GitHub();

// Init UI
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

// Add Event Listener
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // Make HTTP Call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert for user not found
      } else {
        // Show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // Clear profile
  }
});
