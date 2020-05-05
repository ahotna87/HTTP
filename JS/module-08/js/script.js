"use strict";
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

// вместо аррай пушш
// return objKeys.reduce((acc, val) =>
//     frequency[val] === highestVal
//       ? [...acc, val]
//       : acc
// ,[]);

//====================================================

// first=======================
// const button = document.createElement("button");
// button.textContent = "CLICK ME!";

// button.addEventListener('click', handlerClick);
// function handlerClick(){
//    alert ('Hello!');
// }
// const body = document.querySelector("body");
// body.append(button);

// console.log(body);

//second=======================
// const button = document.createElement("button");
// button.textContent = "CLICK ME!";

// button.addEventListener('mouseover', handlerClick);
// function handlerClick(){
//    alert ('Hello!');
// }
// const body = document.querySelector("body");
// body.append(button);

// console.log(body);

//third=======================
// const button = document.createElement("button");
// button.textContent = "CLICK ME!";

// button.addEventListener("dblclick", handlerClick);
// function handlerClick() {
//   alert("Hello!");
// }
// const body = document.querySelector("body");
// body.append(button);

// console.log(body);

//fourth=======================
// const squre = document.createElement("div");
// squre.textContent = "Focus on Me!";
// squre.addEventListener("mouseout", handlerMouseout);
// function handlerMouseout() {
//   alert("Hello!");
// }
// const body = document.querySelector("body");
// body.append(squre);

// console.log(body);

//fifth=========================
// const button = document.createElement("button");
// button.textContent = "CLICK ME!";

// button.addEventListener("click", handlerClick);

// const input = document.createElement("input");
// input.type = "text";
// input.value = "ku-ku";

// function handlerClick() {
//   alert(input.value);
// }

// const body = document.querySelector("body");
// body.append(button, input);

// console.log(body);

//sixth=========================
// const button = document.createElement("button");
// button.textContent = "CLICK ME!";

// button.addEventListener("click", handlerClick);

// const input = document.createElement("input");
// input.type = "text";
// input.value = "ku-ku";

// function handlerClick() {
//   input.value = "Ups, I changed yuor text!!!";
// }

// const body = document.querySelector("body");
// body.append(button, input);

// console.log(body);

//seventh======================
// const button = document.createElement("button");
// button.textContent = "CLICK ME!";

// const img = document.createElement("img");
// img.src = "https://placeimg.com/640/480/nature";

// button.addEventListener("click", handlerClick);

// function handlerClick() {
//   img.src = "https://placeimg.com/640/480/any";
// }

// const body = document.querySelector("body");
// body.append(button, img);

// console.log(body);

//eigth======================

// const input = document.createElement("input");
// input.type = "text";
// input.value = "ku-ku";

// function handlerClick(event) {
//   console.log(event.target);
//   if (event.target !== this) {
//     input.value = "Ups, I changed yuor text!!!";
//   } else if (event.target === this) {
//     input.value = "Ups, again!";
//   }
// }

// const body = document.querySelector("body");
// body.addEventListener("click", handlerClick);
// body.append(input);

// console.log(body);
//======================================

// const input = document.createElement("input");
// input.type = "submit";
// input.value = "Click on Me!";
// input.addEventListener("click", handlerClick);

// function handlerClick() {
//   input.value = "Ups, I changed yuor text!!!";
// }

// const body = document.querySelector("body");
// body.append(input);

// console.log(body);

//======================================
// const input = document.createElement("input");
// input.type = "submit";
// input.value = "Click on Me!";
// input.addEventListener("click", handlerClick);

// function handlerClick() {
//   this.value = "Ups, yuo can't touch me!!!";
//   this.style.color = "red";
//   this.disabled = true;
//   console.log(window);
// }

// const body = document.querySelector("body");
// body.append(input);

//============================================
// const img = document.createElement("img");

// function handlerClick(event) {
//   if (event.target !== this) {
//     img.src = "https://placeimg.com/640/480/any";
//   } else {
//     img.src = "https://placeimg.com/640/480/nature";
//   }
// }

// const body = document.querySelector("html");
// body.addEventListener("mouseover", handlerClick);
// body.append(img);

// console.log(body);
//=============================================
// const input_1 = document.createElement("input");
// input_1.type = "submit";
// input_1.value = "Click on Me!";
// input_1.addEventListener("click", handlerOn);

// const input_2 = document.createElement("input");
// input_2.type = "submit";
// input_2.value = "Click on me, unblocked upper button";
// input_2.style = "display:none";
// input_2.addEventListener("click", handlerOff);

// function handlerOn() {
//   this.value = "Ups, yuo can't touch me!!!";
//   this.style.color = "red";
//   this.disabled = true;
//   input_2.style = "display:block";
//   console.log(window);
// }

// function handlerOff() {
//   this.style = "display:none";
//   input_1.disabled = false;
//   input_1.value = "Click on Me!";
//   input_1.style.color = "black";
// }

// const body = document.querySelector("body");
// body.append(input_1, input_2);

const posts = [
  {
    src: "./image/320/bird-s-eye-view-photography-of-road-in-the-middle-of-desert-1201673 (1).jpg",
    src_full: './image/1980/bird-s-eye-view-photography-of-road-in-the-middle-of-desert-1201673.jpg',
    alt: "bird-s-eye-view-photography-of-road-in-the-middle-of-desert",
  },
  {
    src: "./image/320/green-grass-during-sunset-1192671.jpg",
    src_full: './image/1980/green-grass-during-sunset-1192671 (1).jpg',
    alt: "green-grass-during-sunset",
  },
  {
    src: "./image/320/old-town-with-green-trees-on-hill-3771061 (1).jpg",
    src_full: './image/1980/old-town-with-green-trees-on-hill-3771061.jpg',
    alt: "old-town-with-green-trees-on-hill",
  },
  {
    src: "./image/320/scenic-view-of-mountain-under-cloudy-sky-1484282.jpg",
    src_full: './image/1980/scenic-view-of-mountain-under-cloudy-sky-1484282 (1).jpg',
    alt: "scenic-view-of-mountain-under-cloudy-sky",
  },
  {
    src: "./image/320/train-with-smoke-507410.jpg",
    src_full: './image/1980/train-with-smoke-507410 (1).jpg',
    alt: "train-with-smoke",
  },
  {
    src: "./image/320/white-and-brown-concrete-building-beside-body-of-water-near-2089799.jpg",
    src_full: './image/1980/white-and-brown-concrete-building-beside-body-of-water-near-2089799 (1).jpg',
    alt: "white-and-brown-concrete-building-beside-body-of-water",
  },
  {
    src: "./image/320/woman-wearing-black-jacket-standing-near-ocean-with-swan-and-760984 (1).jpg",
    src_full: './image/1980/woman-wearing-black-jacket-standing-near-ocean-with-swan-and-760984.jpg',
    alt: "woman-wearing-black-jacket-standing-near-ocean-with-swan",
  },
  {
    src: "./image/320/grayscale-photo-of-road-1038935 (1).jpg",
    src_full: './image/1980/grayscale-photo-of-road-1038935.jpg',
    alt: "grayscale-photo-of-road-1038935",
  },

];


const fullview = document.createElement('div');
fullview.classList.add('fullview');

const full_image = document.createElement('img');
full_image.src = './image/1980/bird-s-eye-view-photography-of-road-in-the-middle-of-desert-1201673.jpg';
full_image.alt = 'bird-s-eye-view-photography-of-road-in-the-middle-of-desert';

fullview.append(full_image);

const preview = document.createElement('ul');
preview.classList.add('preview');


const preview_elem = createPreview(posts);
preview.append(...preview_elem);

function createPreview(posts){
  return posts.reduce((acc,el) => acc.concat(createPreviewImg(el)),[]);
}

function createPreviewImg({src, src_full, alt}){
const preview_item = document.createElement('li');
const preview_item_img = document.createElement('img');
preview_item_img.src = src;
preview_item_img.setAttribute ('data-fullview', src_full );//добавление своего атрибута на элемент
preview_item_img.alt = alt;

preview_item.append(preview_item_img);

return preview_item;
}

const image_gallery = document.querySelector('.js-image-gallery');
image_gallery.append(fullview, preview);

preview.addEventListener('click', handlerClick);

function handlerClick (event){
  if (event.target.nodeName!=='IMG')
  return;
 // console.log(event.target.attributes);
// console.log(event.target.getAttribute('data-fullview')); 
full_image.src= event.target.getAttribute('data-fullview');
}


// console.log(image_gallery);










// const fullview = document.createElement('div');
// fullview.classList.add('fullview');

// const full_image = document.createElement('img');
// full_image.src = './image/1980/bird-s-eye-view-photography-of-road-in-the-middle-of-desert-1201673.jpg';
// full_image.alt = 'bird-s-eye-view-photography-of-road-in-the-middle-of-desert';

// fullview.append(full_image);

// const preview = document.createElement('ul');
// preview.classList.add('preview');

// const preview_item = document.createElement('li');
// const preview_item_img = document.createElement('img');
// preview_item_img.src = './image/320/bird-s-eye-view-photography-of-road-in-the-middle-of-desert-1201673 (1).jpg';
// preview_item_img.setAttribute ('data-fullview', './image/1980/bird-s-eye-view-photography-of-road-in-the-middle-of-desert-1201673.jpg' );
// preview_item_img.alt = 'bird-s-eye-view-photography-of-road-in-the-middle-of-desert';

// const preview_item1 = document.createElement('li');
// const preview_item_img1 = document.createElement('img');
// preview_item_img1.src = './image/320/green-grass-during-sunset-1192671.jpg';
// preview_item_img1.setAttribute ('data-fullview', './image/1980/green-grass-during-sunset-1192671 (1).jpg' );
// preview_item_img1.alt = 'green-grass-during-sunset';


// preview_item.append(preview_item_img, preview_item_img1);
// preview.append(preview_item);

// const image_gallery = document.querySelector('.js-image-gallery');
// image_gallery.append(fullview, preview);

// preview.addEventListener('click', handlerClick);



// function handlerClick (event){
//   if (event.target.nodeName!=='IMG')
//   return;
// console.log(event.target.attributes);

// // console.log(event.target.getAttribute('data-fullview'));

//  full_image.src= event.target.getAttribute('data-fullview');
// }


// console.log(image_gallery);