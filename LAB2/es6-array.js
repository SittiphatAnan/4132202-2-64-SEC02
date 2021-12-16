let cars = ["Toyota","Honda","Mazda"];
let fruits = [];
fruits[0] = "Apple"
fruits[3] = "Mango"
let rname = new Array("Uta", "Beta", "Kamui");
console.log(rname);

let popCar = cars.pop();
console.log(popCar);
console.log(cars);

cars.unshift("Kubota");
console.log(cars);
cars.shift();
console.log(cars);

cars.splice(1, 0, "Mazda", "Kubota");
console.log(cars);

const carSlide = cars.slice(1,2);
console.log(carSlide);

const newArr = cars.concat(rname);
console.log(newArr);
const newArr2 = [...cars, ...rname]; //spread operator
console.log(newArr2);

console.log(newArr.toString());

//itteration
let text = "";
for(value of rname){
    text += value + ":"
}
console.log(text);

const numbers = [10,20,30]
numbers.forEach(addNum);

function addNum(value, index, array) {
    console.log(value += 2);
}

const ns = numbers.map(addNumMap);
console.log(ns);
function addNumMap(value){
    return value * 2;
}

const over10 = numbers.filter(over10fn);
console.log(over10);
function over10fn(value){
    return value > 10;
}

const reOver10 = numbers.reduce(over10fn)
console.log(reOver10);

//every & some***ตรวจสอบค่าทุกตัว และ บางตัว*****
const everOver10 = numbers.every(over10fn);
console.log(everOver10);
const someOver10 = numbers.some(over10fn)
console.log(someOver10);

//find & indexOf****
const resFind = numbers.find(over10fn);
console.log(resFind);
const resFindIndex = numbers.indexOf(over10fn);
console.log(resFindIndex);

//****สร้าง อาร์เรย์ใช้ในการแยกขอ้ความตัวอักษร เช็คข้อความได้
let alpha = Array.from("UtaBeta123");
console.log(alpha);

