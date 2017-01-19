/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
	this.next= null
  this.storage = {
	  head: this.next,
	  tail: this.next
  };

};


LinkedList.prototype.addToTail = function (value) {
	if(this.storage.tail === null) {
		this.next=value;
	}
	this.storage.tail = value
}

LinkedList.prototype.removeHead = function () {
	if(this.storage.tail !== null) {
		this.storage.tail = null
	}
}

LinkedList.prototype.contains = function (value) {
	if (this.storage.hasOwnPrototype(value)) {
		return true;
	}
	return false;
}