const { Queue } = require('../Queue');

const users = new Queue;

users.enqueue({
  username: 'testuser',
  password: 'testuser',
  name: 'Tara Patel'
});

users.enqueue({
  username: 'testuser2',
  password: 'testuser2',
  name: 'Zane Kuehn'
})

users.enqueue({
  username: 'testuser3',
  password: 'testuser3',
  name: 'Jelly the Rottweiler'
})

users.enqueue({
  username: 'testuser4',
  password: 'testuser4',
  name: 'Dolly the Lab Grizzly Bear'
})

module.exports = users;