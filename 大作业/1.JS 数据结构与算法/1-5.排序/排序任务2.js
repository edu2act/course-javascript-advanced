/////任务二/////
// 本课学习冒泡排序，他的工作原理如下：
// 它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。
// 走访数列的工作是重复地进行直到没有再需要交换后完成排序。
// 在bubble_sort中添加代码，函数返回排序对象，排序结果存放在desc_sort中，
// 按照升序（从小到大）排序。
function ArraySort(data)
{
    this.desc_sort = data.concat();
    return this;
}
ArraySort.prototype.bubble_sort = function ()
{
    for(var i = 0 ; i<this.desc_sort.length; i++){
        for(var j = this.desc_sort.length - 1; i != j; j--){
            if(this.desc_sort[j] < this.desc_sort[j-1]){
                this._swap_data(this.desc_sort,j,j-1);
            }
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
arrSort.bubble_sort();
console.log(arrSort.desc_sort);