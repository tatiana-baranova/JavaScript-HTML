let number = 8;

let userNumber = Number(prompt("Введіть число:"));

while(userNumber !== number){
    console.log("Ви ввели неправильне число. Спробуйте ще раз!");
    userNumber = Number(prompt("Введіть число: "));
}
console.log("Правильно! Ви ввели число 8.");