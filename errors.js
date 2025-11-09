const fnWithError = () => {
    throw new Error('smt wrong')
}
try{
    fnWithError()
} catch (error) {
      console.error(error) // вывод ошибки
      console.log(error.message) // smt wrong
}

  console.log('Continue...')