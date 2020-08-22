function listNumbers() {
    var result = "";
    for(i=1;i<21;i++) {
        if(i%2 !== 0) {
            result = result + i + " ";
        }
        else {
            result = result + i + "\n";
        }
    }
    return result;
}

listNumbers();