async function asyncFn() {
    //всегда return - Promise
    return 'Success!'
}
const asyncFun = async() => {
    //всегда return - Promise
    throw new Error('some error')
}

asyncFn()
    .then(value => console.log(value))
    .catch(error => console.log(error))


asyncFun()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))