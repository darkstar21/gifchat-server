//Main server file
var mongoose = require('mongoose');
var app = require('./app');

var port = process.env.PORT || 3000;
var mongo_uri = process.env.MONGOLAB_URI || 'mongodb://localhost/gifchat';

mongoose.connect(mongo_uri, {db: {safe: true}});

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
