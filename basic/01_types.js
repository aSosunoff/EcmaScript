console.log("=======\n");
/* Всего 7 типов
 * string, number, boolean, null, undefined, symbol, object
 */
console.log(typeof "string");
console.log(typeof 1);
console.log(typeof true);
console.log(typeof null); // на самом деле это отдельный тип. но то что typeof показывает object это принятая ошибка в языке
console.log(typeof undefined);
console.log(typeof Symbol("symbol"));
console.log(typeof { name: "alex" });
console.log("\n=======\n");

/* Приведение к boolean
 * либое из ниже перечисленных приводится к FALSE
 * '', 0, null, undefined, NaN, false
 */
console.log("=======\n");
console.log(new Boolean("")); // false
console.log(new Boolean(0)); // false
console.log(new Boolean(null)); // false
console.log(new Boolean(undefined)); // false
console.log(new Boolean(NaN)); // false
console.log(new Boolean(false)); // false
console.log("\n=======");

/* Приведение к number
 * либое из ниже перечисленных приводится к FALSE
 * '', 0, null, undefined, NaN, false
 */
console.log("=======\n");
console.log(new Number(undefined)); // NaN
console.log(new Number(null)); // 0
console.log(new Number(true)); // 1
console.log(new Number(false)); // 0
console.log(new Number("1")); // 1
console.log(new Number("1das")); // NaN
console.log(new Number("")); // 0
console.log(new Number([])); // 0
console.log(new Number({})); // NaN
console.log("\n=======");

/*
 * при '+' если один из операндов строка то приводится к строке
 * с остальными арифметическими операндами происходит преобразование к Number
 */
console.log("=======\n");
console.log(1 + "2"); // string 12
console.log("" + 1 + 0); // string 10
console.log("" - 1 + 0); // number -1
console.log("3" * "3"); // number 9
console.log(4 + 10 + "px"); // string 14px
console.log("px" + 5 + 10); // string px510
console.log("42" - 40); // number 2
console.log("42px" - 2); // NaN
console.log(null + 2); // number 2
console.log(undefined + 42); // NaN
console.log("\n=======");
console.log(0 == null)