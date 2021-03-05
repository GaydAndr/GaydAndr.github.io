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

  //---------------------------------------

  filterByAge(age) {
    if (this.users.length == 0) {
      console.log('Error');
    } else {
      const adults = this.users.filter((person) => {
        if (person.age >= age) {
          return true;
        }
      });

      this.printUsers(adults);
    }
  }

  //---------------------------------------

  findEmail(startsithEmail) {
    if (this.users.length == 0) {
      console.log('Error');
    } else {
      const emailSW = this.users.filter((person) => {
        if (person.email.startsWith(`${startsithEmail}`)) {
          return true;
        }
      });
      this.printUsers(emailSW);
    }
  }

  //---------------------------------------

  findByName(name) {
    if (this.users.length == 0) {
      console.log('Error');
    } else {
      const findName = people.find((users) => {
        if (users.name === `${name}`) {
          return true;
        }
      });
      this.printUsers(findName);
    }
  }

  //---------------------------------------

  filterByMaxAge() {
    if (this.users.length == 0) {
      console.log('Error');
    } else {
      let user;
      let maxAge = this.users[0].age;
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].age > maxAge) {
          maxAge = this.users[i];
          user = this.users[i];
        }
      }
      this.printUsers(user);
    }
  }

  //---------------------------------------

  filterByMinAge() {
    if (this.users.length == 0) {
      console.log('Error');
    } else {
      let user;
      let minAge = this.users[0].age;
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].age < minAge) {
          minAge = this.users[i].age;
          user = this.users[i];
        }
      }
      this.printUsers(user);
    }
  }

  //---------------------------------------

  printUsers(users) {
    function isArray(users) {
      return Array.isArray(users);
    }
    if (isArray(users) == true) {
      users.forEach((person) =>
        console.log(
          `Name: ${person.name},\t Age: ${person.age},\t Email: ${person.email},\t Phone: ${person.phone}`
        )
      );
    } else {
      console.log(users);
    }
  }
}

class SortServise {
  constructor(op) {
    this.users = op.users;
  }
  bubbleAgeSort() {
    if (this.users.length == 0) {
      console.log('Error');
    } else {
      let users;
      for (let n = 0; n < this.users.length; n++) {
        for (let i = 0; i < this.users.length - 1 - n; i++) {
          if (this.users[i].age > this.users[i + 1].age) {
            const a = this.users[i];
            this.users[i] = this.users[i + 1];
            this.users[i + 1] = a;
            users = this.users;
          }
        }
      }
      this.printUsers(users);
    }
  }
  printUsers(users) {
    function isArray(users) {
      return Array.isArray(users);
    }
    if (isArray(users) == true) {
      users.forEach((person) =>
        console.log(
          `Name: ${person.name},\t Age: ${person.age},\t Email: ${person.email},\t Phone: ${person.phone}`
        )
      );
    } else {
      console.log(users);
    }
  }
}

// ==========================

let people = [];

const filterService = new FilterService({
  users: people,
});
const sortServise = new SortServise({
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

filterService.printUsers(people);

console.log('\n'); //------------------------------

// Пошук старших ніж 20
const olderThan = filterService.filterByAge(20);

console.log('\n'); //------------------------------

// Пошук по буквах в email
let startsithEmail = filterService.findEmail('a');

console.log('\n'); //----------------------------------

// Пошук за іменем
let findName = 'Олена';
const byName = filterService.findByName(`${findName}`);

console.log('\n'); //------------------------------

// Пошук за віком min max
const maxAge = filterService.filterByMaxAge();

const minAge = filterService.filterByMinAge();

console.log('\n'); //------------------------------

const sortAge = sortServise.bubbleAgeSort();
