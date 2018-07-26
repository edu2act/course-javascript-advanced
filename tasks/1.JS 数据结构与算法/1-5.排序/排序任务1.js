/////任务一/////
// 本课学习的是插入排序，它的工作原理如下：
// 通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
// 在insert_sort中添加代码，函数返回排序对象，排序结果存放在desc_sort中，按照升序（从小到大）排序。

//各种排序算法及动画展示  http://www.atool.org/sort.php

//concat()方法的作用，思考下述代码
// var arrObj = [2,3,1];
// arrObj[-1] = "x";
// console.log(arrObj,arrObj.concat());


function ArraySort(data)
{
    this.desc_sort = data.concat();
    return this;
}
ArraySort.prototype.insert_sort = function()
{
    for(var i = 1,temp,j; i < this.desc_sort.length; i++){
        temp = this.desc_sort[i];
        j = i - 1;
        while( j >= 0 && temp < this.desc_sort[j]){
            this.desc_sort[j+1] = this.desc_sort[j];
            j--;
        }
        this.desc_sort[j+1] = temp;
    }
    return this;
};
//测试代码
var arrSort = new ArraySort([7,5,3,4,1,9,2,6,8]);
// var arrSort = new ArraySort("753419268");
console.log(arrSort.desc_sort);
arrSort.insert_sort();
console.log(arrSort.desc_sort);