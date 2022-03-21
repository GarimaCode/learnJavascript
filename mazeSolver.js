//depth first search
class Grid{
    constructor(arr){

        if (arr == undefined){
            this.grid = new Array(6);
            for (let i = 0;i < temp.length;i++){
                this.grid[i] = new Array(6);
                for (let j = 0; j< temp[i].length; j++ ){
                    this.grid[i][j] = Math.round(Math.random());
                }
            }
        }
        else{
            this.grid = new Array(arr.length)
            for (let i = 0;i < arr.length; i++){
                this.grid[i] = arr[i].map(a => a);
            }
        }
    }
    // Helper function to print the grid
    printArray(){
        // Iterate the grid
        for(var i = 0; i < this.grid.length; i++){
            for(var j =0; j < this.grid[i].length; j++){
                // Print X or O
                if(this.grid[i][j] === 0)
                    process.stdout.write(`X `);
                else
                    process.stdout.write(`O `);
            }
            console.log('');
        }
    }
}