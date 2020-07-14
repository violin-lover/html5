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

function Solution(){
let stack = [], queue = [];

this.pushCharacter = (a) => {return stack.push(a)}
this.enqueueCharacter = (a) => {return queue.unshift(a)}
this.popCharacter = (a) => {return stack.pop(a)}
this.dequeueCharacter = (a) => {return queue.pop(a)}
}
