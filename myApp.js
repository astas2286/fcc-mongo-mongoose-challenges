require('dotenv').config();
const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect(process.env.MONGO_URI);

let personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
});

let Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
  let stanislav = new Person({
    name: "Stanislav",
    age: 36,
    favoriteFoods: ["Orange", "Watermelon"]
  })

  stanislav.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      done(null, data);
    }
  })
};

let arrayOfPeople = [{
    name: "Maria",
    age: 26,
    favoriteFoods: ["HotDog", "Juice"]
  },
  {
    name: "Micaela",
    age: 30,
    favoriteFoods: ["Soup", "Bread"]
  },
  {
    name: "Boris",
    age: 55,
    favoriteFoods: ["Bisquits", "Tea"]
  }
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      done(null, data);
    }
  })
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      done(null, data);
    }
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: [food]}, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      done(null, data);
    }
  });
};

const findPersonById = (personId, done) => {
  done(null /*, data*/ );
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/ );
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/ );
};

const removeById = (personId, done) => {
  done(null /*, data*/ );
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/ );
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/ );
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;