//任务七//
// 本节练习完成"最佳存款方案"的算法
// 假设银行整存零取的月息为0.63%。现在某人手中有一笔钱，
// 他打算在今后的5年中的每年年底取出1000元，到第5年时刚好取完，请算出他存钱时应存入多少？
// 由上面描述可以得到如下结果：
//
// 第5年年初的存款 = 1000/(1 + 12*0.0063)
// 完成函数best_deposit_scheme()，函数返回值为：存入的钱
function best_deposit_scheme()
{
    let i;
    let money = 0.0;
    for(i = 0; i < 5; i++)
    {
        money = (money + 1000) / (1 + 12 * 0.0063);
    }
    //console.log("%0.2f \n",money);
    return money;
}


// (function  main()
// {
//     let i;
//     let money = 0.0;
//     for(i = 0; i < 5; i++)
//     {
//         money = (money + 1000) / (1 + 12 * 0.0063);
//     }
//     console.log("%0.2f \n",money);
//     return 0;
// }());