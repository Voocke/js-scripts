const userProfile = {
    name: 'Ivan',
    commentsQty: 23,
    hasSignedAgreement: false,
}

const {name, commentsQty} = userProfile //названия должны быть одинаковыми
const {hasSignedAgreement, adsas} = userProfile

console.log(name)
console.log(adsas) //undefined


//так же можно и в массивах

const fruits = ['apple', 'orange']

const [fruitOne, FruitOrange] = fruits //названия переменных любые можно, но важен порядок 

console.log(fruitOne)
console.log(FruitOrange)
