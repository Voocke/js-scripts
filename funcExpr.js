function myFn(a,b) { //объявленная функция
    let c 
    a++
    b = a
    return c 
} //автономная

const myFunction = function(a,b) { //функциональное выражение, всегда анонимные
    let c 
    a++
    b = a
    return c
}//не автономная
//возвращают undefined если нет return
//могут быть аргументом в колбэк функции, но функциональное используется чаще всего

myFunction(5,3)

setTimeout(function() { //функция без имени
    console.log('Отложенное сообщение')
}, 1000)

//стрелочные функции
setTimeout((a,b) => { 
    let c
    a++
    b=a
    return c
},1000)

const arrowFunc = (a,b) => { //лучше писать так
    let c
    a++
    b=a
    return c
}
setTimeout(arrowFunc,1000)

setTimeout(() => { //как колбэк 
    console.log('Сообщение')
}, 1000)

const temp = (a,b) => a+b
//можно опустить скобки если тело функции состоит из одного выражения
//не явно возвращает результат выражения (return подставляется автоматически)