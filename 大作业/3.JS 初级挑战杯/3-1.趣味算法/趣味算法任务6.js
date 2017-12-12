//任务六//
// 本节练习用js完成"牛顿迭代法求方程根"的算法
// 编写用牛顿迭代法求方程根的函数。方程为 a*x*x*x+b*x*x+c*x+d=0，
// 系数为a，b，c，d，这四个系数为函数的参数。求x在1附近的一个实根。
// 函数f(x)=a*x*x*x+b*x*x+c*x+d，f(x)的导数为f'(x)，f'(x)=3*a*x*x+2*b*x+c
// 牛顿迭代法的公式是：x = x0 - f(x0)/f'(x0)，设定迭代到|x-x0|<=0.00001时结束
// 根据以上描述完成函数roots_newton_solve_equation(a,b,c,d)，
// 参数为：方程式的系数，返回值为：方程式的根

function roots_newton_solve_equation(a,b,c,d)
{
    let x1=1,x,f,f1;
    //迭代
    do
    {   x=x1;
        f=((a*x+b)*x+c)*x+d;//原函数
        f1=(3*a*x+2*b)*x+c;//求导之后的函数
        x1=x-f/f1;
    } while(Math.abs(x1-x)>=0.00000001);
    return x1;
}

/*
describe('practice-1-6', function () {
    it("根据牛顿迭代法求方程的根", function () {
        var root_x1 = roots_newton_solve_equation(2,-4,3,-6);
        console.info('root_x1:'+root_x1);
        expect(root_x1.toFixed(2)).toBe("2.00");

        var root_x2 = roots_newton_solve_equation(4,-2,3,-8);
        console.info('root_x2'+root_x2);
        expect(root_x2.toFixed(2)).toBe("1.22");

        var root_x3 = roots_newton_solve_equation(2,-5,3,-3);
        console.info('root_x3'+root_x3);
        expect(root_x3.toFixed(2)).toBe("2.13");
    });
});
 */
