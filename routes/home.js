var data = require('../data.json');

exports.viewHome = function(req, res){
  // var parseData = JSON.parse(data);
  // console.log(parseData[0]);

  // var name = JSON.parse(data);
  // var newTask = {
	// 	'name': "Play Animal Crossing",
	// 	"color": "rgb(251, 255, 0)"
	// };
	// data.arr.push(newTask);
  


    res.render('home', data);
  };

