/////任务二/////
// 假设已经存在一个二叉树,将任意一个数据插入到二叉树
// 请在insert_to_binary_tree中添加代码，函数的参数为要插入的数据，函数返回二叉树的根节点。
// 将较小的数添加在左节点,将较大的数添加在右节点

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
BinaryTree.prototype.insert_data_to_tree = function(data)
{
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

//测试代码如下
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


