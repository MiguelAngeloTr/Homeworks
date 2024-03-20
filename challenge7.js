class Graph {
    constructor(){
        this.adjList = {};
        this.nodes=[];
    }
    addNode(node){
        this.nodes.push(node)
        this.adjList[node]=[]
    }
    addEdge(node1,node2){
        this.adjList[node1].push(node2);
        this.adjList[node2].push(node1);
    }
    printGraph(){
        console.log(this.adjList)
    }
    search(value){
        if (this.adjList[value]) {
            return this.adjList[value]
        }
        return this.nodes.find(item => item === value)
        
    }
    printAdjacency(value){
        if (this.adjList[value]) {
            return this.adjList[value]
        }
        else {
            return ;
        }
    }

}



persona = {
    name: 'miguel',
    age: 20,
    city: {name:"bogota"}
}

addNode(persona);
addEdge(persona, "juan");
printGraph(persona)