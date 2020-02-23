const h = document.querySelector('h1');
let text2 = h.textContent;

h.textContent = h.textContent.replace(/The/g, 'Replaced');

const p = document.querySelector('.para', '.para2');
let txt = p.textContent;

p.textContent = p.textContent.replace(/the/g, 'replaced');
