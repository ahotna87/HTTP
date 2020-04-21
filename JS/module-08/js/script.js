"use.strict";
// const num = prompt("Введите число", 55);

// function colonOdd(num) {
//   return num
//     .split("")
//     .reduce(
//       (x, a, i, arr) =>
//         a % 2 !== 0 && arr[i + 1] % 2 !== 0
//           ? x.concat([a, ":"])
//           : x.concat([a]),
//       []
//     )
//     .join("");
// }

// // document.writeln(colonOdd(num));
//****************************************************************
// const num = prompt("Введите число", 5166735);

// function colonOdd(num) {
//   return num
//     .split("")
//     .map((n, i, arr) =>
//       i !== arr.length - 1 && n % 2 !== 0 && arr[i + 1] % 2 !== 0 ? n + ":" : n
//     )
//     .join("");
// }

// document.writeln(colonOdd(num));
//**************************************************************

// function well(x) {
//   let a = x.filter(i => i === "good").length;
//   return a > 1 ? "I smell a series!" : a === 1 ? "Publish!" : "Fail!";
// }

// well(["bad", "good"]);
//******************************************************************
//подсчитать сумму всех индексов до переданного значения
// var summation = function (num) {
//   return new Array(num).fill(null).reduce((acc,el,i,arr) => acc+i+1 ,0)
// }

//****************************************************************
//подсчитать сумму всех true в массиве

// function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.filter(i => i == 1).length;
//   }

// function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.filter(Boolean).length;
//     }

// **************************************************************
// function orArrays(arr1, arr2){
//   return arr1.map((el,i) => el===arr2[i] ? el: el+(arr2[i]?arr2[i]:0))
//  }

//  orArrays([1,2,3],[1,2,3]) === [1,2,3]
// orArrays([1,2,3],[4,5,6]) === [5,7,7]
// orArrays([1,2,3],[1,2]) === [1,2,3]
// orArrays([1,2],[1,2,3]) === [1,2,3]
// orArrays([1,2,3],[1,2,3],3) === [1,2,3]
//**************************************************************

// "1plus2plus3plus4"  --> "10"
// "1plus2plus3minus4" -->  "2"

// function calculate(str) {

//   return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();
// }

// function calculate(str) {
//   return eval(str.split("plus").join("+").split("minus").join("-")).toString();

// }

// function calculate(str) {
//   return String(eval(str.replace(new RegExp('plus', 'g'),'\+').replace(new RegExp('minus', 'g'),'\-')));

//   }

// function calculate(str) {
//   return String(eval(str.replace(/plus|minus/g,re=> re === 'plus' ? '+' : '-')))
// }
//***********************************************************************************
// вернуть первый не повторяющийся символ в строке

// function firstNonRepeated (string) {
//   return [...string].find(i => string.indexOf(i) == string.lastIndexOf(i)) || null
// }
// function firstNonRepeated (string) {
// return [...string].find(e => string.match(new RegExp(e, 'g')).length === 1)||null;
// }
//**********************************************************************************
// multiplyAll = a => x => a.map(e => e * x);

// multiplyAll([1, 2, 3])(2) = [2, 4, 6];

// ********************************************************************************
// сколько раз меняется знак
// Test.assertEquals(catchSignChange([1, 3, 4, 5]), 0);
// Test.assertEquals(catchSignChange([1, -3, -4, 0, 5]), 2);
// Test.assertEquals(catchSignChange([]), 0);
// Test.assertEquals(catchSignChange([-47,84,-30,-11,-5,74,77]), 3);

// function catchSignChange(arr) {
//   return arr.slice(1).filter((e,i)=>(e<0)!==(arr[i]<0)).length;
// }

// function catchSignChange (arr){
//   return arr.reduce((acc,el,i,arr) => ((i !== arr.length - 1)&& arr[i+1]===0 ? arr[i+1]=1 : arr[i+1] ) ? ( Math.sign(el) !== Math.sign(arr[i+1]) ? acc = acc+1 : acc) : acc ,0)
//   }

// function catchSignChange(arr) {
//   return arr.slice(1).filter((e,i)=>(e<0)!==(arr[i]<0)).length;
// }

//*********************************************************************************

// Test.assertEquals(vaporcode("Let's go to the movies"),"L  E  T  '  S  G  O  T  O  T  H  E  M  O  V  I  E  S");
// Test.assertEquals(vaporcode("Why isn't my code working?"),"W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?");

// vaporcode = string => string.toUpperCase().replace(/\s/g,'').split('').join('  ');

// **********************************************************************************
// Test.assertEquals(sortGiftCode('abcdef'), 'abcdef');
// Test.assertEquals(sortGiftCode('pqksuvy'), 'kpqsuvy');
// Test.assertEquals(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'), 'abcdefghijklmnopqrstuvwxyz');

// function sortGiftCode(code){
//   return code.split('').sort().join().replace(/\,/g,'');
// }
// sortGiftCode = code => code.split('').sort().join().replace(/\,/g,'');
// **********************************************************************************

// describe("Basic tests",_=>{
//   Test.assertEquals(hasSubpattern("a"), "a");
//   Test.assertEquals(hasSubpattern("aaaa"), "a");
//   Test.assertEquals(hasSubpattern("abcd"), "abcd");
//   Test.assertEquals(hasSubpattern("babababababababa"), "ab");
//   Test.assertEquals(hasSubpattern("bbabbaaabbaaaabb"), "ab");
//   Test.assertEquals(hasSubpattern("123a123a123a"), "123a");
//   Test.assertEquals(hasSubpattern("123A123a123a"), "111222333Aaa");
//   Test.assertEquals(hasSubpattern("12aa13a21233"), "123a");
//   Test.assertEquals(hasSubpattern("12aa13a21233A"), "111222333Aaaa");
//   Test.assertEquals(hasSubpattern("abcdabcaccd"), "aaabbccccdd");
// })

// function hasSubpattern(string){
//   return (Array.from(new Set(string))).sort().join('');
//  }
// ********************************************************************************

// Test.assertEquals(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
// Test.assertEquals(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);

// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//   return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate);
// }

// *********************************************************************************
