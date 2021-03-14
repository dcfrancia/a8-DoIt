var data = require('../data.json');
exports.viewTask = function(req, res){
    
    var newTask = {
		'name': "Play Animal Crossing",
		"color": "background-color:#ffff00"
	};
	data.arr.splice(7,1,(newTask));
  

    // var name = JSON.parse(data);
    res.render('addTask',data);
};