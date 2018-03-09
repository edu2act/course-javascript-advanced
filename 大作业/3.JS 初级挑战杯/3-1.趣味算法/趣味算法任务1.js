//任务一//
// 本节我们通过著名的"百钱百鸡"问题学习用js写算法
// 一只公鸡值五钱，一只母鸡值三钱，三只小鸡值一钱，现在要用一百钱买一百只鸡，请问公鸡、母鸡、小鸡各多少只？
// 声明一个数组变量arr_result，统计所有的满足条件的方案，并将这些方案以对象的形式存到变量arr_result中，数组中对象的格式如下：
//
// {cock:10,hen:10,chicken:10}
// //cock、hen、chicken分别为公鸡、母鸡、小鸡，表示对象的三个键
// //键对应的数值，分别为不同种类鸡的个数
// 根据以上描述完成函数hundred_hundred_chickens()

/*
//C 语言实现
#include<stdio.h>
void main()
{
 int a,b,c;
 for(a=0;a<20;a++)        //公鸡可能的只数
    for(b=0;b<(100-5*a)/3;b++)        //母鸡可能的只数
    {  c=100-a-b;                //总数为100时，小鸡的只数
        if(c%3==0 && a*5+b*3+c/3==100)         //若小鸡只数是3的倍数，且总价为100
        printf("a=%d\tb=%d\tc=%d\n",a,b,c);
    }
 getch();
 return 0;
}
 */
function hundred_hundred_chickens()
{
    var arr_result = [];
    for(var a=0;a<20;a++){//公鸡可能的只数
        for(var b=0;b<(100-5*a)/3;b++)//母鸡可能的只数
        {
            var c=100-a-b;//总数为100时，小鸡的只数
            if(c%3==0 && a*5+b*3+c/3==100){//若小鸡只数是3的倍数，且总价为100
                //console.log(a,b,c);
                arr_result.push({cock:a,hen:b,chicken:c});
            }
        }
    }
    return arr_result;
}
hundred_hundred_chickens();