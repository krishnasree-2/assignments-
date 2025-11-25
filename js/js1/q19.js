console.log(`5 + 7 = ${5 + 7}`);

const multiLine = `This is line 1
This is line 2
This is line 3`;
console.log(multiLine);

const firstName = "John";
const lastName = "Doe";
console.log(`${firstName} ${lastName}`);

const square = n => n * n;
console.log(square(5));

const obj1 = {
  value: 50,
  test: () => console.log(this.value)
};
obj1.test();

const obj2 = {
  value: 50,
  test: function () {
    console.log(this.value);
  }
};
obj2.test();

const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);

const a = { x: 1 };
const bObj = { y: 2 };
const merged = { ...a, ...bObj };
console.log(merged);

const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(2, 9, 4));

const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

const info = {};
console.log(info?.address?.city);

for (var i = 0; i < 3; i++) {}
console.log(i);

for (let j = 0; j < 3; j++) {}
// console.log(j);

let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

let age = 17;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);

let number = -5;
let check = number > 0 ? "Positive" : number === 0 ? "Zero" : "Negative";
console.log(check);

const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums);

let aArr = ["x", "y"];
let bArr = ["z"];
const combined = [...aArr, ...bArr];
console.log(combined);

const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));

const user1 = { id: 101, status: "active" };
const { id, status } = user1;
console.log(id, status);

const uid = 101;
const role = "admin";
const user2 = { uid, role };
console.log(user2);

const person = {
  name: "Sam",
  greet() {
    console.log("Hello!");
  }
};
person.greet();

console.log(`Today's date is ${new Date().toDateString()}`);

let NAME = "Alex";
let SCORE = 85;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);

const add = (x, y) => x + y;
console.log(add(5, 6));

const isAdult = age => age >= 18;
console.log(isAdult(20));

const double = n => n * 2;
console.log(double(4));

const arrClone = [...nums];
console.log(arrClone);

const addBeginning = [100, ...nums];
console.log(addBeginning);

const objA = { name: "John", age: 20 };
const objB = { age: 25, city: "Delhi" };
const objMerged = { ...objA, ...objB };
console.log(objMerged);

const user = {
  name: "Alex",
  address: { city: "Bangalore" }
};
console.log(user?.address?.city);

console.log(user?.job?.title);

const data = { student: { name: "Rahul" } };
console.log(data.student.address?.city);
