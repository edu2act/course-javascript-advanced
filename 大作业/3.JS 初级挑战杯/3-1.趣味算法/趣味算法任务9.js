// 任务九//
// 本节完成折半查找的算法
// N个有序整数放在一维数组中，利用折半查找法查找整数m在数组中的位置，
// 若找到，则输出整数m在数组中的下标值；反之则输出"Not be found"

// 折半查找(也叫二分查找)的基本思想：每次查找前先确定数组的待查范围，
// 假设数组下标的low和high(low小于high)分别表示待查范围的下界和上界，
// mid表示待查范围的中间下标，即mid = (low+high)/2。把m与下标mid对应的值比较，
// 如果m的值大于mid对应元素的值，则下一次查找的范围放在mid与high元素之间；
// 反之，下一次查找的范围放在low与mid元素之间。若找到m，返回m的下标；
// 否则，继续查找，直到low大于high，查找结束
// 根据以上描述完成函数binary_search(arr_number,m)，
// 函数的参数为按升序排序的一维数组arr_number和需要查找的数m。
// 若数组arr_number中含有m,返回值为m的下标；否则，返回值为字符串"Not be found"

function binary_search(arr_number,m)
{
    var l=0,h=(arr_number.length-1),n;
    while(l<h)
    {
        n=Math.ceil((l+h)/2);
        if(m==arr_number[n]) break;
        if(m>arr_number[n])
            l=n;
        else
            h=n;
        if (Math.abs(l-h)<2 && m!=arr_number[h]&&m!=arr_number[l]) {
            console.log("无此数");
            n = "Not be found";
            break;
        }
    }
    console.log("是第%d个元素",n);
    return n;
}
binary_search([2,3,5,6,7,8,9],5);
binary_search([2,3,5,6,7,8,9],7);
binary_search([2,3,5,6,7,8,9],4);

/*
describe('practice-1-9', function () {
    it("使用折半查找法查找整数m在数组中的位置", function () {
        var arr_number = [2,3,5,6,7,8,9];
        var res_5 = binary_search(arr_number,5);
        var res_7 = binary_search(arr_number,7);
        var res_4 = binary_search(arr_number,4);
        expect(res_5).toBe(2);
        expect(res_7).toBe(4);
        expect(res_4).toBe("Not be found");
    });
});
 */
