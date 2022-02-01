// Known as Sub Classes, it is a lot like Inheritance

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

// Sub Class extending Parent class
class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    // Super goes to parent class and uses its constructor.
    super(firstName, lastName); // Same as Person.call
    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer("John", "Doe", "123-456-7890", "Standard");
console.log(john);
console.log(john.greeting());
console.log(Customer.getMembershipCost());
