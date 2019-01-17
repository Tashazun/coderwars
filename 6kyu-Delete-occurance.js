// Delete occurances of an element if it occurs more than once
function deleteNth(arr,n){
    if (!arr) { return null; }
    if ( n < 1) { return []; }

    const result = [];
    const count = {};
    for (let i = 0; i < arr.length; i++){
        const item = arr[i];
        const counting = count[item] || 0;
        if (counting < n) {
            result.push(item);
            count[item] = counting + 1;
        }
    }    
    return result;
}