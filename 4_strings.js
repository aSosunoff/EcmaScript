/*
let title = "Welcome";

const isVisible = () => Math.random() > 0.5;

const template = `
${isVisible() ? `<p>Visible</p>` : ''}
<h1 id='demo' style="color: #ffffff">${title}</h1>
`;

console.log(template);
*/

let str = ' Hello ';

console.log(str.startsWith(' He'));
console.log(str.endsWith('lo '));
console.log(str.includes('ell'));
console.log(str.repeat(3));

console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

console.log(str.padStart(10, '--'));
console.log(str.padEnd(10, '--'));