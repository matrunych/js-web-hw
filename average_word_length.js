function avgWordLengthCalc(wordStr) {
    if(wordStr.length == 0) return 0;

    var strWithoutPunc = wordStr.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    var wordArray = strWithoutPunc.split(" ");
    var numOfWords = wordArray.length;
    var avg = 0;

    for (var i = 0; i < wordArray.length; i++) {
        avg += wordArray[i].length;
    }
    return (avg / numOfWords).toFixed(2);
}

