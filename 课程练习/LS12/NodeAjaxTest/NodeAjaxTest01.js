var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    // var getDataObj = url.parse(req.url,true).query;//parse函数中第二个参数为true的话返回一个对象
    var getDataStr = url.parse(req.url).query;//parse函数中第二个参数为true的话返回一个对象
    res.writeHead(200, {
        "Content-Type": "text/plain",
        // res.writeHead(200, {"Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods": "GET, POST"
    });
    res.end(getDataStr+"——abcabcabc");
}).listen(8080,"127.0.0.1");
console.log("start server!");