/**
 * Created by qile on 2017/8/14.
 */
// 多维数组
var table = new Array(10);
for(var i=0;i<table.length;i++){
    table[i] = new Array(10);
}

for(var row=0;row<table.length;row++){
    for(var col=0;col<table[row].length;col++){
        table[row][col]=row*col;
    }
}
product = table[5][7];