// const dayOfWeek = prompt('Enter A day').toLowerCase;

// if (dayOfWeek === 'Monday') {
//   console.log("I hate Monday!");
// } else if (dayOfWeek === 'Saturday') {
//   console.log("I love Saturday");
// } else if (dayOfWeek === "Friday") {
//   console.log("Friday are decent, especially after work!");
// } else {
//   console.log("MEH");
// }

// 0-5 Free
// 5-10 Child $10
// 11-65 Adult $20
// 65+ Senior $10

// const age = 80;

// if (age < 5) {
//   console.log("You are a baby. You get in for free!");
// } else if (age < 10) {
//   console.log("You are a child. You pay $10");
// } else if (age < 65) {
//   console.log("You are an adult. You pay $20");
// } else {
//   console.log("You are a senior. You pay $10");
// }

// let random = Math.random();
// if (random < 0.5) {
//   console.log("Less than 0.5");
// } else {
//   console.log("Greater than 0.5");
// }
// console.log(random);

// const password = prompt("please enter a new password");
// if (password.length >= 6) {
//   if (password.indexOf(' ') === -1) {
//     console.log("Good job! No space!")
//   } else {
//     console.log("Password cannot contain spaces!")
//   }
// } else {
//   console.log("Password too short! Must be +6 characters")
// }


const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
  console.log("Valid Password!")
} else {
  console.log("Incorrect format for password!")
}