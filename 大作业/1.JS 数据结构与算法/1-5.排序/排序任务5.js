/////任务五/////
// 本课学习快速排序，快速排序使用分治法策略来把一个串行分为两个子串行，工作原理如下：
// 1.从数列中挑出一个元素，称为 "基准"，
// 2.重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。
// 在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作。
// 3.递归地把小于基准值元素的子数列和大于基准值元素的子数列排序。
// 在quick_sort中添加代码，函数返回排序对象，排序结果存放在desc_sort中，按照升序（从小到大）排序。
function ArraySort(data)
{
    this.desc_sort = data.concat();
    return this;
}
ArraySort.prototype.quick_sort = function()
{
    this.desc_sort = this._quick_sort(this.desc_sort);
    return this;
};
ArraySort.prototype._quick_sort = function(sort_data)
{
    if (sort_data.length == 0) return [];
    var left_data = [], right_data = [];
    var start_data = sort_data[0];

    for (var i = 1; i < sort_data.length; i++) {
        if (sort_data[i] < start_data) {
            left_data.push(sort_data[i]);
        }
        else {
            right_data.push(sort_data[i]);
        }
    }
    return this._quick_sort(left_data).concat(start_data,this._quick_sort(right_data));
};
//测试代码
var arrSort = new ArraySort([7,5,3,4,1,9,2,6,8]);
// var arrSort = new ArraySort("753419268");
console.log(arrSort.desc_sort);
arrSort.quick_sort();
console.log(arrSort.desc_sort);
