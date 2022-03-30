//Pusedo code
/*
*
DFS-iterative (G, s):                                   //Where G is graph and s is source vertex
let S be stack
S.push( s )            //Inserting s in stack 
mark s as visited.
while ( S is not empty):
    //Pop a vertex from stack to visit next
    v  =  S.top( )
   S.pop( )
   //Push all the neighbours of v in stack that are not visited   
  for all neighbours w of v in Graph G:
      if w is not visited :
               S.push( w )         
              mark w as visited
              
*/


function dfs(arr,searchElement){
    var elemntFound = false;
    let stack = new Array(arr.length);
    let visited = new Array(arr.length);
    let sourcevertex = arr[0];
    
    stack.push(sourcevertex);
    visited.push(sourcevertex);
    

    while (!stack.length ===0){
        let currentPos =  stack.pop();
        if(currentPos === searchElement){
            // target found and so exit loop
            elemntFound = true;
            break;
        }

        var neighbours = getNeighbours(currentPos,visited);
            for(var i = 0; i < neighbours.length; i++){
                // check visited and if not, throw in stack
                if (!visited.find(neighbours[i])){
                    visited.push([neighbours[i]]);
                    stack.push([neighbours[i]]);
                }
            }
    }

    return elemntFound;
}

console.log(dfs([2,4,5,6],5));