# Stacks and Queues



*remember: ADT (abstract data types) defines requirements:*

- *Keep multiple items*

- *can Insert of delete items at any position*

- *can contain duplicates*

- Preserves the order of items

## Queue

**We need to add in order** and **remove from the start** more efficiently than a simple array would.

enqueueing -> items are only added at the back.

dequeueing -> items are removed from the front.

**FIFO** : *first in first out*

methods: enqueue(val), dequeue(), peek(), isEmpty()...

```js
class Queue {
    constructor(){
        this.data = new linkedList()
    // using a linked list to dequeue at O(1), or a doublyLinkedList.
    }
    enqueue(val){
        this.data.push(val)
    }
    dequeue(){
        return this.data.shift()
    }
    peek(){
        return this.data.head
    }
    isEmpty(){
        return this.data.length > 0 ? false : true;
    }    
}
```

## Stacks

We need to add in order** and **remove from the end*** more efficiently than a simple array would.

**LIFO** -> *last in , first out* , *push and pop*.

methods: push(val), pop(), peek(), isEmpty()...



```js
class Stack {
    constructor(){
        this.data = new doublyLinkedList()
        // OR
        // this.data = []; this.data = new linkedList BUT
        // with linkedlist we add to start and remove from start.
    }
    push(val){
        this.data.push(val) //O(1)
    }
    pop(){
        return this.data.pop() //O(1)
    }
    peek(){
        return this.data.tail
    }
    isEmpty(){
        return this.data.length > 0 ? false : true;
    }
}
```

## Deques ( called decks )

this is a double-ended queue - push , pop, shift, unshift.

way less common than stack or queue.

Methods: appendleft, appendright, popleft, popright, peekleft, peekright, isEmpty..

The best approach : Doubly Linked List.


