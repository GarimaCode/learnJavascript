/***
 * "window": The browser uses this root object to view everything in a tab. 
 * It is connected to all objects of a single tab in a browser, directly or indirectly.

"DOM": The DOM (Document Object Model) consists of all elements in the web page from text to buttons.

"BOM": The BOM (Browser Object Model) represents additional objects provided by the browser
 (host environment) except what was provided by the DOM.
 */

 

 /**
  * So far, we have only dealt with synchronous code. Now, we introduce the concept of asynchronicity.
  *  When asynchronous, the processor can handle multiple tasks without waiting for the blocking code of the program.
  * */


 import { readFile as _readFile } from 'fs';


 function readFile(fileName){
     return new Promise((resolve, reject)=>{
         _readFile(fileName,'utf8',(err,data)=>{
             try{
                if (err){
                    resolve([fileName,false])
                }
                else{
                    resolve([fileName,true]);
                    console.log(data);
                }
             }
             catch{
                 reject(err);
             }
         })
     })
 }

 async function finder (fileNames){
     let promiseList = [];
     fileNames.forEach(element => {
        promiseList.push(readFile(element)); 
     });

     let data = await Promise.all(promiseList);
     console.log(data);
 }

 let fileNames = ['util.js', 'log.txt', 'json.js'];
 finder(fileNames);
 /**
  * output = [
    ['sortingAlgo.js', true],
    ['log.txt', false],
    ['json.js, true],
];
  */