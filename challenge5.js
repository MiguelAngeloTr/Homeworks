class Queue {
    constructor(){
        this.queue={};
    }
    enqueue(person){
       this.queue.push(person);
       return this.queue;
    }
    dequeue(){
        return this.queue.shift();
    }
    peek(){
        return this.queue[this.queue.length-1];
    }
    size(){
        return this.queue.length;
    }
    isEmpty(){
        return this.queue.length===0;
    }
    print(){
        console.log(this.queue);
    }
}


const queue=new Queue();
console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.peek());
console.log(queue.print());
console.log(queue.enqueue({name:'miguel',arrived_time:new Date()}));
console.log(queue.enqueue({name:'jose',arrived_time:new Date()}));
console.log(queue.dequeue());

