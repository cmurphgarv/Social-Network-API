const Thought = require('../models/Thought');

module.exports = {
    //POST a reaction
    createReaction(req, res) {
        return Thought.findOneAndUpdate(
            { _id: req.body.thoughtId },
            { $addToSet: { reactions: req.body.reactionId } },
            { new: true }
        )
            .then((thought) =>
                !thought
                    ? res
                        .status(404)
                        .json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    //DELETE a reaction
    deleteReaction(req, res) {
        return Thought.findOneAndUpdate(
            { _id: req.body.thoughtId},
            { $pull: { friends: req.body.reactionId } },
            { new: true }
        )
        .then((thought) =>
                !thought
                    ? res.status(404).json({
                        message: 'No thought with this id!',
                    })
                    : res.json({ message: 'reaction successfully deleted!' })
            )
            .catch((err) => res.status(500).json(err));
    }

    
};


