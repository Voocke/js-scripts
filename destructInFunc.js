const userProfile = {
    namee: 'Ivan',
    commentsQty: 23,
    hasSignedAgreement: false,
}

const userInfo = ( {namee, commentsQty} ) => {
    if (!commentsQty) {
        return `User ${namee} has no comments`
    }
    return `User ${namee} has ${commentsQty} comments`
}

console.log(userInfo(userProfile))
