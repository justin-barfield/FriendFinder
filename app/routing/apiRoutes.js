const friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

};

// app.post for api. write to modal

