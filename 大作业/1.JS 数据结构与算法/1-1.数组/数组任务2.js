/////任务二/////
// 本练习完成将一个数据添加到数组中，添加数据到数组中有两种方式：
// 将数据添加到数组的末尾，我们通过完成函数add_data_to_array_last来实现这个功能
// 将数据添加到数组的开头，我们通过完成函数add_data_to_array_first来实现这个功能
function add_data_to_array_last( data_arrays, data )
{
    //从数组尾部增加一个数据
    data_arrays.push(data);

    //试着不用Array的原型方法，自己写一个逻辑实现上述功能

}

function add_data_to_array_first( data_arrays, data )
{
    //从数组开头增加一个数据
    data_arrays.unshift(data);

    //试着不用Array的原型方法，自己写一个逻辑实现上述功能

}

