function orderPizza(whenReady) {
    console.log("Заказ принят, ждём...")
    setTimeout(() => {  //setTimeout не обязателен, просто для того чтобы 
                        //код не компилировался дальше какое-то время
        console.log("Пицца готова!") 
        whenReady()
    }, 2000)
}
//можно написать так:
// function orderPizza(whenReady) {
//  console.log("Заказ принят, ждём...")
//  console.log("Пицца готова!")
//  whenReady()
// }

orderPizza(() => {   
    console.log("Спасибо, что позвонили, я иду за пиццей!")
})

function sayMyName() {
    console.log("Его имя Роберт Полсон")
}
setTimeout(sayMyName, 1000)