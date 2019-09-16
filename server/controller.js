const Author = require('./model.js');

module.exports = {
    showall: (req, res) => {
        Author.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    displayone: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    createnew: (req, res) => {
        Author.create({name: req.body.name})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    updateauthor: (req, res) => {
        Author.updateOne({_id: req.params.id}, {$set: {name: req.body.name}}, {runValidators: true})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    delete: (req, res) => {
        Author.findOneAndRemove({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
}