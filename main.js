// declare your variable i and set it equal to 1
let i = 1;

// BUT what happens if the parameters of the exercise change?
// e.g. we don't want 3 and 5 anymore; we want 4 and 9
// it would be annoying to go through all of the code
// and if this were a bigger project it would take a long time to go through every single line
// so, let's make them variables!
let x = 4;
let y = 9;

// use a while loop with a conditional statement of i < 100
while (i < 101) {
  // need to put this stricter condition first or else only the %3 and %5 will register 
  if (i%x === 0 && i%y === 0) {
    console.log("FizzBuzz");
  }
  else if (i%y === 0) {
    console.log("Buzz");
  }
  else if (i%x === 0) {
    console.log("Fizz");
  }
  else {
    // moved the console.log(i) here because we want to print the numbers that don't produce Fizz, Buzz, or FizzBuzz
    console.log(i);
  }
  // after the if, else if, and else run we want to increment the numbers when the whilel loop runs again
  i++;
}