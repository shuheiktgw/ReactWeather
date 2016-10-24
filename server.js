/**
 * Created by Shuhei on 2016/10/24.
 */
/**
 * Created by Shuhei on 2016/10/24.
 */
var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
  console.log('Express server is up on port 3000')
});
