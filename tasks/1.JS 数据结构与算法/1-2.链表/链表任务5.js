// 假设已经存在一个链表,我们从链表中删除一个数据，删除的方式有两种：
// 1.通过在链表中的位置(index)来删除数据，例如：
// 链表中的数据是[1,2,4,5]，删除的index为1，则链表变为[1,4,5]，函数返回数据为2的节点对象；
// 如果删除的index是5，则返回null
// 2.通过数据的值找到对应的节点来进行删除数据，例如：
// 链表中的数据是[1,2,4,5]，删除的数据为4，则链表变为[1,2,5]，函数返回数据为4的节点对象；
// 如果删除的数据是6，则返回null
// 函数remove_node_from_list是通过数据删除链表中的数据，其中参数是数据的值，
// 函数返回被删除的数据的节点对象，如果这个数不存在返回null
// 函数remove_node_index_from_list是通过index删除链表中的数据，其中参数是index，
// 函数返回被删除的数据的节点对象，如果这个index不存在返回null
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
LinkedList.prototype.find_nodes_from_data_list = function(data)
{
    var last_node = null;
    var current_node = this.list_header;
    while(current_node.data != data)
    {
        last_node = current_node;
        current_node = current_node.next;
        if (current_node == null) return null;
    }

    return {
        last:last_node,
        current:current_node
    };
};
LinkedList.prototype.find_nodes_from_index_list = function(index)
{
    var first_node = null;
    var second_node = this.list_header;
    for (var i = 0 ; i != index; i++)
    {
        first_node = second_node;
        second_node = second_node.next;
        if (second_node == null) return null;
    }
    return {
        last:first_node,
        current:second_node
    };
};
LinkedList.prototype.remove_node_from_list = function(data)
{
    //在这里写入代码
    var temp = this.find_nodes_from_data_list(data);
    if (temp == null) return null;
    if (temp.last != null)
        temp.last.next = temp.current.next;
    else
        this.list_header = temp.current.next;

    return temp.current;
};
LinkedList.prototype.remove_node_index_from_list = function(index)
{
    //在这里写入代码
    var temp = this.find_nodes_from_index_list(index);
    if (temp == null) return null;
    if (temp.last != null)
        temp.last.next = temp.current.next;
    else
        this.list_header = temp.current.next;
    return temp.current;
};


//测试代码如下
//创建链表的静态方法
LinkedList.create_list_from_array = function(array_data)
{
    var list = new LinkedList();
    for(var i=0;i<array_data.length;i++){
        //var node = new ListNode(array_data[i]);//这样写的话，链表顺序是如何的，输出测试一下
        var node = new ListNode(array_data[array_data.length-i-1]);
        node.next = list.list_header;
        list.list_header = node;
    }
    return list;
};
//测试链表 list
var list = LinkedList.create_list_from_array([1,2,3,"x","y","z"]);
console.log(list);