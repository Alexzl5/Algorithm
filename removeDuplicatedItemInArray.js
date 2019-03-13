/** 

// using splice to remove the repeated item
Array.prototype.DeleteRepeatedItem = function(){
    for(let i = this.length-1;i>=0;i--){
        for(let j = 0; j<this.length; j++){
            if( this[i]=== this[j]&& i !== j){
                this.splice(i,1)
            }
        }
    }
    return this
}
*/

// using indexof & push & create new empty array to remove repeated file

 



/*
Array.prototype.DeleteRepeatedItem = function() {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (arr.indexOf(this[i]) === -1) {
      arr.push(this[i]);
    }
  }
  return arr
};
*/

// Reomove duplicates from js array ES6

const RemoveDuplicates = arr => arr.filter((ele,idx,arr)=>arr.indexOf(ele)===idx)

const viaNewSet = arr => [...new Set(arr)]

const uniqueArr = arr => [...new Set(arr.map(o=>JSON.stringify(o)))].map(s=>JSON.parse(s))

let arr = [1,2,2,5,3,6,7,1,6,2,9,20,2,1,2]
const arrObj = [{a:1,b:2}, {a:1,b:2}, {a:1,b:2,c:3}, {a:1,b:2,c:3,d:4}]
console.log(RemoveDuplicates(arr))
console.log(viaNewSet(arr))
console.log(uniqueArr(arr))
console.log(uniqueArr(arrObj))