const object = {
    name : 'ivan',
    age: 18
}
function test() {
    let c
    c = 5
    return 'asdsa' + c
}
const myArray = [1,2,3,'asd', test(),object] 
const newArray = new Array(1,2,3)

const addToArr = () => {
    myArray.push('text')//можем менять даже при const т.к массивы - ссылочный тип
}
addToArr()
console.log(myArray)
console.log(newArray[1])

const removedEl = myArray.pop() //.pop() - удалить последний элемент массив

console.log(removedEl)
console.log(myArray)
//.unshift(value) - добавить элемент в начало
//.shift() - удаление первого элемента

myArray.forEach(it => console.log(`${it} sasd`))
myArray.forEach((it,index) => console.log(`${index}] ${it}`))


//.map как forEach Только возвращает новый массив а не undefined
const mapArray = myArray.map(it => it + ' new')

const mapFunArray = myArray.map((it) => {
    return it + ' map'
}) //undefined без return 

console.log(mapArray)
console.log(mapFunArray) 