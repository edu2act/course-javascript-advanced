var fs = require("fs");
var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
    var getDataObj = url.parse(req.url,true).query;//parse第二参数决定了是否转成对象
    //console.log(getDataObj);
    var arrayIndex = getDataObj.id-1;
    //console.log(typeof arrayIndex,arrayIndex);
    fs.readFile("./NodeJsonTest.json", function readData(err, data) {
        var jsonArr=JSON.parse(data);
        //console.log("jsonArr:",jsonArr[arrayIndex]);
        
        //res.writeHead(200, {"Content-Type": "text/plain",
        res.writeHead(200, {"Content-Type": "application/json",
            "Access-Control-Allow-Origin":"*",
            "Access-Control-Allow-Methods": "GET, POST"
        });
        
        res.end(JSON.stringify(jsonArr[arrayIndex]));
    });

}).listen(8080,"127.0.0.1");
console.log("start server!");


/*
var readableStream = fs.createReadStream("./NoseJsonTest.txt");
var data = "";
readableStream.on("data", function(chunk){
    data += chunk;
});
readableStream.on("end", function(){
    console.log(data,typeof data);
});
 */