function a_plus_abs_b(a,b) {
	/*
    Return a+abs(b), but without calling abs().
    >>> a_plus_abs_b(2, 3)
    5
    >>> a_plus_abs_b(2, -3)
    
  */
	var f = function(a, b) {
            return a + b;
        };
	if (b < 0) {
		f = function(a, b) {
            return a - b;
        };
	}
	return f(a, b);
}
let z = a_plus_abs_b(5, -5);
console.log(z);


function two_of_three(x, y, z){
    /*Return a*a + b*b, where a and b are the two smallest members of the
    positive numbers x, y, and z. 
    >>> two_of_three(1, 2, 3)
    5
    >>> two_of_three(5, 3, 1)
    10
    >>> two_of_three(10, 2, 8)
    68
    >>> two_of_three(5, 5, 5)
    50
    // Hint: Consider using the Math.max or Math.min function!
    */
    return (x * x) + (y * y) + (z * z) - Math.pow(Math.max(x, y, z),2);
}
let z = two_of_three(10, 2, 8);
console.log(z);


function largest_factor(n){
    /*Return the largest factor of n that is smaller than n.
    >>> console.log(largest_factor(15)); # factors are 1, 3, 5
    5
    >>> console.log(largest_factor(80)); # factors are 1, 2, 4, 5, 8, 10, 16, 20, 40
    40
    >>> console.log(largest_factor(13)); # factor is 1 since 13 is prime
    1
    */
    // *** YOUR CODE HERE ***
    for (let x = n-1; x >= 0; x--) {
        if (n % x == 0) {
            return x;
        }
    }
}
let z = largest_factor(80);
console.log(z);


function hailstone(n) {
    /* Print the hailstone sequence starting at n and return its
            length. 
        For reference: https://mathworld.wolfram.com/HailstoneNumber.html
        >>> let a = hailstone(10)
        10
        5
        16
        8
        4
        2
        1
        >>> console.log(a);
        7
        Can be solved recursively or iteratively!
    */
    let i = 0
    while (n != 1) {
        console.log(n)
        if (n % 2 == 0) {
            n = Math.floor(n / 2);
        } else {
            n = n * 3 + 1;
        }
        i += 1 ;
    }
    console.log(1)
    i += 1;

    return i;
}
let z = hailstone(10);
console.log(z);


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

function product(n, term){
    /* Return the product of the first n terms in a sequence.
    n -- a positive integer
    term -- a function that takes one argument to produce the term
    >>> product(3, identity)  # 1 * 2 * 3
    6
    >>> product(5, identity)  # 1 * 2 * 3 * 4 * 5
    120
    >>> product(3, square)    # 1^2 * 2^2 * 3^2
    36
    >>> product(5, square)    # 1^2 * 2^2 * 3^2 * 4^2 * 5^2
    14400
    >>> product(3, increment) # (1+1) * (2+1) * (3+1)
    24
    >>> product(3, triple)    # 1*3 * 2*3 * 3*3
    162
    */
  // *** YOUR CODE HERE ***"
  let product = 1
    for (let i = 1; i < n + 1; i ++) {
      product *= term(i);
    } 
    return product
}
let z = product(5, square);
console.log(z);


add = function(a, b) {
            return a + b;
        };

sub = function(a, b) {
            return a - b;
        };

mul = function(a, b) {
            return a * b;
        };

function accumulate(merger, base, n, term){
    /*Return the result of merging the first n terms in a sequence and base.
    The terms to be merged are term(1), term(2), ..., term(n). merger is a
    two-argument commutative function.
    >>> accumulate(add, 0, 5, identity)  # 0 + 1 + 2 + 3 + 4 + 5
    15
    >>> accumulate(add, 11, 5, identity) # 11 + 1 + 2 + 3 + 4 + 5
    26
    >>> accumulate(add, 11, 0, identity) # 11
    11
    >>> accumulate(add, 11, 3, square)   # 11 + 1^2 + 2^2 + 3^2
    25
    >>> accumulate(mul, 2, 3, square)    # 2 * 1^2 * 2^2 * 3^2
    72
    >>> accumulate(lambda x, y: x + y + 1, 2, 3, square)
    19
    >>> accumulate(lambda x, y: 2 * (x + y), 2, 3, square)
    58
    >>> accumulate(lambda x, y: (x + y) % 17, 19, 20, square)
    16
    */
    // *** YOUR CODE HERE ***
    let total = base
    for (let i = 1; i < n+1; i++) {
      total = merger(total, term(i));
    }
    return total;
}
let z = accumulate(mul, 2, 3, square);
console.log(z);