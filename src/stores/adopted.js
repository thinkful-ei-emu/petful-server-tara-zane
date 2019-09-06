const { Queue } = require('../Queue');
const adopted = new Queue();

adopted.enqueue({
  id: 'ck08b5udt000001mfa4588cdk',
  imageURL:
    'https://www.k9ofmine.com/wp-content/uploads/2017/07/golden-shepherd.jpg',
  imageDescription:
    'German Shepherd mix with floppy ear',
  name: 'Bella',
  sex: 'Female',
  age: 12,
  breed: 'Grand Pyrenees',
  story: 'Dumb as a rock, gentle as a lamb'
});

module.exports = adopted;