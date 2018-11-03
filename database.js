var mysql = require('mysql');

//Create connection & callback once connection is established
	
	var con=mysql.createConnection({
		host: conData.host,
		user: conData.user,
		password: conData.password,
		database: conData.database
	});
	con.connect(function(err) {
		if (err) callback(err);
		callback(null, con);
	});
};


		