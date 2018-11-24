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

// let arr = [1,2,2,5,3,6,7,1,6,2,9,20,2,1,2]
// console.log(arr.DeleteRepeatedItem())