const user = {
  email: "jdoe@gmail.com",
};

try {
  // This will produce a reference error because the function doesn't exist.
  // myFunction();

  // Produce a Type Error
  // null.myFunction();

  // Will produce syntax error
  // eval("Hello WOrld");

  // Will produce URI Error
  // decodeURIComponent("%");

  // Can create custom errors.
  if (!user.name) {
    // throw "User has no name";
    throw new SyntaxError("User has no name");
  }
} catch (e) {
  console.log(e);
  console.log(e.message); // Way of logging the message without the error type.
  console.log(e.name); // Way of showing error type and not message
  console.log(e instanceof ReferenceError); // Test type of error.
  console.log(e instanceof TypeError);
} finally {
  // This will run no matter the result of the try-catch block.
  console.log("Finally runs regardless of result...");
}

console.log("Program continues...");
