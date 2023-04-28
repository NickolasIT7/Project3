var s1 = 3;
var s2 = 4;
console.log('4 > 3', 4 > 3);
console.log('4 < 3', 4 < 3);
console.log('4 == 3', s1 == s2);
console.log('4 != 3', s1 != s2);
console.log('"smart" > "star"', "smart" > "star");
var s3 = 0;
var s4 = '0';
console.log('null == undefined', null == undefined);
console.log('null == 0', null == 0);
// Операторы сравнения возвращают значения логического типа.
// Строки сравниваются посимвольно в лексикографическом порядке.
// Значения разных типов при сравнении приводятся к числу. 
// Исключением является сравнение с помощью операторов строгого равенства/неравенства.
// Значения null и undefined равны == друг другу и не равны любому другому значению.
// Будьте осторожны при использовании операторов сравнений вроде > и < с переменными, 
// которые могут принимать значения null/undefined. Хорошей идеей будет сделать отдельную проверку 
// на null/undefined.
// let c = +(prompt('Enter number')as string)
// alert (c**2);
// let d = +(prompt('Enter first number')as string)
// let f = +(prompt('Enter last number')as string)
// alert(( d + f) / 2);
//  let c = +(prompt ('Введите длину стороны квадрата') as string)
//  alert (c**2);
// let f = +(prompt ('enter first number') as string)
// let g = +(prompt ('enter sercond number') as string)
// console.log(f+g);
// console.log(f-g);
// console.log(f*g);
// console.log(f/g);
//  let a = +(prompt ('enter first number') as string)
//  let b = +(prompt ('enter sercond number') as string)
//  alert (-b/a);
// let hours = +(prompt ('введите часы') as string)
// let minutes = +(prompt ('введите минуты') as string)
// const timeInMinutes = hours * 60 + minutes
// const timeInMinutesToNextDay = 24 * 60 - timeInMinutes
// const minutesToNextDay = timeInMinutesToNextDay%60
// const hoursToNextDay = (timeInMinutesToNextDay - minutesToNextDay)/60
// alert (`До следующего дня ${hoursToNextDay} часов и ${minutesToNextDay} минут`)
//  let b = +(prompt('введите 3х значное число') as string); 
//  b = math.floor (b/10)%10
//  alert (b);
// let a = +prompt ('введите 5значное число')
// b = a % 10
// a = math.floor(a/10)
// a = (b + "" + a)
// alert(a);
// let b = +prompt ('введите свою зарплату');
// let a = +prompt ('введите сумму общих продаж');
// a = a * 0.1;
// alert(a + b);
// if (условие) {
// блок кода, который выполняется, если условие истинно 
// }
// if (условие) {
// блок кода, который выполняется, если условие истинно 
// } else {
// блок кода, который выполнится, если условие ложно    
// }
// // if (условие) {
// // блок кода, который выполняется, если условие истинно 
// // } else if (доп условие 1){
// // блок кода, который выполнится, если доп условие 1 истинно 
// // } else {
// блок кода, который выпоняется, если ни одно из условий не было истинным  
// }
// const secret = "0123"
// const admin_secret = "321"
// // const pass = prompt('Введите пароль')
// //@ts-ignore
// if (secret == pass) {
//     console.log ('Вы вошли')
// } else if (admin_secret == pass) {
// console.log ('Вы вошли как администратор!')    
// } else {
//  console.log ('Вы не вошли!')   
// }
var age = 20;
var accessAllowed;
if (age > 18) {
    accessAllowed = true;
}
else {
    accessAllowed = false;
}
accessAllowed = (age > 18) ? true : false;
// let accessAllowed = age > 18
//переменная, в которую попадет значение = (условие)?
// Значение, если условие истинно:Значение если условие ложно
// let a =+(prompt('введите число') as string)
// if(a > 0) {
// alert('положительное')
// } else if (a==0)  {
// alert("0")    
// }
// if(a < 0) {
//     alert('отрицательное')
//     } 
// let b = +(prompt('введите свой возраст') as string)
// if (b > 0 && b < 121) {
// alert ('ты живой') } 
// let c = +(prompt('введите число') as string)
// if (c > 0) {
// alert ("c")    
// }
// else if (c==0)  {
//     alert("0")    
//     }
// if (c < 0) {
// alert (Math.abs(c))    
// } 
// let a = +(prompt('введите часы') as string)
// let b = +(prompt('введите минуты') as string)
// let c = +(prompt('введите секунды') as string)
// if (a < 24 && b < 60 && c < 60) {
// alert('корректно')    
// }
// else if (a > 23 || b > 59 || c > 59) {
// alert('некорректно')    
// }
// let x = +(prompt ('введите координаты x') as string)
// let y = +(prompt ('введите координаты y') as string)
// if (x < 0 && y < 0) {
// alert ('3 четверть')  
// } else if (x > 0 && y < 0) {
//  alert ('4 четверть') 
// } else if (x < 0 && y > 0) {
//  alert ('2 четверть') 
// } else if (x > 0 && y > 0) {
//  alert ('1 четверть') 
// } else if (x = 0 && y < 0) {
//  alert ('3 и 4 четверть') 
// } else if (x = 0 && y > 0) {
//  alert ('1 и 2 четверть') 
// } else if (x > 0 && y == 0) {
//  alert ('1 и 4 четверть') 
// } else if (x < 0 && y == 0) {
//  alert ('2 и 3 четверть') 
// } else {
//  alert ('начало координат') 
// }
