for (let i = 1; i < 10; i++){
    console.log(i)
}

//перебор свойств объекта
// for (key in Object) {
//     console.log(Object[key])
// }


const myObject = {
    x: 10,
    y: 15,
    z: 5
}

for(const key in myObject) {
    console.log(key, myObject[key])
}

//Object.keys(myObject) получение ключей в виде массива
Object.keys(myObject).forEach(key => {
    console.log(key, myObject[key])    
})

//также можно сразу получать значения
Object.values(myObject).forEach(value => {
    console.log(value)
})

//do while выполняется хотя бы раз

let i = 0

do {
    console.log(i)
    i++
} while(i > 5)


//цикл FOR OF

const text = 'Hey'
for (const letter of text) {
    console.log(letter)
}//не подходит для объектов 