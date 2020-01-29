var request = require('request');
request('https://jsonplaceholder.typicode.com/users/1', function (error, response, body) {
  if(!error&&response.statusCode==200){
    eval(require('locus'));
      var data=JSON.parse(body);
    console.log(data.name);
  } 
});