// 任务八//
function bubble_sort(arr_number)
{
    for(var i = 0 ; i<arr_number.length; i++){
        for(var j = arr_number.length - 1; i != j; j--){
            if(arr_number[j] < arr_number[j-1]){
                _swap_data(arr_number,j,j-1);
            }
        }
    }
    function _swap_data (swap_data,i,j) {
        var temp = swap_data[i];
        swap_data[i] = swap_data[j];
        swap_data[j] = temp;
    };
    return arr_number;
}
bubble_sort([3,2,1,4,7,9]);