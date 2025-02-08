function myFunction(a, b) {
  // Type checking:
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Both inputs must be numbers.';
  }
  return a + b;
}

console.log(myFunction(5, '5')); // Output: Error: Both inputs must be numbers.

// Or using type coercion:
function myFunction2(a, b) {
  return Number(a) + Number(b);
}

console.log(myFunction2(5, '5')); // Output: 10