/////任务一/////
// 请实现find_data_index_from_array函数，该函数的需求如下:
// 在数组data_array中查找一个元素（data），找到后返回它的index(也就是他是数组中的第几个数据）。
// 如果该元素不存在于数组中，则返回-1

function find_data_index_from_array( data_array,  data )
{
    //在这里写入代码
    var index;
    for(var i=0;i<data_array.length;i++){
        if(data_array[i] === data){
            index = i;
            break;
        }else{
            index = -1;
        }
    }
    return index;
}
