class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class SelfOrganizedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(data) {
this.length++;
    }

    size() {
return this.length;
    }

    at(index) {
if (index==0) return this.head.data;
if (index<this.length && index>0)
{
  var node=new Node();
  node=this.head.next;
  for (var i=1; i <index; i++)
  node=node.next;
  return node.data;
}
else return null;
    }

    findNode(data) {
      
    }

    toArray() {
var arr =[];
for(var i=0; i<this.length;i++)
arr.push(this.at(i));
return arr;
    }

    removeAt(index) {
this.length--;
    }

    moveToFront(node) {

    }

    reorganize(data) {

    }

}

module.exports = {
    SelfOrganizedList,
    Node
};
