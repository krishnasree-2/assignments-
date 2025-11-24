// a) Template Literal
const username = "Krishna";
const course = "JavaScript";
console.log(`Hello ${username}, welcome to the ${course} course!`);


const name = "krishna sree";
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

console.log(student);
student.greet();


const getFullName = (first, last) => `${first} ${last}`;

console.log(getFullName("krishna", "sree"));
