// 任务五
/*
实现pascal_triangle函数，以打印帕斯卡三角。
所谓帕斯卡三角就是三角形的边界上都是1，内部的每个数是位于它上面的两个数之和。形如
     1
    1 1
   1 2 1
  1 3 3 1
 1 4 6 4 1
1 5 10 10 5 1
每个数是上一层相邻两个数的和。为了表现容易。我们生成下面这样的三角形：

1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1
pascal_triangle的参数是帕斯卡三角的行数，上图中参数为5。
该函数返回一个字符串，数字之间用空格隔开，打印该字符串可得到帕斯卡三角。
*/
//
function pascal_triangle(n){
    if(n===0) return;
    let arr = new Array(n);
    for(let i=0;i<arr.length;i++){
        arr[i] = new Array(i+1);
        for(let j=0;j<i+1;j++){
//             console.log("i:",i,"j:",j);
            if((j===0)||(j===i)){
                arr[i][j] = 1;
            }else{
                arr[i][j] = arr[i-1][j-1]+arr[i-1][j];
            }
        }
    }
    //return arr;
    return pascalArray2String(arr);
}

function pascalArray2String(arr){
    var result = "";
    for(let i=0;i<arr.length;i++){
        for(var j=0;j<i+1;j++){
            var space = (j==i?"":" ");
            result =result+arr[i][j]+space;
        }
        result+="\n";
    }
    return result;
}
pascal_triangle(8);



//网站上实现的方法 打印帕斯卡三角
function pascal_triangle(n){
    var result = "1";
    if(n === 1) return result + "\n";
    for(var i = 1; i <= n-1; i++){
        result = result + " " + factorial(n - 1)/ (factorial(i) * factorial(n - 1 - i));
    }
    return pascal_triangle(n - 1) + result + "\n";
}
function factorial(n){
    if(n === 1 || n === 0 ) return 1;
    return factorial(n - 1) * n;
}