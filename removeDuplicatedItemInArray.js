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

Array.prototype.DeleteRepeatedItem = function() {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (arr.indexOf(this[i]) === -1) {
      arr.push(this[i]);
    }
  }
  return arr
};

let arr = [1,2,2,5,3,6,7,1,6,2,9,20,2,1,2]
console.log(arr.DeleteRepeatedItem())
