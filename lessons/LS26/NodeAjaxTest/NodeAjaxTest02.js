var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    var postData = "";
    req.on("data",function (chunk) {
        postData+=chunk;
        console.log(typeof postData,postData);
    });

    req.on("end",function () {
        res.writeHead(200, {
            "Content-Type": "text/plain",
            // res.writeHead(200, {"Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Methods": "GET, POST"
        });
        setTimeout(function () {
            res.end("你提交的数据："+postData);
        },200*Math.random());
    });
}).listen(8080,"127.0.0.1");
console.log("start server!");




/*
var fs = require("fs");
var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    var getDataObj = url.parse(req.url,true).query;
    console.log(getDataObj);
    var arrayIndex = getDataObj.id-1;
    console.log(typeof arrayIndex,arrayIndex);
    fs.readFile("./NodeJsonTest.json", function readData(err, data) {
        var test1=JSON.parse(data);
        console.log("test1:",test1[arrayIndex]);


        //res.writeHead(200, {"Content-Type": "text/plain",
        res.writeHead(200, {"Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Methods": "GET, POST"
        });
        //console.log(data,data instanceof Array);
        //console.log(data instanceof String,data instanceof Object);
        // console.log(JSON.stringify(data.toString()),data instanceof Object);
        //data = '{"x":2}';

        res.end(JSON.stringify(test1[arrayIndex]));
        // res.end(data);
    });

}).listen(8080,"127.0.0.1");
console.log("start server!");
*/