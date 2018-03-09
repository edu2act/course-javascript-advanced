/////任务二/////
// 本课学习的是哈希表的插入，通过余数计算出来他的index，再放入数组的末尾。
// 详细解释：将输入的字符串通过charCodeAt获得每一个对应的ascii码，并进行累加，
// 然后通过余数计算出来他的index，然后放入对应的数组中，要求不要重复
// 请在insert_str_from_hash中添加代码，函数的参数为要插入的数据，函数返回哈希表的index
function HashTable() {
    this.table = null;
}
HashTable.prototype.insert_str_from_hash = function(str)
{
    var index = this._string_to_num(str) % this.table.length;
    return this._put_data_to_hash(index,str);
};
HashTable.prototype._put_data_to_hash = function(index, str)
{
    if (this.table[index].indexOf(str) < 0)//确保不会重复添加
    {
        this.table[index].push(str);
    }
    return index;
};
HashTable.prototype._string_to_num = function(str)
{
    var total = 0;
    for (var i = 0; i < str.length; ++i) {
        total += str.charCodeAt(i);
    }
    return total;
};

//测试代码如下
HashTable.create_hash_table = function(hash_size)
{
    //在这里写入代码
    var temp_ht = new HashTable();
    temp_ht.table = new Array(hash_size);
    for(var i=0;i<hash_size;i++){
        temp_ht.table[i] = new Array();
    }
    return temp_ht;
};
var ht = HashTable.create_hash_table(5);
ht.insert_str_from_hash("ab");
ht.insert_str_from_hash("cd");
ht.insert_str_from_hash("ed");
ht.insert_str_from_hash("gh");
ht.insert_str_from_hash("xx");
ht.insert_str_from_hash("yy");
ht.insert_str_from_hash("zz");
console.log(ht);
