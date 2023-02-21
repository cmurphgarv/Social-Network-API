const User = require('../models/User');

module.exports = {

    createFriend(req, res) {
        // console.log(req.params)
        return User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId
             } },
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
            { _id: req.params.userId},
            { $pull: { friends: req.params.friendId } },
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