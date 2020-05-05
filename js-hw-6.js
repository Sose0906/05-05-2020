//1.Given an array. Determine whether it consists only from unique elements or not.

function isUnique(arr) {
    let result = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i) {
            result = false;
            break;
        }
    }
    return result;
}

//2.Given an array of numbers. Find the sum of numbers’ quadratic which are even.

function sumQuadratic(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {                
        if ( Math.pow(arr[i], 1/2) % 2 === 0) {
            sum += arr[i]
        }
    }
    return sum;
}

//3.Check whether string is palindrome, or not.

function isPolindrome(str) {

    let start = 0;
    let end = str.length - 1;
    let result = true;

    while (start < end) {
        if (str[start] === str[end]) {
            str++;
            end--;
        } else {
            result = false;
            break;
        }
    }
    return result
}

//4.Given a word and a list of possible anagrams, select the correct sublist.

function findAnagrams(word, arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (word.length === arr[i].length && word.toLowerCase() !== arr[i].toLowerCase() ) {
            let temp = true;
            for (let j = 0; j < word.length; j++) {
                if (arr[i].indexOf(word[j]) === -1) {
                    temp = false;
                    break;
                }
            }
            if (temp) {
                res.push(arr[i]);
            }

        }

    }

    return res;
}

findAnagrams('pencil', ["licnep", 'circular', 'pupil', 'nilcpe', 'leppnec'])



