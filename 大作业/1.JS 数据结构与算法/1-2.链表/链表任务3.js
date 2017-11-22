/////任务三/////
// 假设已经存在一个链表,将任意一个数据插入到链表中指定的index，例如：
// 链表中的数据是[1,2,4,5]
// 1.我们插入的index = 0，插入如数据为0，则链表中的数据为
//     [0,1,2,4,5]
// 2.我们插入的index = 4，插入如数据为6，则链表中的数据为
//     [1,2,4,5,6]
// 3.我们插入的index = 2，插入如数据为3，则链表中的数据为
//     [1,2,3,4,5]
// 请在insert_node_to_list_index中添加代码，函数的参数index为要插入的位置，data为要插入的数据，函数返回链表头指针。

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
    var list = new LinkedList();
    for(var i=0;i<array_data.length;i++){
        //var node = new ListNode(array_data[i]);//这样写的话，链表顺序是如何的，输出测试一下
        var node = new ListNode(array_data[array_data.length-i-1]);
        node.next = list.list_header;
        list.list_header = node;
    }
    return list;
};

//网站上的写法如下,在关键点打印输出，进行分析
LinkedList.prototype.insert_node_to_list_index = function(index, data)
{
    if(index == 0) return this.insert_node_to_list_first(data);
    var temp = this.get_nodes_from_index_in_list(index);
    this.insert_between_nodes(temp.last, temp.current, data);
    return this.list_header;
};
LinkedList.prototype.insert_node_to_list_first = function(data)
{
    var new_node = new ListNode(data);
    new_node.next = this.list_header;
    this.list_header = new_node;
    return this.list_header;
};
LinkedList.prototype.get_nodes_from_index_in_list = function(index)
{
    var first_node = null;
    var second_node = this.list_header;
    for (var i = 0 ; i != index; i++)
    {
        first_node = second_node;
        second_node = second_node.next;
    }
    return {
        last:first_node,
        current:second_node
    };
};
LinkedList.prototype.insert_between_nodes = function(first_node, second_node, data)
{
    var new_node = new ListNode(data);
    new_node.next = second_node;
    if (first_node != null) first_node.next = new_node;
    return new_node;
};




//汇总的写法如下 缺点不利于任务的分割////////////////////////////
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
LinkedList.prototype.insert_node_to_list_index = function(index, data)
{
    //在这里写入代码
    var node = new ListNode(data);
    if(index == 0){
        node.next = this.list_header;
        this.list_header = node;
        return this.list_header;
    }
    var temp = this.list_header;
    for(var i=1;i<index;i++){ //思考：i为什么起始设置为了1
        temp = temp.next;
    }
    //console.log(temp);//打开输出进行输出调试
    node.next = temp.next;
    temp.next = node;
    return this.list_header;
};

//测试代码如下
var list = LinkedList.create_list_from_array([1,2,3,"x"]);
console.log(list);//创建一个list为后续测试使用
list.insert_node_to_list_index(2,"y");
console.log(list);

