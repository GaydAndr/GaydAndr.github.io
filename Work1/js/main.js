'use strict';

class Users {
  constructor(op) {
    this.name = op.name;
    this.age = op.age;
    this.email = op.email;
    this.phone = op.phone;
  }
  get byName() {
    return this.name;
  }
  get byAge() {
    return this.age;
  }
  get byInfo() {
    return `Name: ${this.name},\t Age: ${this.age},\t Email: ${this.email},\t Phone: ${this.phone}`;
  }
}

class FilterService {
  constructor(op) {
    this.users = op.users;
  }
  createNewUser(name, age, email, phone) {
    return new Users({
      name: name,
      age: age,
      email: email,
      phone: '+380' + phone,
    });
  }
  filterByAge(age) {
    const adults = [];
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].age >= age) {
        adults.push(this.users[i]);
      }
    }
    return adults;
  }
  findEmail(startsithEmail) {
    const emailSW = [];
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email.startsWith(`${startsithEmail}`)) {
        emailSW.push(this.users[i]);
      }
    }
    return emailSW;
  }
  findByName(name) {
    const findName = people.find((users) => users.name === `${name}`);
    return findName;
  }
  filterByMaxAge() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].age > this.users[0].age) {
        this.users[0] = this.users[i];
      }
    }
    return this.users[0];
  }

  filterByMinAge() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].age < this.users[0].age) {
        this.users[0] = this.users[i];
      }
    }
    return this.users[0];
  }
}

// ==========================

let people = [];

const filterService = new FilterService({
  users: people,
});

//! =======================================
const user1 = filterService.createNewUser(
  'Валентина',
  25,
  'anton14@ukr.net',
  '930362468'
);
const user2 = filterService.createNewUser(
  'Євгенія',
  40,
  'bkravcuk@gmail.com',
  '968145990'
);
const user3 = filterService.createNewUser(
  'Борис',
  17,
  'leonid16@gmail.com',
  '963888147'
);
const user4 = filterService.createNewUser(
  'Григорій',
  16,
  'sergienko@ukr.net',
  '968145990'
);
const user5 = filterService.createNewUser(
  'Тетяна',
  19,
  'paravcuk@mail.ru',
  '670303201'
);
const user6 = filterService.createNewUser(
  "B'ячеслав",
  20,
  'vchlav73@gmail.com',
  '63572472'
);
const user7 = filterService.createNewUser(
  'Олена',
  22,
  'wsereda@ukr.net',
  '935942011'
);
const user8 = filterService.createNewUser(
  'Любов',
  21,
  'aroslavna43@mail.ru',
  '968030980'
);
const user9 = filterService.createNewUser(
  'Микола',
  14,
  'gnatuk@mail.ru',
  '963888147'
);
const user10 = filterService.createNewUser(
  'Ірина',
  31,
  'kravcuk@gmail.com',
  '936436592'
);
//!------------------------------------------------
people.push(
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
  user9,
  user10
);

// Інформація про всіх users
people.forEach((person) => console.log(person.byInfo));

console.log('\n'); //------------------------------

// Пошук старших ніж 20
const olderThan = filterService.filterByAge(20);

olderThan.forEach(function (person) {
  console.log(person.byName);
});

console.log('\n'); //------------------------------

// Пошук по буквах в email
let startsithEmail = filterService.findEmail('a');

startsithEmail.forEach(function (person) {
  console.log(person.byInfo);
});

console.log('\n'); //----------------------------------

// Пошук за іменем
let findName = 'Олена';
const byName = filterService.findByName(`${findName}`);
console.log(byName);

console.log('\n'); //------------------------------

// Пошук за віком min max
const maxAge = filterService.filterByMaxAge();
console.log(maxAge);

const minAge = filterService.filterByMinAge();
console.log(minAge);
