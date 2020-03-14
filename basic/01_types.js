console.log('=======\n');
/* Всего 7 типов
 * string, number, boolean, null, undefined, symbol, object
 */
console.log(typeof 'string');
console.log(typeof 1);
console.log(typeof true);
console.log(typeof null); // на самом деле это отдельный тип. но то что typeof показывает object это принятая ошибка в языке
console.log(typeof undefined);
console.log(typeof Symbol('symbol'));
console.log(typeof {name: 'alex'});
console.log('\n=======\n');

/* Приведение к boolean
 * либое из ниже перечисленных приводится к FALSE
 * '', 0, null, undefined, NaN, false
 */
console.log('=======\n');
console.log(new Boolean(''));
console.log(new Boolean(0));
console.log(new Boolean(null));
console.log(new Boolean(undefined));
console.log(new Boolean(NaN));
console.log(new Boolean(false));
console.log('\n=======');

/* Приведение к boolean
 * либое из ниже перечисленных приводится к FALSE
 * '', 0, null, undefined, NaN, false
 */
console.log('=======\n');
console.log(new Boolean(''));
console.log(new Boolean(0));
console.log(new Boolean(null));
console.log(new Boolean(undefined));
console.log(new Boolean(NaN));
console.log(new Boolean(false));
console.log('\n=======');
