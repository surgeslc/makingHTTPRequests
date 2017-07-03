

function getAndPrintHTML (host, path) {

  /* Add your code here */

  var https = require('https');
  var myHost = host;
  var myPath = path;
  console.log("host: = " + myHost);
  console.log("path: = " + myPath);
  var statusCode = "";

  // while https is built-in to Node, it is a module, so it must be required
  // the host can be thought of as the domain name you want to read from,
  // and the path is the resource - '/' is the root path, but if you wanted to read a
  // particular resource (like '/login/index.html'), that would be defined in the path
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
    response.on('data', function (data) {
      dataFromServer += data;
          console.log("dataFromServerlength: " + dataFromServer.length)
    });
  /*let error;
  if (https.statusCode !== 200) {
    error = new Error('Request Failed.\n' + `Status Code: ${statusCode}`);
  } else if (!/^application\/json/.test(contentType)) {
    error = new Error('Invalid content-type.\n' + `Expected application/json but received ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    // consume response data to free up memory
    response.resume();
    return;
  }*/
  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
      console.log(dataFromServer);
    });

  });

}
getAndPrintHTML('sytantris.github.io','/http-examples/step1.html');