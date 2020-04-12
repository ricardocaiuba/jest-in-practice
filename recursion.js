const sum = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  const [head, ...tail] = arr;
  return head + sum(tail);
  //return arr[0] + sum(arr.slice(1));
};

console.log(sum([1, 2, 3, 10]));
