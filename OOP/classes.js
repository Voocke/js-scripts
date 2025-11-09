class Comment {
    constructor(text) { //параметры
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty++
    }
}

const firstComment = new Comment('First comment')
firstComment.upvote()
console.log(firstComment)