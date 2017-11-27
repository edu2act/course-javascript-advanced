/////任务四/////
// 本练习要求实现将一个数组插入到另外一个数组的指定位置，并产生一个新的数组的功能。例如：
// 给定两个数组
// A[1,4,5,7,9]
// B[2,3]
// 将数组B插入到数组A的位置1，结果为：[1,2,3,4,5,7,9]
// 将数组B插入到数组A的位置0，则结果为：[2,3,1,4,5,7,9]
// 但是数组A和数组B的内容都没有发生变化。

//ES5的写法
function insert_data_to_array( array_a ,insert_index, array_b)
{
    //在这里写入代码
    for(var i=0;i<array_b.length;i++){
        array_a.splice(insert_index+i,0,array_b[i]);
    }
    return array_a;
}
//ES6支持的写法
function insert_data_to_array( array_a ,insert_index, array_b)
{
    //在这里写入代码
    array_a.splice(insert_index,0,...array_b);
    return array_a;
}