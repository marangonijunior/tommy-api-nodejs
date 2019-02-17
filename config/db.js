var mongoose = require('mongoose');
mongoose.connect('mongodb://tommy-admin:tommy2019@ds125945.mlab.com:25945/heroku_gtzj8135', { useMongoClient: true }, function (error) {
  if (error) console.error(error);
  else console.log('mongo connected');
});
