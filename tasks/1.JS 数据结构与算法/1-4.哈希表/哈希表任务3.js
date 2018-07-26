/////任务三/////
// 本课学习的是哈希表的查找，通过余数计算出来他的index，然后在index对应的数组里进行查找。
// 请在insert_str_from_hash中添加代码，函数的参数为要查找的数据，函数返回一个对象，对象如下

//{row:,//哈希表中的index，如果没有查找到返回向对应的index，不返回-1
// column:}//哈希表中index对应的数组中所对应的位置,如果没有查找到数据返回-1

function HashTable() {
    this.table = null;
}
HashTable.prototype.find_str_from_hash = function(str)
{
    var index = this._string_to_num(str) % this.table.length;
    return {row:index, column:this._find_data_from_hash_index(index,str)};
};
HashTable.prototype._string_to_num = function(str)
{
    var total = 0;
    for (var i = 0; i < str.length; ++i) {
        total += str.charCodeAt(i);
    }
    return total;
};
HashTable.prototype._find_data_from_hash_index = function(index, str)
{
    return this.table[index].indexOf(str);
};

//测试代码如下
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
console.log(ht.find_str_from_hash("xx"));
