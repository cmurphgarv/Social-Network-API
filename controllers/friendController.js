const User = require('../models/User');

module.exports = {

    createFriend(req, res) {
        return User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { friends: req.body.friendId } },
            { new: true }
        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    deleteFriend(req, res) {
        return User.findOneAndUpdate(
            { _id: req.body.userId},
            { $pull: { friends: req.body.friendId } },
            { new: true }
        )
        .then((user) =>
                !user
                    ? res.status(404).json({
                        message: 'No user with this id!',
                    })
                    : res.json({ message: 'friend successfully deleted!' })
            )
            .catch((err) => res.status(500).json(err));
    },
};