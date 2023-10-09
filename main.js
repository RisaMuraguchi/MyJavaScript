'use strict';

{
  const calc = (num, func) => {
    return func(num);
  };

  console.log(calc(20, (num) => {
    return num * 2;
  }));
}