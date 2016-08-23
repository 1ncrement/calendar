/**
 * Created by increment on 23.08.16.
 */
var express = require('express'),
	path = require('path'),
	router = express.Router(),
	todoCtrl = require('./controllers/todo-ctrl');

router.get('/', (req, res)=>{
	res.sendFile(path.join(__dirname, './index.html'));
});

router.post('/add', todoCtrl.add);
router.get('/taskList', todoCtrl.taskList);
router.get('/clear', todoCtrl.clear);

module.exports = router;