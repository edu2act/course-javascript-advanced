//任务二//
// 本节写一个算法，题目是：借书方案知多少
// 问题描述：小明有5本新书，要借给A、B、C这三位学生，
// 若每人每次只能借一本（不允许任何两个人同时借一本书），则可以有多少种不同的借法？
// 声明数组变量arr_result，统计所有满足条件的借法，
// 将这些借法以对象的形式存到变量arr_result中，数组中对象的格式如下：
// {A:1,B:2,C:3}
// //A、B、C分别为A、B、C三位同学，表示对象的三个键
// //键对应的数值，分别为这三个同学借得第几本书（值为：1-5）
// 根据以上描述完成函数borrow_books_schema()

function borrow_books_schema()
{
    var arr_result = [];
    let a,b,c;
    let count = 0;
    for(a = 1;a <= 5;a++)         //a，b，c，分别从一号书借到五号书
    {
        for(b = 1;b <= 5;b++)
        {
            for(c = 1;c <= 5;c++)
            {
                if(0 != (a - b) * (b - c) * (c - a))
                {
                    count++;
                    arr_result.push({A:a,B:b,C:c})
                }
            }
        }
    }
    return arr_result;
}