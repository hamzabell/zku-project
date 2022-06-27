
const AppService = {
    unflatten: function (puzzle, nCol, toFill) {
        const result = [];
        const expectedUniqueValueCount = [];
        const blocked = [];
        const zeroCount = [];
        let temp = [];
        let j = 0;
        let k = 0;
        let b = 0;
        let z = 0;
        for(let i = 0; i < puzzle.length; i++) {
            temp.push(puzzle[i]);

            if(toFill.includes(i)) {
                k += 1
            } else {
                if(puzzle[i] == 0) z+=1;
                if(puzzle[i] != 0 ) b += 1;
            }

            if(temp.length == nCol) {

                result.push(puzzle.slice(j, i+1))
                expectedUniqueValueCount.push(k);
                blocked.push(b);
                zeroCount.push(z);
                j = j + 5;
                temp = [];
                k = 0;
                b = 0;
                z = 0;
            }
        }
        return [result, expectedUniqueValueCount, blocked, zeroCount];
    },
    validateSolution: function (puzzle, nCol, toFill) {
        let isValid = true;
        let rowCount = 0;
        const [unflattenPuzzle, expectedUniqueValueCount, blocked, zeroCount] = this.unflatten(puzzle, nCol, toFill);
        
        for (let row of unflattenPuzzle) {
            const reduceByZeroCount = zeroCount[rowCount] ? 1 : 0;
            isValid = new Set(row).size - reduceByZeroCount === blocked[rowCount] + expectedUniqueValueCount[rowCount];
            rowCount += 1;
        }
        return isValid;
    }
}


export default AppService;