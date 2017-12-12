// 任务十//
// 本节练习实现数制转换的算法
// 给定一个M进制的数x，实现对x向任意的一个非M进制的数的转换
// 数制中的基数：如十进制的基数为10，八进制的基数为8，二进制的基数为2，十六进制的基数为16
// 数制中的权位：如十进制的个位对应的权位为10的0次方，十位对应的权位为10的1次方，
// 百位对应的权位为10的2次方
// 二进制、八进制、十六进制相互转换，先转换成十进制，再转换成其他进制
// 根据对数制的了解，实现函数number_system_conversion(num_detail)，
// 函数的参数num_detail为一个对象，表示如下：
//
// {pre_num:'10',pre_num_system:'10',after_num_system:'16'}
// //pre_num表示转换前的数字
// //pre_num_system表示转换前的数制
// //after_num_system表示转换后的数制
// 函数的返回值为一个对象，表示如下：
//
// {after_num_system:'16',after_num:'A'}
// //after_num_system表示转换后的数制
// //after_num表示转换后的数字
// 注意：十六进制的数据用字母表示的都是用大写，如 A~F

/*
describe('practice-1-10', function () {
    it("不同进制的数进行数制转换", function () {
        var res_des_10 = {pre_num:'15',pre_num_system:'16',after_num_system:'10'};
        var res_des_16 = {pre_num:'10',pre_num_system:'8',after_num_system:'16'};
        var res_des_8 = {pre_num:'85',pre_num_system:'10',after_num_system:'8'};
        var res_des_2 = {pre_num:'20',pre_num_system:'10',after_num_system:'2'};

        expect(number_system_conversion(res_des_10).after_num_system).toBe('10');
        expect(number_system_conversion(res_des_10).after_num).toBe('21');

        expect(number_system_conversion(res_des_16).after_num_system).toBe('16');
        expect(number_system_conversion(res_des_16).after_num).toBe('8');

        expect(number_system_conversion(res_des_8).after_num_system).toBe('8');
        expect(number_system_conversion(res_des_8).after_num).toBe('125');

        expect(number_system_conversion(res_des_2).after_num_system).toBe('2');
        expect(number_system_conversion(res_des_2).after_num).toBe('10100');
    });
});
 */

/*
#include<stdio.h>
int a[256],k=0;//用数组实现栈
void push(int x)
{
	a[k++]=x;
}
int pop()
{
	return a[--k];
}
bool empty()
{
	return k==0;
}
int main()
{
	int m,xm,x10,n,xn;
	scanf("%d%d%d",&m,&xm,&n);
	while(xm)//提取各个位
	{
		push(xm%10);
		xm/=10;
	}
	x10=0;
	while(!empty())//转化成10进制
	{
		x10=x10*m+pop();
	}

	while(x10)//求余数
	{
		push(x10%n);
		x10/=n;
	}
	xn=0;
	while(!empty())//合成n进制数
	{
		xn=xn*10+pop();
	}
	printf("%d",xn);
}
 */

