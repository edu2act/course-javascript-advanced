/////任务四/////
// 本课学习希尔排序。希尔排序是基于插入排序的以下两点性质而提出改进方法：
// 1.插入排序在对几乎已经排好序的数据操作时， 效率高， 即可以达到线性排序的效率
// 2.插入排序一般来说是低效的， 因为插入排序每次只能将数据移动一位
// 在shell_sort中添加代码，函数返回排序对象，排序结果存放在desc_sort中，按照升序（从小到大）排序。

// 快速排序由C. A. R. Hoare在1962年提出。
// 它的基本思想是：通过一趟排序将要排序的数据分割成独立的两部分，
// 其中一部分的所有数据都比另外一部分的所有数据都要小，
// 然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，
// 以此达到整个数据变成有序序列。

function ArraySort(data)
{
    this.desc_sort = data.concat();
    return this;
}
ArraySort.prototype.shell_sort = function()
{
    var gap = 1;
    while (gap < this.desc_sort.length/3) {
        gap = 3 * gap + 1;
    }
    while (gap >= 1) {
        this._sort_gap_length(this.desc_sort,gap);
        gap = (gap-1)/3;
    }
    return this;
};
ArraySort.prototype._sort_gap_length = function(sort_data,gap)
{
    for (var i = gap; i < this.desc_sort.length; i++) {
        for (var j = i; j >= gap && this.desc_sort[j] < this.desc_sort[j-gap];
             j -= gap) {
            this._swap_data(sort_data, j, j-gap);
        }
    }
};
ArraySort.prototype._swap_data = function (swap_data,i,j) {
    var temp = swap_data[i];
    swap_data[i] = swap_data[j];
    swap_data[j] = temp;
};
//测试代码
var arrSort = new ArraySort([7,5,3,4,1,9,2,6,8]);
// var arrSort = new ArraySort("753419268");
console.log(arrSort.desc_sort);
arrSort.shell_sort();
console.log(arrSort.desc_sort);