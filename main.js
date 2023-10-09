'use strict';

{
  function calculateTotal(price, amount, rate = 1.1) {
    // if (amount >= 100) {
    //   return price * amount;
    // } else {
    //   return price * amount * rate;
    // }

    if (amount >= 100) {
      // 早期リターン
      return price * amount;
    }
    return price * amount * rate;
  }

  console.log(calculateTotal(100, 100));
  console.log(calculateTotal(1000, 10));
}