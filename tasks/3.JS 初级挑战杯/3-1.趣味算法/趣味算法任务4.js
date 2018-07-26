//任务四//
// 本节完成"抓交通肇事犯"的算法
// 一辆卡车违反交通规则，撞人后逃跑。现场有三个人目击该事件，但是都没记住车牌号，只是记下车牌号的一些特征
// 甲说：牌照的前两位数字是相同的；乙说：牌照的后两位数字是相同的，但是与前两位不同；丙是数学家，他说：四位数的车号刚好是一个整数的平方
// 声明一个变量car_number，根据以上三个目击者的描述，计算出肇事车牌号，赋值给变量car_number
// 根据以上描述完成函数catch_traffic_accidents_make()，函数的返回值为变量car_number

function catch_traffic_accidents_make()
{
    var car_number;
    var i,j,k,c;
    for(i=1;i<=9;i++)           //i:车号前二位的取值
        for(j=0;j<=9;j++)              //j:车号后二位的取值
            if(i!=j)                   //判断二位数字是否相异
            {
                k=i*1000+i*100+j*10+j;  //计算出可能的整数
                //console.log(k);
                for(c=31;c<100;c++){   //判断该数是否为另一整数的平方
                    if(c*c==k){
                        car_number = k;
                    }
                }
            }
    return car_number;
}
catch_traffic_accidents_make();