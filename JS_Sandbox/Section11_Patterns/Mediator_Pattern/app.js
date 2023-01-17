const User = function (name) {
  this.name = name;
  this.room = null;
};

User.prototype = {
  send: function (message, to) {
    this.room.send(message, this, to);
  },
  recieve: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};

const ChatRoom = function () {
  let users = {}; // List of users

  return {
    register: function (user) {
      users[user.name] = user;
      user.room = this;
    },
    send: function (message, from, to) {
      if (to) {
        // Single User
        to.recieve(message, from);
      } else {
        // Whole Room
        for (user in users) {
          if (users[user] !== from) {
            users[user].recieve(message, from);
          }
        }
      }
    },
  };
};

const brad = new User("Brad");
const jeff = new User("Jeff");
const jill = new User("Jill");

const chatRoom = new ChatRoom();

chatRoom.register(brad);
chatRoom.register(jeff);
chatRoom.register(jill);

brad.send("Hello Jeff", jeff);
jill.send("Hello Brad, you are the best dev ever!!!!", brad);
jeff.send("Hello Room!!!!");
