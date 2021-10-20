square = function(x) {
            return x * x;
        };

identity = function(x) {
            return x;
        };

triple = function(x) {
            return 3 * x;
        };

increment = function(x) {
            return x + 1;
        };

add = function(a, b) {
            return a + b;
        };

sub = function(a, b) {
            return a - b;
        };

mul = function(a, b) {
            return a * b;

function make_repeater(func, n){
    /*
        Return the function that computes the nth application of func.
    >>> add_three = make_repeater(increment, 3)
    >>> add_three(5)
    8
    >>> make_repeater(triple, 5)(1) # 3 * 3 * 3 * 3 * 3 * 1
    243
    >>> make_repeater(square, 2)(5) # square(square(5))
    625
    >>> make_repeater(square, 4)(5) # square(square(square(square(5))))
    152587890625
    >>> make_repeater(square, 0)(5) # Yes, it makes sense to apply the function zero times!
    5
    */
    // Can be solved iteratively or recursively!
    // *** YOUR CODE HERE ***
  function func_repeater(x) {
        if (n == 0) {
            return x;
        } else {
            total = func(x);
        }
        for (let i = 0; i < n-1; i++) {
            total = func(total);
        }
        return total;
  }
  return func_repeater;
}
let z = make_repeater(square, 2)(5);
console.log(z);


function num_eights(pos){
    /* Returns the number of times 8 appears as a digit of pos.
    >>> num_eights(3)
    0
    >>> num_eights(8)
    1
    >>> num_eights(88888888)
    8
    >>> num_eights(2638)
    1
    >>> num_eights(86380)
    2
    >>> num_eights(12345)
    0
    NO variable assignment allowed!
    */
    // *** YOUR CODE HERE ***
    let count = 0;
    while (pos > 0) {
      if (pos % 10 == 8) {
        count++;
      }
      pos = Math.floor(pos / 10);
    }
    return count;
}
let z = num_eights(86380);
console.log(z);