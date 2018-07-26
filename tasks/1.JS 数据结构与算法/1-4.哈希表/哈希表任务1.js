/////任务一/////
// 本课学习的是哈希表的一种，他是由数组组成，每个数组元素指向一个用于存储数组。
// 请在create_hash_table中添加代码，函数的参数为哈希表，函数返回哈希表对象。
function HashTable() {
    this.table = null;
}

HashTable.create_hash_table = function(hash_size)
{
    //在这里写入代码
    var ht = new HashTable();
    ht.table = new Array(hash_size);
    for(var i=0;i<hash_size;i++){
        ht.table[i] = new Array();
    }
    return ht;
};