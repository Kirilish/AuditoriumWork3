/* const num = prompt("22123");

const month = num.toLowerCase();   заменяет на маленькие буквы 

switch (month) {
  case "may":
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  case 3:
    console.log("3");
    break;
  default:
    console.log("default");
}
 */

/* const notStr = prompt("enter number") промерка ввёл number или string

if(isNaN(+notStr)){
    console.log("string")
}else{
    console.log("number")
}
 */

// &&(и) приоретет больше  ||(или)

//console.log(1 && 2 && 3) /* певрое отрицательное (если встретится отрицательное, то его и выводит) или последнее пооложительное // отрисовывет пока сервер не дал данные*/
//console.log("" || null || false) /* возращает первое положительное значение всегда будет идти до конца */

/* const arr = ["Все", "Видеоигры"];

const obj = {
  name: "Kirill",
  age: "12",
  skill: {
    React: "true",
    Angular: "true",
  },
};
 */

/* const arr = ["Все", "Видеоигры"];
const str = "string"

console.log(str.length) 
console.log(arr.length) */
// для цикла кол-во букв

// while
// do while - выполниться хоть один раз
//for

/* let i = 0; */
/* while (i < 5) {
  console.log(i);
  i++;
}
 */

/* do {
  console.log(i);
  i++;
} while (i < 5);*/

/* for (let i = 0; i < 5; i++) {   долго выполняеться
  console.log(i);
} */

/* const str = "sring";

for (let i = 0; i <= str.length; i++) {
  console.log(i, str[i]);
}
 */

const obj = {
  a: 1,
  b: 2,
  с: {
    react: true,
  },
};

/* const obj1 = { ...obj }; // копирование

console.log(obj);
obj.c.react = 3;
console.log(obj1);
 */

/* const obj1 = Object.assign([],obj);
console.log(obj)
obj.b = 3;
console.log(obj1); */
// ped оператор, lodash библиотека

const obj1 = JSON.parse(JSON.stringify(obj));

console.log(obj1)