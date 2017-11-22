/////任务二/////
// 本题目是通过数组创建一个链表。数组要按照index从小到大的顺序添加到链表里，最终来创建出链表。
// 请在create_list_from_array中添加代码，函数的参数为传入数组，函数返回链表对象

function ListNode(data)
{
    this.data = data;
    this.next = null;
    return this;
}
function LinkedList()
{
    this.list_header = null;
}
//注意：这是静态方法，思考静态方法和原型方法的区别，必须掌握，重要
LinkedList.create_list_from_array = function(array_data)
{
    //在这里写入代码
    var list = new LinkedList();
    for(var i=0;i<array_data.length;i++){
        //var node = new ListNode(array_data[i]);//这样写的话，链表顺序是如何的，输出测试一下
        var node = new ListNode(array_data[array_data.length-i-1]);
        node.next = list.list_header;
        list.list_header = node;
    }
    return list;
};
//测试代码如下
var list = LinkedList.create_list_from_array([1,2,3,"x"]);
console.log(list);
