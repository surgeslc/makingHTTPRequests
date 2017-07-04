// Don't alter this file

var https = require('https');

module.exports = function getHTML (options, callback) {
  /* Add your code here */

  var myHost = options.host;
  var myPath = options.path;
  //console.log("host: = " + myHost);
  //console.log("path: = " + myPath);
  var statusCode = "";

  var requestOptions = {
    host: myHost,
    path: myPath
  };
  var dataFromServer = "";

  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(requestOptions, function (response) {
  // set encoding of received data to UTF-8
    response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
    response.on('data', callback);
  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(dataFromServer);
    });

  });
//getHTML({'host':'sytantris.github.io', 'path': '/http-examples/step4.html'});
}