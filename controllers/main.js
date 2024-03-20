var books = require('../models/books')

module.exports.getAll = function(req, res) {
    res.status(200);
    res.send(books)
}

module.exports.getOne = function(req, res) {

    let author = req.params.author
    let book = books.find(book => book.author == author)
    res.status(200);
    res.send(book)
}

module.exports.add = function(req, res) {
    books.push(req.body)
    res.status(200);
    res.send(req.body)
}

module.exports.update = function(req, res) {
    let author = req.params.author
    const book = books.find(book => book.author==author)
    book.author = req.body.author
    book.country = req.body.country
    book.imageLink = req.body.imageLink
    book.language = req.body.language
    book.link = req.body.link
    book.pages = req.body.pages
    book.title = req.body.title
    book.year = req.body.year
    res.status(200)
    res.send(book)
}

module.exports.deleteOne = function(req, res) {
    let author = req.params.author
    let book = books.find(book => book.author==author)
    let index = books.indexOf(book)
    books.splice(index, 1)
    res.status(200);
    res.send(`Deleted${author}`)
}


module.exports.deleteAll = function(req, res) {
    books = []
    res.status(200)
    res.send('Deleted All')
}
