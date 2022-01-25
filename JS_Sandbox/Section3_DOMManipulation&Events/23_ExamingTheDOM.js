let val;

val = document;

// html collection (Basically an array of all html )
val = document.all;
val = document.all[2];
val = document.all.length;



// Various properties
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;



// Getting Selectors (Returns collection of all passed in elements.)
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList; //DOM Token List of all classes.
val = document.links[0].classList[0]; 

val = document.images;

val = document.scripts;



// Getting attributes
val = document.scripts[2].getAttribute('src');


// This won't work because forEach is for Arrays only, and an HTML
// collection is not an array.
let scripts = document.scripts;
// scripts.forEach(function(script) {
//   console.log(script);
// })

// Turning an HTML collection into an array
let scriptsArray = Array.from(scripts);
scriptsArray.forEach(function(script) {
  console.log(script);
})


console.log(val);