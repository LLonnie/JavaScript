function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function (fn) {
    this.observers = this.observers.filter(function (item) {
      if (item != fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function () {
    this.observers.forEach((observer) => {
      observer.call();
    });
  },
};

const click = new EventObserver();

// Event listeners
document.querySelector(".sub-ms").addEventListener("click", () => {
  click.subscribe(getCurrentMilliseconds);
});
document.querySelector(".unsub-ms").addEventListener("click", () => {
  click.unsubscribe(getCurrentMilliseconds);
});
document.querySelector(".sub-s").addEventListener("click", () => {
  click.subscribe(getCurrentSeconds);
});
document.querySelector(".unsub-s").addEventListener("click", () => {
  click.unsubscribe(getCurrentSeconds);
});
document.querySelector(".fire").addEventListener("click", () => {
  click.fire();
});

// Click Handler
const getCurrentMilliseconds = () => {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};
const getCurrentSeconds = () => {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
