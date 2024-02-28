class Node {
    constructor(task, next = null) {
        this.task = task;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }

    print() {
        let node = this.head;
        while (node != null) {
            console.log(`Title: ${node.task.title} | Description: ${node.task.description} | Points: ${node.task.points} | Next: ${node.next ? node.next.task.title : null}`);
            node = node.next;
        }
    }
}

// Crear una tarea de ejemplo
const t = {
    title: "Tarea 1",
    description: "Descripción de la tarea 1",
    points: 10
};

const myList = new LinkedList();
myList.append(t);
myList.print();
