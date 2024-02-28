class Stack {
    constructor() {
        this.stack={};
        this.count =0;
    }
    push(libro){
        this.stack[this.count]=libro; 
        this.count++;
        return this.stack;   
    }
    pop(){
        this.count--;
        const element=this.stack[this.count];
        delete this.stack[this.count];
        return element;
    }
    
    peek(){
        return this.stack[this.count-1];
    }

}

const libro={
    name:'Harry Potter',
    author:'J.K. Rowling',
    editorial:'Salamandra'
}
const libro2={
    name:'el señor de la noche',
    author:'Stephen King',
    editorial:'Alfaguara'
}

const myStack = new Stack();
myStack.push(libro);


myStack.push(libro2);

console.log(myStack.peek());

console.log(myStack)