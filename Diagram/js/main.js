class User {
  constructor(options) {
    this.name = options.name;
  }
  copyContent() {
    console.log('copyContent = true');
  }
  review() {
    console.log('review = true');
  }
}

class Subscriber extends User {
  constructor(options) {
    super(options);
    this.subscribeID = options.subscribeID;
    this.age = options.age;
  }

  sent() {
    // super.copyContent();
    // super.review();
    console.log('sent = true');
  }
}

class SubscriberPremium extends Subscriber {
  constructor(options) {
    super(options);
    this.photo = options.photo;
  }
  saveContent() {
    console.log('saveContent = true');
  }
}

class Admin extends SubscriberPremium {
  addContent() {
    console.log('addContent = true');
  }
  changeContent() {
    console.log('changeContent = true');
  }
  sent() {
    // super.copyContent();
    // super.review();
    console.log('sent+ = true');
  }
  copyContent() {
    super.copyContent();
    console.log('Hello! ');
  }
  get;
}

const user = new User({
  name: 'Andr',
});

const subscriber = new Subscriber({
  name: 'Leo',
  subscribeID: '1',
  age: '25',
});

const sbPremium = new SubscriberPremium({
  name: 'Nick',
  subscribeID: '3',
  age: '23',
  photo: true,
});
const admin = new Admin({
  name: 'Don',
  subscribeID: '3',
  age: '23',
  photo: true,
});
