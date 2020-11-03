const express = require('express'),
   app = express(),
   bodyParser = require('body-parser');
port = process.env.PORT || 3002;
app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/appRoutes'); //importing route
routes(app); //register the route