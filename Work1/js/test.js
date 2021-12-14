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
}

class FilterService {
  constructor(op) {
    this.users = op.users;
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
      // debugger;
    }
    return emailSW;
  }
}
// console.log(this.users.email.startsWith(`${startsithEmail}`));

function createUser(name, age, email, phone) {
  return new Users({
    name: name,
    age: age,
    email: email,
    phone: phone,
  });
}

const user1 = createUser('Валентина', 25, 'anton14@ukr.net', '0930362468');
const user2 = createUser('Євгенія', 21, 'bkravcuk@gmail.com', '0968145990');
const user3 = createUser('Борис', 17, 'leonid16@gmail.com', '0963888147');
const user4 = createUser('Григорій', 16, 'sergienko@ukr.net', '0968145990');
const user5 = createUser('Тетяна', 19, 'paravcuk@mail.ru', '0670303201');
const user6 = createUser("B'ячеслав", 20, 'vchlav73@gmail.com', '063572472');
const user7 = createUser('Олена', 22, 'wsereda@ukr.net', '0935942011');
const user8 = createUser('Любов', 21, 'aroslavna43@mail.ru', '0968030980');
const user9 = createUser('Микола', 14, 'gnatuk@mail.ru', '0963888147');
const user10 = createUser('Ірина', 21, 'kravcuk@gmail.com', '0936436592');

let people = [
  user1,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
  user9,
  user10,
];

// * arr.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// ? console.log(people);

const filterService = new FilterService({
  users: people,
});

const olderThan = filterService.filterByAge(20);

// ! const maxNum = this.users.map((person) => person.age);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

olderThan.forEach(function (person) {
  console.log(person.byName);
});
// arr.forEach((person) => console.log(person.byName));

let startsithEmail = filterService.findEmail('a');
console.log(startsithEmail);
/*
// arr.forEach((person) =>
//   console.log(
//     `Name: ${person.name}, Age: ${person.age}, Email: ${person.email}, Phone: ${person.phone}`
//   )
// );
*/

// ! const newArrPhone = arr.map((person) => '+38' + person.phone);
// console.log(newArrPhone);

// const adults = people.filter((a) => {
//   if (a.age >= 18) {
//     return true;
//   }
// });
// ! const adults = arr.filter((arr) => arr.age >= 18);

// const nameAdults = adults.map((person) => person.name);
// console.log(nameAdults);

// let personIra = 'Ірина';
// for (let i = 0; i < people.length; i++) {
//   if (people[i].name === `${personIra}`) {
//     console.log(people[i]);
//   }
// }

// const personBorus = people.find((arr) => arr.name === 'Борис');
// console.log(personBorus);

// arr.forEach(function (person) {
//   console.log(person.email.startsWith('kra'));
// });

// let startsWith = 'a';

// people.forEach((person) =>
//   console.log(person.email.startsWith(`${startsWith}`))
// );

// const emailPerson = people.map((person) => {
//   if (person.email.startsWith(`${startsWith}`)) {
//     return true;
//   }
// });

// console.log(emailPerson);

const arr = [9, 4, 3, 7, 8, 1, 5, 6, 0, 2];
bubbleSort(arr);

function bubbleSort(arr) {
  for (let n = 0; n < arr.length; n++) {
    for (let i = 0; i < arr.length - 1 - n; i++) {
      if (arr[i] > arr[i + 1]) {
        const a = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = a;
      }
    }
  }

  console.log(arr);
}
