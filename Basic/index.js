const http = require("http"); // import http which come with node 


// creating a server with the help of http
const server = http.createServer((req, res) => { // getting req == request, res == response
//giving condition for routes
  if(req.url == "/about"){
    res.end("The About Page");
  }
  else if(req.url == "/profile"){
    res.end("The Profile Page");
  }
  else{
    res.end("Hello World!!!")
  }
});
//server listen / start at this port 
server.listen(8000);



