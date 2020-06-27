// tune([0, 246.94, 0, 0, 0, 80]) ➞ [" - ", "OK", " - ", " - ", " - ", ">>•"]
// tune([329, 246, 195, 146, 111, 82]) ➞ ["OK", "OK", ">•", ">•", "•<", "OK" ]


function tune(arr) {
    var frequency = [329.63,246.94,196.00,146.83,110.00,82.41];

    const tuneGuitar = (el, i) => {
        if (el === 0) return ' - ';
        if(el == frequency[i]) return 'OK';
        var percent = (el / frequency[i] * 100).toFixed(2) - 100;
        if (percent >= 3)  return '•<<';
        if (percent <= -3)  return '>>•';
        if (percent >= 1) return '•<';
        if (percent <= -1)  return '>•';

    }
    return arr.map(tuneGuitar)
}

console.log(tune([0, 246.94, 0, 0, 0, 80]))



