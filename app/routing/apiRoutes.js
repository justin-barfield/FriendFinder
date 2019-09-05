const friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        console.log("Received API request")
        res.json(friendsData);
    });

    app.post("/api/result", function(req, res) {

        var newSubmit = req.body;
        var newScore = newSubmit.scores;

        var scoreTotals = 0;
        var perfectMatch = 500;

        var bestMatch = -1;

        for( i =0; i < friendsData.length; i++ ) {

            scoreTotals = 0;

            for( a = 0; a < newScore.length; a++ ) {

                var scoreDifference = Math.abs(newScore[i] - friendsData[i].scores[a]);

                scoreTotals += scoreDifference;
            }

            if( scoreTotals < perfectMatch ) {

                perfectMatch = scoreTotals;
                bestMatch = i;
            }

        }
        
        console.log("Match found: " + friendsData[bestMatch]);
        friendsData.push(newSubmit);
        res.json(friendsData[bestMatch]);

    })

};

// app.post for api. write to modal

