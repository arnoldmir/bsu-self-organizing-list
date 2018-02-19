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

    }

    findNode(data) {

    }

    toArray() {

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
