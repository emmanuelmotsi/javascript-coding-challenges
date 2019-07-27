function init() {
    // key press to open console on load

    // FizzBuzz implementation
    function fizzBuzz(i) {
        let n;
        if (i % (3 * 5) === 0) {
            return 'FizzBuzz'
        } else if ((i % 3) === 0) {
            n = 'Fizz';
        } else if ((i % 5) === 0) {
            n = 'Buzz';
        } else {
            n = i;
        }
        return n;
    }

    for (let i = 1; i <= 100; i++) {
        console.log(`${fizzBuzz(i)}`);
    }
}

window.onload = init;



