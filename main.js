'use strict';

{
  const scores = {
    'math': 80,
    'english': 90
  };
  let sum = 0;

  const entries = Object.entries(scores); //オブジェクトを配列にする

  entries.forEach((prop) => {
    sum += prop[1]
    console.log(`${prop[0]}: ${prop[1]}`);
    console.log(`Sum: ${sum}`);
    console.log(`Average: ${sum / entries.length}`);
  });



}