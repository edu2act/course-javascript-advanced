/////任务四/////
// 假设已经存在一个链表,我们从链表中查找一个数据，并返回他在链表中的位置(index)，例如：
// 链表中的数据是[1,2,4,5]
// 1.我们查找的数据为2，返回的index为1
// 2.我们查找的数据为6，由于链表中没有这个数据，返回的index为-1
// 请在get_node_index_from_data中添加代码，函数的参数为要查找的数据，函数返回数据在链表中index。

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

LinkedList.prototype.get_node_index_from_data = function(data)
{
    var index = 0;
    //在这里写入代码
    var current_node = this.list_header;
    while(current_node.data!=data){
        currentNode = currentNode.next;
        index++;
        if(currentNode == null){return index=-1;}
    }
    return index;
};

//测试代码如下
var list = LinkedList.create_list_from_array([1,2,3,"x"]);
console.log(list);
list.get_node_index_from_data(3);