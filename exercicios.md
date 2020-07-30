# 1-A const printNumbers = (n: number) => {
  if (n >= 0) {
    printNumbers(n - 1);
    console.log(n);
  }
};

# 1-B const printNumbers = (n: number) => {
  if (n >= 0) {
    console.log(n);
    printNumbers(n - 1);
  }
};

# 2 export const calculateSumTo = (n: number, acc: number = 0): number => {
  if (n === 0) {
    return acc;
  }
  return calculateSumTo(n - 1, acc + n);
};

console.log(calculateSumTo(3));

# 3 export const printArray = (arr: number[], i: number = arr.length - 1) => {
  if (i >= 0) {
    printArray(arr, i - 1);
    console.log(`Elemento ${i}: `, arr[i]);
  }
};

const array = [1, 2, 3, 4];
printArray(array);