//importing node framework
var express = require('express');

var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
    let message = {
        status : true,
        message : 'HI-1'
    }
res.send(message);
});
//listen to port 3000 by default
app.listen(process.env.PORT || 3000);

module.exports = app;