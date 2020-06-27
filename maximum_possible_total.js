function maxTotal(numbersArr) {
    if (numbersArr.length != 10) return "Array must have 10 numbers";
    var total = 0;
    var max;
    for (var i = 0; i < 5; i++) {
        max = Math.max.apply(null, numbersArr);
        total += max;
        numbersArr.splice(numbersArr.indexOf(max), 1);
    }
    return total;
}
