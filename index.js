// QUESTION 1
// Creating an InstagramPost object using the constructor function

function InstagramPost(authorHandle, content, imageLink, views, likes) {
  this.authorHandle = authorHandle;
  this.content = content;
  this.imageLink = imageLink;
  this.views = views;
  this.likes = likes;
}


// QUESTION 2
// Creating 2 InstagramPost objects using the constructor function

const post1 = new InstagramPost('@taaooma', 'Check out my amazing vacation photos!', 'https://taaooma.com/image.jpg', 1000, 50);
const post2 = new InstagramPost('@kehindebankole', 'Just finished my first movie shoot!', 'https://kehindebankole.com/image.jpg', 2000, 1000);

console.log({post1});
console.log({post2});


// QUESTION 3
// Factory function to create a person object

function createPerson(name, age, location) {
    return {
      name: name,
      age: age,
      location: location
    };
}

// Creating an object representing Musa using the createPerson() factory function
const musa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos State');
  
// Factory function to create a JAMB scores object
function createJambScores(eng, govt, lit, crk) {
    return {
      ENG: eng,
      GOVT: govt,
      LIT: lit,
      CRK: crk
    };
  }
  
// Creating an object representing Musa's JAMB scores using the createJambScores() factory function
const musaJambScores = createJambScores(70, 85, 82, 94);
  
// Adding the JAMB scores object as a property to the Musa object
musa.jambScores = musaJambScores;
  
console.log({musa});


// QUESTION 4
// There are several ways to clone an object in JavaScript.
// 1. Object.assign() method:

const person1 = {name: 'Esther', age: 30};
const person2 = Object.assign({}, person1);

console.log({person2}); // output: {name: 'Esther', age: 30}

// 2. Spread syntax(...):

const book1 = {title: 'Grey', year: 2001, author: 'Esther AJAYI'};
const book2 = {...book1};

console.log({book2}); // output: {title: 'Grey', year: 2001, author: 'Esther AJAYI'}

// 3. JSON.parse() and JSON.stringify() methods:

const song1 = {artist: 'Nathaniel  Bassey', title: 'Halleluyah'};
const song2 = JSON.parse(JSON.stringify(song1));

console.log({song2}) // output: {artist: 'Nathaniel  Bassey', title: 'Halleluyah'}

// 4. Object.create method:

const obj1 = {animal: 'cat', color: 'white'}
const obj2 = Object.create(obj1);

console.log({obj2}); // output: {}
console.log(obj2.animal); // output: 'cat'
console.log(obj2.color); // output: white


// QUESTION 5

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
};
 
for (let key in presidentialCandidates) {
   console.log(presidentialCandidates[key] + ' is the presidential candidate of ' + key);
}