const { Queue } = require('../Queue');
const cats = new Queue();

cats.enqueue({
  id: 'ck08961pr000301mn5y2j2wv5',
  imageURL:
    'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
  imageDescription:
    'Orange bengal cat with black stripes lounging on concrete.',
  name: 'Fluffy',
  sex: 'Female',
  age: 2,
  breed: 'Bengal',
  story: 'Thrown on the street'
});

cats.enqueue({
  id: 'ck0896dkr000401mn2x902elv',
  imageURL:
    'https://img.huffingtonpost.com/asset/582cb2601a00002400cc8426.jpeg?cache=wltod2kvw5&ops=scalefit_720_noupscale',
  imageDescription: 'Black cat',
  name: 'Pete',
  sex: 'Male',
  age: 0.5,
  breed: 'Domestic Short Hair',
  story:
    'Tired of sleeping with mouthfuls of black hair, Pete\'s owners tossed him on the street.'
});

cats.enqueue({
  id: 'ck08993r8000501mn5p0y79m6',
  imageURL:
    'https://www.thesprucepets.com/thmb/WCZZVbm3YgUncQO04dESh8bSMJI=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/12473529633_eca14113fe_k-5a932272303713003754f375.jpg',
  imageDescription: 'Calico cat',
  name: 'Mia',
  sex: 'Female',
  age: 1,
  breed: 'Domestic Short Hair',
  story:
    'This calico was so skiddish she ran away because her owner sneezed loudly.'
});

module.exports = cats;
