'use strict';

{
 const n = Number(prompt('Yen?'));
 const amount = (n / 138.91).toFixed(2); //小数点を切り上げる
 console.log(`USD: ${Number(amount).toLocaleString()}`); //カンマを入れる
}

