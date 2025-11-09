class Comment {
    constructor(text) { //параметры
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty++
    }

    static mergeComments(first, second) {
        return `${first} ${second}`
    }
}

const firstComment = new Comment('First comment')
firstComment.upvote()
console.log(firstComment)
const str = Comment.mergeComments('First comment.', 'Second comment.')
console.log(str)