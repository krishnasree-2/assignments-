const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const merged = [...arr1, ...arr2];
console.log(merged);


const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum(1, 2, 3, 4));
console.log(sum(5, 10));


const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

const {
  name,
  address: { city, pin }
} = user;

console.log(name);
console.log(city);
console.log(pin);
