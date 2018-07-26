/////任务一/////
// 假设已经存在一个链表,将任意一个数据插入到链表的首位置
// 请在insert_node_to_list_first中添加代码，函数的参数为要插入的数据，函数返回链表头指针。
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
LinkedList.prototype.insert_node_to_list_first = function(data)
{
    var node = new ListNode(data);
    node.next = this.list_header;
    this.list_header = node;

    return this.list_header;
};
//测试代码如下
var linkList = new LinkedList();
linkList.insert_node_to_list_first("a");
linkList.insert_node_to_list_first("b");
linkList.insert_node_to_list_first(1);
linkList.insert_node_to_list_first(2);
console.log(linkList);
