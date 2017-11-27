/////任务一/////
// 本课学习的是插入排序，它的工作原理如下：
// 通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
// 在insert_sort中添加代码，函数返回排序对象，排序结果存放在desc_sort中，按照升序（从小到大）排序。
function ArraySort(data)
{
    this.desc_sort = data.concat();
    return this;
}
ArraySort.prototype.insert_sort = function()
{
    //在这里写入代码
    return this;
};