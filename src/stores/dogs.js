const { Queue } = require('../Queue');

const dogs = new Queue;

dogs.enqueue(  {
  id: 'ck088yrdf000001mn6v0n0s0f',
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
});

dogs.enqueue({
  id: 'ck088zcak000201mncv3h48at',
  imageURL: 'https://www.dogster.com/wp-content/uploads/2016/08/jack-russell-terrier.jpg',
  imageDescription: 'Charlie the Jack Russell Terrier',
  name: 'Charlie',
  sex: 'Male',
  age: 13,
  breed: 'Jack Russell Terrier',
  story: "This old guy much prefers eating trash off the street to the organic locally sourced dog food his mom buys him, so he frequently escapes. I guess this time he didn't come back!"
});

module.exports = dogs;