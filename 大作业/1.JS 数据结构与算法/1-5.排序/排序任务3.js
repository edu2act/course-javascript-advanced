/////任务三/////
// 本课学习选择排序。它的工作原理如下：
// 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，
// 然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
// 以此类推，直到所有元素均排序完毕。
// 在select_sort中添加代码，函数返回排序对象，排序结果存放在desc_sort中，按照升序（从小到大）排序。
function ArraySort(data)
{
    this.desc_sort = data.concat();
    return this;
}
ArraySort.prototype.select_sort = function(){
    for(var i = 0; i < this.desc_sort.length; i++)
    {
        var k = i;
        for(var j = i+1; j != this.desc_sort.length; j++){
            if(this.desc_sort[j] < this.desc_sort[k]) k = j;
        }
        if (k != i){
            this._swap_data(this.desc_sort,k,i);
        }
    }
    return this;
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
arrSort.select_sort();
console.log(arrSort.desc_sort);