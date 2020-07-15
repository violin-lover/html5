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
