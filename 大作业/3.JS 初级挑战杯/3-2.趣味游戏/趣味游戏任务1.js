// 任务一//
// 本节练习人机猜数的算法
// 由计算机产生一个四位整数，请人猜这四位整数是多少。
// 用户输入一个四位数后，计算机首先判断其中有m位数字猜对了，
// 则'A'的个数是m；若猜对的数字中，位置也正确的位数为n，
// 则'B'的个数为n；将mAnB展示出来，给人以提示，接着猜，直到猜出计算机随机产生的四位整数为止。
// 例如：计算机产生的随机数是 1234，下面是人猜数字之后，系统返回的结果
//
// 1122  2A1B
// 3344  2A1B
// 3312  3A0B
// 4123  4A0B
// 1243  4A2B
// 1234  4A4B
// 游戏结束。
// 请编程实现该游戏。
// 根据以上描述，实现函数guess_number_fun(random_number,guess_number)，
// 函数的参数random_number为系统产生的随机的四位数 guess_number为用户猜的四位数，
// 函数的返回值为字符串 如：4A2B

function guess_number_fun(random_number,guess_number)
{

}

/*
describe('practice-7-1', function () {
    it("猜四位数字是多少？", function () {
        expect(guess_number_fun(1234,1256)).toBe('2A2B');
        expect(guess_number_fun(1234,1122)).toBe('2A1B');
        expect(guess_number_fun(1234,3312)).toBe('3A0B');
        expect(guess_number_fun(1234,4123)).toBe('4A0B');
        expect(guess_number_fun(1234,1243)).toBe('4A2B');
        expect(guess_number_fun(1234,1234)).toBe('4A4B');
        expect(guess_number_fun(1256,5612)).toBe('4A0B');
        expect(guess_number_fun(1256,1258)).toBe('3A3B');
        expect(guess_number_fun(1256,1256)).toBe('4A4B');
    });
});
 */
