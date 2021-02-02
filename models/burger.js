// Import the ORM to create functions that will interact with the database.
const orm = require('../config/orm.js');

const burger = {
  all(cb) {
    orm.all('burgers', (res) => cb(res));
  },
  // The variables cols and vals are arrays.
  create: function (name,cb){
    orm.create("burgers", [
      "burger_name", "devoured"
    ],[
      name, false
    ], cb);
  },
  update: function (id, cb) {
    var condition = "id=" + id; 
    orm.update("burgers", {
      devoured : true
    }, condition, cb);
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;