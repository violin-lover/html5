//scope day 14

class Difference{
maximumDifference = 0;

constructor(elements){
this.elements = elements;
  }

computeDifference(){
let max = this.elements[0]
let min = this.elements[0]
for(let i = 0; i < this.elements.length; i++){
if(max < this.elements[i]){
  max = this.elements[i]
} 

if(min > this.elements[i]){
  min = this.elements[i]
      }
    }
    this.maximumDifference = max - min;
  } 
}

//Whenever you declare a variable in the constructor using "this.", you need to use this everywhere else in the class, especially in the function / method

//linked list day 15

 this.insert=function(head,data){
       if(head == null){
            return new Node(data);
       } else if (head.next == null){
            head.next = new Node(data);
       } else {
            this.insert(head.next,data);
       }
       return head;
    };

    //exceptions--string to integer

    function main() {
    let S = readLine();
    try {
    S != Number(S) && err()
    console.log(Number(S))
    }
    catch(err){
    console.log("Bad String")
    }
}

//Queues and Stacks -- day 18
//note that this is my original
function Solution(){
let stack = [], queue = [];

this.pushCharacter = (a) => {return stack.push(a)}
this.enqueueCharacter = (a) => {return queue.unshift(a)}
this.popCharacter = (a) => {return stack.pop(a)}
this.dequeueCharacter = (a) => {return queue.pop(a)}
}

//this is a simplified version (thank you Kenny)
function Solution(){
this.stack = [], this.queue = [];

this.pushCharacter = (a) => this.stack.push(a);
this.enqueueCharacter = (a) => this.queue.unshift(a);
this.popCharacter = () => this.stack.pop();
this.dequeueCharacter = () => this.queue.pop();
}

/*

In Javascript, define a function

test your code in the browser console with
divisorSum(20)  // expect 42
divisorSum(6)  // expect 12

*/

const divisorSum = function(n){
let result = 0;
for(let i = 1; i <= n; i++){
if(n % i === 0){
result += i
    }   
  }
    return result;
}

//day 20: sorting

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    let numberOfSwaps = 0;
    for (let i = 0; i < n; i++) {
    // Track number of elements swapped during a single array traversal
    
    for (let j = 0; j < n - 1; j++) {
        let one = a[j]
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            a[j] = a[j+1],a[j+1] = one;
            numberOfSwaps++;
        }
       
    }
    
    // If no elements were swapped during a traversal, array is sorted
    if (numberOfSwaps == 0) {
        break;
        }
    }
    console.log("Array is sorted in " + numberOfSwaps+ " swaps.")
    console.log("First Element: " + a[0])
    console.log("Last Element: " + a[a.length - 1])
}

//day 22 binary search tree
//NOTE: WATCH THE VIDEO!!!

 this.getHeight = function(root) {

        // Add your code here

    if(root == null){
    return -1;
    } 

    let left = this.getHeight(root.left)
    let right = this.getHeight(root.right)
    
    if(left > right){
    return left+1;
    } else {
    return right+1;
    }

    };

//day 23 BST Level-Order traversal
   this.levelOrder = function(root) {

        // Add your code here
        // To print values separated by spaces use process.stdout.write(someValue + ' ')

        let result = [];
        let bla = [];

        if(root != null){
        bla.push(root);
            while(bla.length > 0){
            let node = bla.shift()   
            result.push(node.data)

            if(node.left != null){
            bla.push(node.left)
            }
            
            if(node.right != null){
            bla.push(node.right)
            }
            
            }


             for(let i = 0; i < result.length; i++){
        process.stdout.write(result[i] + " ")
            }
        } else {
        console.log(null)
        }
	};

  //day 24: more linked lists
   
   this.removeDuplicates=function(head){
    let temp = head
    if(temp == null){
    return head;
    }

    while(temp != null){

    if(temp.next != null){

    if(temp.next.data === temp.data){
    temp.next = temp.next.next  //a node.property  // .next.next means to skip a step
        } else {
        temp = temp.next
        } 
    } else {
    temp = null;
        }
    } 
    return head;
    }

    //day 25 primes

    function processData(input) {
    let num = input.split("\n");
    for (let i = 1; i < num.length; i++) {
    isPrime(num[i])
    }
}
 
function isPrime(num){
if(num < 2){
console.log("Not prime")
return ;
}

for (let r = 2; r <= Math.sqrt(num); r++) {
            if (num % r === 0 && num !== 2) {
                console.log("Not prime");
                return ;
            }
        }
        console.log("Prime")
}

//day 26 nested logic

function processData(input) {
debugger;
let dateStrings = input.split("\n")
let returnDate = dateStrings[0]
let dueDate = dateStrings[1]
let returnDMY = returnDate.trim().split(" ")
let dueDMY = dueDate.trim().split(" ")
let actualDay = 1 * returnDMY[0]
let actualMonth = 1 * returnDMY[1]
let actualYear = 1 * returnDMY[2]
let dueDay = 1 * dueDMY[0]
let dueMonth = 1 * dueDMY[1]
let dueYear = 1 * dueDMY[2]

//check for just year
if(actualYear > dueYear){
console.log(10000)
}

//check for just day
else if(actualMonth == dueMonth && dueYear == actualYear && actualDay > dueDay){
console.log(15 * (1 * actualDay - 1 * dueDay))
}

//check for just month
else if(actualYear == dueYear && actualMonth > dueMonth){
console.log(500 * (actualMonth - dueMonth))
}

//check for on due date returned
else {
console.log(0)
}

} 

//this is Kenny's code!!!
6
/*
function processData(input) {
    //Enter your code here
    let dates = input.split("\n")
    let return_dmy = dates[0].trim().split(" ");
    return_dmy.map(Number);
    let expect_dmy = dates[1].trim().split(" ");
    expect_dmy.map(Number);
   //let returnedDate = new Date(return_dmy[2], return_dmy[1], return_dmy[0]);
   //let expectededDate = new Date(expect_dmy[2], expect_dmy[1], expect_dmy[0]);
   // buggy js - you have to force the comparison in numbers
    if(+return_dmy[2] > expect_dmy[2]){
        console.log(10000);
    }else
    if(+return_dmy[2] == expect_dmy[2] && +return_dmy[1] > expect_dmy[1]){
        console.log(500*(return_dmy[1] - expect_dmy[1]));
    }else
    if(+return_dmy[1] == expect_dmy[1] && +return_dmy[0] > expect_dmy[0]){
        console.log(15*(return_dmy[0] - expect_dmy[0]));
    }
    else{console.log(0)}
}
 
*/