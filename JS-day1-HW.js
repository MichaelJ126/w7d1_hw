

//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
For extra credit, output "Thats a damn cat" 
*/

let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."


let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]


const currentNames = (string, list) => {
    let matchFound = false;
    
    for (const name of list) {
        if (string.includes(name)) {
            console.log(`Matched ${name}`);
            matchFound = true;
        }
    }
    
    if (!matchFound) {
        console.log("No Matches");
    }
    
    if (string.includes("cat")) {
        console.log("That's a damn cat");
    }
    }
    
    currentNames(dogString, dogNames);

//============Exercise #2 ============//

/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index". For bonus points instead of inserting even index
replace each character with their signature move.*/

arr == ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]

const replaceEvenIndexes = (arr) => {
    for (let i = 0; i < arr.length; i += 2) {
    arr[i] = arr[i].split('').reverse().join('');
    arr.splice(i, 1, "even index");
    }
    }
    
    let arr = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"];
    replaceEvenIndexes(arr);
    console.log(arr);


    
//============ Codewars ============//


// Convert to JavaScript

// 1. // def feast(beast, dish):
// return beast[0] == dish[0] and beast[-1] == dish[-1]


function myFeast(beast, dish) {
    return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
    }



// 2. // import math
// def square_or_square_root(arr):
// a=[]
// for num in arr:
// square_root=math.isqrt(num)
// if square_root2==num:
// a.append(square_root)
// else:
// a.append(num2)
// return a

// input_array=[4,3,9,7,2,1]
// output_array=square_or_square_root(input_array)

    function square_or_square_root(arr) {
        const resultArray = [];
        
        for (const num of arr) {
            const squareRoot = Math.isqrt(num);
            if (squareRoot ** 2 === num) {
                resultArray.push(squareRoot);
            } else {
                resultArray.push(num ** 2);
            }
        }
        return resultArray;
        }
        const inputArray = [4, 3, 9, 7, 2, 1];
        const outputArray = square_or_square_root(inputArray);
        
        console.log(outputArray);