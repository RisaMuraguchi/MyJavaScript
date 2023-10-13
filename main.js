'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    document.querySelectorAll('#second')[0].textContent = 'Changed!';
    // document.querySelectorAll('li')[1].textContent = 'Changed!';
    // document.querySelectorAll('li')[2].textContent = 'Changed!';
    // document.querySelectorAll('.target').forEach((li) => {
    //   li.textContent = 'Changed!';
    // });
  });
}

// forEach使える、CSSセレクタ全て利用可
querySelector('li:nth-child(2)')
querySelectorAll('ul .target')

// forEach不可
getElementById('second')
getElementsByTagName('p')
getElementsByClassName('target')
