class Stack{

  // Initialize constructor
  constructor(){
    this.items = [];
  }

  /*
    Implementation
  */

  // Push an element into the stack
  push(element){
    this.items.push(element);
  }

  // Pop an element out of the stack
  pop(){
    if(this.items.length == 0){
      return "Underflow";
    }
    else{
      return this.items.pop();
    }
  }

  // Peek the top of the stack
  peek(){
    return this.items[this.items.length - 1];
  }

  /*
    Helper
  */

  // Check if the stack is empty
  isEmpty(){
    if(this.items.length == 0){
      return true;
    }
    else{
      return false;
    }
  }

  // Prints the stack on its proper order
  printStack(){
    var i;
    var stackString = "";
    for(i = this.items.length - 1; i >= 0; i--){
      stackString = stackString + this.items[i] + " ";
    }
    return stackString;
  }

}
