/////任务三/////
// 本节通过上一节学习的向二叉树中插入数据来创建一棵二叉树。将一个数组传入到函数中，
// 然后按照数组index的顺序不断插入根节点来完成二叉树的创建。
// 请在create_tree_from_array中添加创建二叉树的代码，函数的参数是要生成二叉树的数组，函数返回二叉树对象。

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
console.log(bt);