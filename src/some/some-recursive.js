"use strict";

const some = (array, func) => {
  return (function someInternal(arrayInternal, counter) {
    const [head, ...tail] = arrayInternal;
    return arrayInternal.length === 0
      ? false
      : func(head, counter, array)
      ? true
      : someInternal(tail, counter + 1);
  })(array, 0);
};

export default some;
