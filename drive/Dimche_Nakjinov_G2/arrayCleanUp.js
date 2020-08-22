function removeFromA(inputA) {
    resultA = [];
    for (i = 0; i < inputA.length; i++) {
        if (Array.isArray(inputA[i]) === true ) {
            inArray = inputA[i];
            tempArray = [];
            for (i = 0; i < inArray.length; i++) {
                if (inArray[i] !== null && inArray[i] !== "" && inArray[i] !== undefined && isNaN(inArray[i]) === false) {
                    tempArray.push(inArray[i]);
                }

            }
            resultA.push(tempArray);
        } else {
            if (inputA[i] !== null && inputA[i] !== "" && inputA[i] !== undefined && isNaN(inputA[i]) === false) {
                resultA.push(inputA[i]);
            }
        }
    }
    return resultA;
}


//removeFromA([NaN, 0, 15, false, -22, "", undefined, 47, null]);

//Bonus:

removeFromA([1, NaN, 2, [3, NaN, 5]]);