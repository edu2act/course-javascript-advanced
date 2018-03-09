/////任务四/////
// 假设已经存在一个二叉树,通过二叉树的查找来得到一个数据是否存在
// 请在is_data_in_tree中添加二叉树查找数据的代码，函数的参数是要查找的数据，
// 如果数据存在返回数据的节点对象，如果数据不存在返回null。

function BinaryTreeNode(data, left, right)
{
    this.data = data;
    this.left = left;
    this.right = right;
    return this;
}
function BinaryTree()
{
    this.root = null;
}
BinaryTree.prototype.is_data_in_tree = function(data)
{
    //在这里写入代码
    var tree_array_node = [];
    this._preorder_traversal_tree_node(this.root,tree_array_node);
    var node;
    tree_array_node.forEach(function (n,idx) {
        if(n.data == data){
            node = n;
        }
    });
    if(node){return node;}
    return null;
};
//使用先序遍历来进行查找
BinaryTree.prototype._preorder_traversal_tree_node = function(tree_node,tree_array_node)
{
    if (tree_node != null)
    {
        tree_array_node.push(tree_node);//注意push的不是节点的数据，而是节点
        this._preorder_traversal_tree_node(tree_node.left,tree_array_node);
        this._preorder_traversal_tree_node(tree_node.right,tree_array_node);
    }
};

//测试代码如下//////////////////////////
BinaryTree.create_tree_from_array = function(data)
{
    var binary_tree = new BinaryTree();
    //在这里写入代码
    for(var i=0;i<data.length;i++){
        binary_tree.root =binary_tree._insert_data_to_tree(binary_tree.root,data[i]);
    }
    return binary_tree;
};
BinaryTree.prototype._insert_data_to_tree = function(binary_tree_node,data)
{
    if (binary_tree_node == null)
    {
        return new BinaryTreeNode(data, null, null);
    }
    else if (binary_tree_node.data < data)
    {
        binary_tree_node.right = this._insert_data_to_tree(binary_tree_node.right, data);//递归调用
    }
    else if (binary_tree_node.data > data)
    {
        binary_tree_node.left = this._insert_data_to_tree(binary_tree_node.left, data);//递归调用
    }
    return binary_tree_node;
};
//测试代码
var bt = BinaryTree.create_tree_from_array([5,8,3,2,4,7,6,9]);
console.log(bt.is_data_in_tree(6));