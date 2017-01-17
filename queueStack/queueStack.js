/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
   var Stack = function() {
    stack=[];
    counter =0 ;
    return {
     push: function(value){
      stack[counter] = value;
      counter++;
      return value;
    },

    pop: function(){ 
      return stack.pop()
      counter--;
    },

    size: function(){
      return counter;
    }
  }
};

 /**
   * Queue Class
   */
   var Queue = function() {

   var inbox = new Stack();
   var outbox = new Stack();

   this.enqueue = function(value){
     inbox.push(value)
     
  }

   this.dequeue = function(){
    
   }

   this.size = function(){
     this.Stack()
   }
 };