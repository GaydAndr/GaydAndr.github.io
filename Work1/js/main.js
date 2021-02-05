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

let arr = [];
arr.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

arr.forEach(function (person) {
  console.log(person.byName);
});
// arr.forEach((person) => console.log(person.byName));

// arr.forEach((person) =>
//   console.log(
//     `Name: ${person.name}, Age: ${person.age}, Email: ${person.email}, Phone: ${person.phone}`
//   )
// );

// const newArrPhone = arr.map((person) => '+38' + person.phone);
// console.log(newArrPhone);

// const adults = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].age >= 18) {
//     adults.push(arr[i]);
//   }
// }

const adults = arr.filter((arr) => {
  if (arr.age >= 18) {
    return true;
  }
});
// const adults = arr.filter((arr) => arr.age >= 18);

const nameAdults = adults.map((person) => person.name);
console.log(nameAdults);

let personIra = 'Ірина';
for (let i = 0; i < arr.length; i++) {
  if (arr[i].name === `${personIra}`) {
    console.log(arr[i]);
  }
}

const personBorus = arr.find((arr) => arr.name === 'Борис');
console.log(personBorus);

// console.log(user2.name.startsWith('Євгенія'));

// arr.forEach(function (person) {
//   console.log(person.email.startsWith('kra'));
// });

let startsWith = 'a';
arr.forEach((person) => console.log(person.email.startsWith(`${startsWith}`)));

const emailPerson = arr.map((person) => {
  if (person.email.startsWith(`${startsWith}`)) {
    return true;
  }
});

console.log(emailPerson);
