function getPermutations(arr) {
    if (arr.length === 0) return [[]];
    
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let rest = arr.slice(0, i).concat(arr.slice(i + 1));
        let permutations = getPermutations(rest);
        for (let perm of permutations) {
            result.push([arr[i], ...perm]);
        }
    }
    return result;
}

function isValidTime([h1, h2, m1, m2]) {
    let hours = h1 * 10 + h2;
    let minutes = m1 * 10 + m2;
    return hours < 24 && minutes < 60; // Horas deben estar entre 00-23 y minutos entre 00-59
}

function findValidTimes(digits) {
    let permutations = getPermutations(digits);
    let validTimes = new Set();

    for (let perm of permutations) {
        if (isValidTime(perm)) {
            let timeStr = `${perm[0]}${perm[1]}:${perm[2]}${perm[3]}`;
            validTimes.add(timeStr);
        }
    }

    return {
        totalPermutations: permutations.length,
        validTimes: Array.from(validTimes)
    };
}

// 🔹 Prueba con [1,2,3,4]
console.log(findValidTimes([1, 2, 3, 4]));
