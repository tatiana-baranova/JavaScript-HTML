let number = 8;

let userNumber = Number(prompt('Enter a number: '));

while(userNumber !== number){
    alert('Try again!');
    userNumber = Number(prompt('Enter a number: '));
}
alert('You guessed the number: ' + number);