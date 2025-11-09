function multyByFactor(value, multiplier = 1) {// 1 - дефолтное значение
    return value* multiplier
}
multyByFactor(10, 3) //30
multyByFactor(5) // 5

setTimeout((value,multiplier = 1) => {
    return value * multiplier 
}, 1000)




const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
})
//({}) - чтобы неявно вернуть объект, если не писать () после "=>" то 
//интерпритатор подумает что это начало функции 

const newNewPost = (post, addedAt = Date()) => {
    return{
        ...post,
        addedAt,
    }
} //пример с явным возвращением объекта

const firstPost = {
    id: 1,
    author: 'ivan',
}

console.table(newPost(firstPost))

console.table(newNewPost(firstPost))