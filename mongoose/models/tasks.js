var mg = require('../index');

var tasksSchema = new mg.Schema({
	name: {type: String},
	date: {type: String},
	time: {type: String},
	category: {type: String},
	VIP: {type: Boolean}
});

var tasksDB = mg.model('tasks', tasksSchema);

module.exports = tasksDB;