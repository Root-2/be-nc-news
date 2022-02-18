// Require in models, as controllers call models.
const {fetchArticle} = require("../models/articles.model")


exports.getArticle = (req, res, next) => {
    fetchArticle(req.params.article_id).then((article) => {
        res.status(200).send({article})
    })  
    .catch((err) => {
        next(err)
    })
};