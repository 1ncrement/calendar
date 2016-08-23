/**
 * Created by increment on 23.08.16.
 */
let todosExportObject = {},
	TasksSchema = require('../mongoose/models/tasks'),
	statusErrors = require('status-errors');

todosExportObject.add = (req, res, next)=>{
	let body = req.body;

	console.log(req.body);

	let task = new TasksSchema({
		name: body.name,
		date: body.date,
		time: body.time,
		category: body.category,
		VIP: body.vip
	});

	task.save()
		.then((data)=>{res.json(data);})
		.catch((err)=>{res.json(err);});
};

todosExportObject.taskList = (req, res, next)=>{
	TasksSchema.find({})
		.then((data)=>{res.json(data)})
		.catch((err)=>{res.json(err)});
};

todosExportObject.clear = (req, res, next)=>{
	TasksSchema.remove({})
		.then((data)=>{res.json(data)})
		.catch((err)=>{res.json(err)});
};

module.exports = todosExportObject;