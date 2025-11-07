
//НЕ РЕКОМЕНДУЕТСЯ ИЗМЕНЯТЬ ВНЕШНИЕ ОТНОСИТЕЛЬНО ФУНКЦИИ ПЕРЕМЕННЫЕ
const personeOne = {
    name: 'Ivan',
    age: 18
}
function increaseAge(person){
    const updatedPersone = Object.assign({}, person) //поэтому создаём копию и работаем уже  с ней
    updatedPersone.age++
    return updatedPersone
}
const updatedPersoneOne = increaseAge(personeOne)

console.log(personeOne.age)
console.log(updatedPersoneOne.age)
