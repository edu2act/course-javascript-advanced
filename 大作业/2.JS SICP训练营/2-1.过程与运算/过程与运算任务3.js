//任务三//
// 假定有1美分,5美分,10美分,25美分,50美分的零钱无限多，试把任意钱换成零钱，
// 写一个函数计算有多少种换法。
// 请将代码写在count_change函数里，返回有多少种换算方法。
// 该函数有一个参数，传入的是一个数字，单位是美分，比如，1美元，传入的是100美分。

function count_change(amount,n){
    var m = n || 5;
    if(amount === 0) return 1;
    if(amount < 0 || n === 0) return 0;
    return  count_change(amount, m - 1) + count_change(amount - value_of_currency(m), m);
}

function value_of_currency(n){
    if (n === 1) return 1;
    if (n === 2) return 5;
    if (n === 3) return 10;
    if (n === 4) return 25;
    if (n === 5) return 50;
}
count_change(123);
