const SECRET = "BabyHippo";

let guess = prompt("enter the secret code...");
while (guess !== SECRET) {
  guess = prompt("enter the secret code...");
}
console.log("Congrats you got the secret!!!")