for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
} //result: they manage to repeat for 98 times but passing two or one number they have the "Fizz" or "Buzz" or both in each term but now after looking at it turns out I did left out a 1 on the 2 line by accident and correct it.