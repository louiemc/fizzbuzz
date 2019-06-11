// declare your variable i and set it equal to 1
let i = 1;
// use a while loop with a conditional statement of i < 100
while (i < 101) {
  // need to put this stricter condition first or else only the %3 and %5 will register 
  if (i%3 === 0 && i%5 === 0) {
    console.log("FizzBuzz");
  }
  else if (i%5 === 0) {
    console.log("Buzz");
  }
  else if (i%3 === 0) {
    console.log("Fizz");
  }
  else {
    // moved the console.log(i) here because we want to print the numbers that don't produce Fizz, Buzz, or FizzBuzz
    console.log(i);
  }
  // after the if, else if, and else run we want to increment the numbers when the whilel loop runs again
  i++;
}