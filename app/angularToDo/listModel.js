// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a NoteSchema with the Schema class
var TodosSchema = new Schema({
  // title: a string
  todo: {
    type: String
  },
  // body: a string
  dueDate: {
    type: Date
  }
});

// 1. getFullName: concatenate the first and last name and return it
// UserSchema.methods.getFullName = function() {
//   this.fullName = this.firstName + " " + this.lastName;
//   return this.fullName;
// };
// // 2. lastUpdatedDate: save the current date to a variable and return it
// UserSchema.methods.UserSchema = function() {
//   this.lastUpdated;
//   return this.lastUpdated;
// };

/* TIP: Custom Method Format

  UserSchema.methods.[CUSTOM METHOD NAME HERE] = function() {
    // enter your method code here
  };

*/


// Make a Todos model with the NoteSchema
var Todos = mongoose.model("Todos", TodosSchema);

// Export the Todos model
module.exports = Todos;