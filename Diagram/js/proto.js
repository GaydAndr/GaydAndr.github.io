const user = new Object({
  name: 'Andr',
  copyContent: function () {
    console.log('copyContent = true');
  },
});

Object.prototype.review = function () {
  console.log('review = true');
};
