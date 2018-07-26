//任务三//
// 本节写一个关于"打鱼还是晒网"问题的算法
// 中国有句俗语叫"三天打鱼两天晒网"。某人从1990年1月1日起开始"三天打鱼两天晒网"，问这个人在以后的某一天中是"打鱼"还是"晒网"？
// 计算从1990年1月1日开始到指定日期共多少天，保存在变量count_day中
// 由于"打鱼"和"晒网"的周期为5天，所以变量count_day对5取余，若余数为1、2、3，则给变量str_result赋值"打鱼"；否则，给变量str_result赋值"晒网"
// 根据以上描述完成函数catch_fish_or_net_in_sun(arr_input_date)，参数arr_input_date为存储日期的对象，函数返回值为变量str_result，对象格式如下:
//
// {year:2014,month:3,day:28}//表示日期是2014年3月28日
function catch_fish_or_net_in_sun(arr_input_date)
{
    var count_day ;
    var str_result;

    var inputDate = new Date(arr_input_date.year, arr_input_date.month, arr_input_date.day);
    var startDate = new Date(1990,1,1);

    //有考虑闰年的情况
    //count_day = (arr_input_date.year-1990)*365+(arr_input_date.month-1)*30+(arr_input_date.day-1);

    count_day=(inputDate-startDate)/(1000*60*60*24)+1;
    if((count_day%5<4)&&(count_day%5>0)){
        str_result = "打鱼";
    }else{
        str_result = "晒网";
    }
    return str_result;
}
//测试
for(var i=2;i<20;i++){
    console.log(catch_fish_or_net_in_sun({year:1990,month:1,day:i}));
}
console.log(catch_fish_or_net_in_sun({year:1999,month:2,day:21}));
console.log(catch_fish_or_net_in_sun({year:1999,month:2,day:22}));
console.log(catch_fish_or_net_in_sun({year:1999,month:2,day:23}));
console.log(catch_fish_or_net_in_sun({year:1999,month:2,day:24}));
console.log(catch_fish_or_net_in_sun({year:1999,month:2,day:25}));
console.log(catch_fish_or_net_in_sun({year:1999,month:2,day:26}));
console.log(catch_fish_or_net_in_sun({year:1999,month:2,day:27}));
console.log(catch_fish_or_net_in_sun({year:1999,month:2,day:28}));

console.log(catch_fish_or_net_in_sun({year:2012,month:10,day:21}));
console.log(catch_fish_or_net_in_sun({year:2012,month:10,day:22}));
console.log(catch_fish_or_net_in_sun({year:2012,month:10,day:23}));
console.log(catch_fish_or_net_in_sun({year:2012,month:10,day:24}));
console.log(catch_fish_or_net_in_sun({year:2012,month:10,day:25}));
console.log(catch_fish_or_net_in_sun({year:2012,month:10,day:26}));
console.log(catch_fish_or_net_in_sun({year:2012,month:10,day:27}));
console.log(catch_fish_or_net_in_sun({year:2012,month:10,day:28}));
console.log(catch_fish_or_net_in_sun({year:2012,month:10,day:29}));
console.log(catch_fish_or_net_in_sun({year:2012,month:10,day:30}));


console.log(catch_fish_or_net_in_sun({year:2011,month:4,day:3}));
console.log(catch_fish_or_net_in_sun({year:2011,month:4,day:4}));
console.log(catch_fish_or_net_in_sun({year:2011,month:4,day:5}));
console.log(catch_fish_or_net_in_sun({year:2011,month:4,day:6}));
console.log(catch_fish_or_net_in_sun({year:2011,month:4,day:7}));
console.log(catch_fish_or_net_in_sun({year:2011,month:4,day:7}));

