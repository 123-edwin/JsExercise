function allPermutations(numbers) {
  if (numbers.length == 0) return [[]];
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const rest = numbers.slice(0, i).concat(numbers.slice(i + 1));
    const permutations = allPermutations(rest);
    for (let perm of permutations) {
      result.push([numbers[i], ...perm]);
    }
  }
  return result;
}

function validHours([h1, h2, m1, m2]) {
  let hours = h1 * 10 + h2;
  let minutes = m1 * 10 + m2;
  return hours < 24 && minutes < 60;
}

function findValidHours(numbers) {
  let permutations = allPermutations(numbers);
  let hours = new Set();
  for (let perm of permutations) {
    if (validHours(perm)) {
      hours.add(`${perm[0]}${perm[1]}:${perm[2]}${perm[3]}`);
    }
  }
  return {
    totalPermutations: permutations.length,
    validHours: Array.from(hours),
    totalHours: hours.size
  };
}

const numbers = [1, 2, 3, 4];
console.log(findValidHours(numbers));
