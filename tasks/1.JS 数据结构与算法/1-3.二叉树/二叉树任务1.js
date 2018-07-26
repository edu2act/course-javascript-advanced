/////任务一/////
// 假设已经存在一个二叉树,用先序和后序两种方式来遍历二叉树
// （先序遍历也叫做先根遍历、前序遍历，可记做根左右）
//  回顾先序遍历相关知识
// 请在preorder_traversal_tree中添加先序优先遍历的代码，函数返回遍历的结果，结果是一个数组。
// 请在postorder_traversal_tree中添加后序优先遍历的代码，函数返回遍历的结果，结果是一个数组

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
//以下是使用递归的方法实现的 先序遍历
BinaryTree.prototype.preorder_traversal_tree = function()
{
    var tree_array_data = [];
    this._preorder_traversal_tree_node(this.root,tree_array_data);
    return tree_array_data;
};
BinaryTree.prototype.postorder_traversal_tree = function()
{
    var tree_array_data = [];
    this._postorder_traversal_tree_node(this.root,tree_array_data);
    return tree_array_data;
};

BinaryTree.prototype._preorder_traversal_tree_node = function(tree_node,tree_array_data)
{
    if (tree_node != null)
    {
        tree_array_data.push(tree_node.data);
        this._preorder_traversal_tree_node(tree_node.left,tree_array_data);
        this._preorder_traversal_tree_node(tree_node.right,tree_array_data);
    }
};
BinaryTree.prototype._postorder_traversal_tree_node = function(tree_node, tree_array_data)
{
    if (tree_node != null)
    {
        this._postorder_traversal_tree_node(tree_node.left,tree_array_data);
        this._postorder_traversal_tree_node(tree_node.right,tree_array_data);
        tree_array_data.push(tree_node.data);
    }
};

//测试代码
BinaryTree.prototype.insert_data_to_tree = function(data)
{
    //在这里写入代码
    this.root = this._insert_data_to_tree(this.root,data);
    return this.root;
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

var bt = new BinaryTree();
bt.insert_data_to_tree(5);
bt.insert_data_to_tree(8);
bt.insert_data_to_tree(3);
bt.insert_data_to_tree(2);
bt.insert_data_to_tree(4);
bt.insert_data_to_tree(7);
bt.insert_data_to_tree(6);
bt.insert_data_to_tree(9);
console.log(bt);




//以下是使用非递归的方法实现的 先序遍历