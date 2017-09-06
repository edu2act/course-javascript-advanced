/**
 * Created by qile on 2017/8/14.
 */
// Part1 构造函数中函数嵌套 this缺陷
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        function moveX(x) {
            this.x+=x;
        }
        function moveY(y) {
            this.y+=y;
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);//输出为Point{x:2,y:3}没有移动



// Part2 构造函数中函数嵌套 this缺陷 解决方案
function Point(x,y) {
    this.x = x;
    this.y = y;
    this.moveXY = function (x,y) {
        var that = this;//此处that为实例化出来的p对象
        function moveX(x) {
            that.x+=x;//this改为that
        }
        function moveY(y) {
            that.y+=y;//this改为that
        }
        moveX(x);
        moveY(y);
    }
}
var p = new Point(2,3);
p.moveXY(1,1);
console.log(p);//输出为Point{x:3,y:4}，移动了(1,1)