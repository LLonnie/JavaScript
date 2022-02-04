document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR object.
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open("GET", "./59_data.txt", true);

  // Optional - Used for spinners/loaders
  // xhr.onprogress = function () {
  //   console.log("READY STATE: " + this.readyState);
  // };

  // ONLOAD
  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    } else {
      console.log("Error, the request was not successful.");
    }
  };

  // This is old version of onload
  // xhr.onreadystatechange = function () {
  //   if (this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // };

  xhr.onerror = function () {
    console.log("Request Error");
  };

  // SEND
  xhr.send();
}

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready
