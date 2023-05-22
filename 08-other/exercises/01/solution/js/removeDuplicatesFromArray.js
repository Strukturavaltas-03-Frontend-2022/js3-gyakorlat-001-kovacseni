
function removeDuplicatesFromArray(arrayWithPrimitives) {
    let withoutDuplicates = new Set(arrayWithPrimitives);
    let arrayWithoutDuplicates = [];
    for (let value of withoutDuplicates) {
        arrayWithoutDuplicates.push(value);
    }
    return arrayWithoutDuplicates;
}

export default removeDuplicatesFromArray;
