// console.log(Boolean(0.1))

// let isUndefined = {}
// console.log(!!isUndefined)

const button = {
    width: 200,
    text: 'Buy'
}

const redButton = {
    ...button, //всегда в начале если хотим переприсвоить
    color: 'red'
}

///////////

const buttonInfo = {
    text: 'Buy this'
}
const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}
const newButton = {
    ...button,
    ...buttonInfo,
    ...buttonStyle,
}

console.table(redButton)

console.table(newButton)