class _Node {
  constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function peek(queue) {

  return queue.first.value;
}

function getAll(queue) {
  let all = [];
  let node = queue.first;
  all.push(node.value);
  all[0].adoptable = true;
  node = node.next;
  while (node) {
    all.push(node.value);
    node = node.next;
  }

  return all;
}

function isEmpty(queue) {
  return (queue.first === null);
}

function display(queue) {
  let currentNode = queue.first;
  while (currentNode !== null) {
    console.log(currentNode);
    currentNode = currentNode.next;
  }
}

module.exports = { Queue, peek, isEmpty, display, getAll};