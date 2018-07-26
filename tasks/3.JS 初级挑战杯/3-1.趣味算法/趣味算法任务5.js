//任务五//
// 用js完成"兔子产子问题"，计算每个月兔子的总个数
// 有一对兔子，从出生后的第3个月起每个月都生一对兔子。
// 小兔子长到第3个月后每个月又生一对兔子，假设所有的兔子都不死，
// 问30个月内每个月的兔子总数分别为多少？
// 声明数组变量arr_rabbit_count，根据上面的描述，
// 计算出这30个月内，每个月兔子的总个数，并把它保存到数组变量arr_rabbit_count中
// 数组arr_rabbit_count中第一个元素对应的是第一个月兔子的数量 第n个元素对应着第n个月兔子的数量
// 根据以上描述完成函数number_of_rabbit_child()，返回值为数组arr_rabbit_count

//完成下述代码
function number_of_rabbit_child()
{
    //var arr_rabbit_count = [1,1];

    var rabbitNum = 1;
    function getRabbitLiveMoth(){

    }

    for(var month=2;month<30;month++ ){
        if(month > 0 && month < 3){
            //arr_rabbit_count.push(1);
            return rabbitNum;
        } else {
            return getRabbitNum(month - 1) + getRabbitNum(month - 2);
        }
    }
    //return arr_rabbit_count;
}

/*
public int getRabbitNum(int month) {
    int rabbitNum = 1;
    if(month > 0 && month < 3){
        return rabbitNum;
    } else {
        return getRabbitNum(month - 1) + getRabbitNum(month - 2);
    }
}
*/