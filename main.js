'use strict';

{
  function getRandomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
  }
 for (let i = 0; i < 10; i++) {
  const n = getRandomInteger(5);
  console.log(`${i}: ${n}`);
 }
}

