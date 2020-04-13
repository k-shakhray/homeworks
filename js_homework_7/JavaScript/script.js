function arrayListPrint(array) {
    let printString = `<ul>`;
    let printArray = array.map((a) => {
        return `</n><li>${a}</li>`
    });
    printArray.forEach((a) => {
        printString += a;
    });
    printString += `</ul>`;

    document.body.innerHTML = printString;
}

let arr = ['Simple', 'method', 'to', 'create', 'a', 'list'];

arrayListPrint(arr);