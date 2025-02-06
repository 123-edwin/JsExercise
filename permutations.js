function getPermutations(arr) {
  if (arr.length === 0) return [[]];

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const rest = arr.slice(0, i).concat(arr.slice(i + 1)); // Quitar el elemento actual
    const permutations = getPermutations(rest); // Llamada recursiva
    for (let perm of permutations) {
      result.push([arr[i], ...perm]); // Agregar el elemento actual al inicio
    }
  }
  return result;
}

const numbers = [1, 2];
console.log(getPermutations(numbers));
