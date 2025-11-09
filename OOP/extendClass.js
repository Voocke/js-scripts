class NumsArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0) //0 - деф значение acc
    }
} 

const myArray = new NumsArray(2,5,7)
console.log(myArray)
console.log(myArray.sum())
console.log(NumsArray.prototype === myArray.__proto__)//скрытое свойство