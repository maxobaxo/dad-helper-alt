var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
var Game = require("./Game");

// creates new Game
router.post("/", function(req, res) {
  Game.create(
    {
      name: req.body.name,
      description: req.body.description,
      bonus: req.body.bonus
    },
    function(err, game) {
      if (err)
        return res
          .status(500)
          .send("There was a problem adding the information to the database.");
    }
  );
});

// returns all games in the database
router.get("/", function(req, res) {
  Game.find({}, function(err, games) {
    if (err)
      return res.status(500).send("There was a problem finding the games.");
    res.status(200).send(games);
  });
});

// gets a single game from the database
router.get("/:id", function(req, res) {
  Game.findById(req.params.id, function(err, game) {
    if (err)
      return res.status(500).send("There was a problem finding the game.");
    if (!game) return res.status(404).send("No game found.");
    res.status(200).send(game);
  });
});

// deletes a single game from the database
router.delete("/:id", function(req, res) {
  Game.findByIdAndRemove(req.params.id, function(err, game) {
    if (err)
      return res.status(500).send("There was a problem deleting the user.");
    res.status(200).send("Game " + game.name + " was deleted.");
  });
});

// updates a single game in the database
router.put("/:id", function(req, res) {
  Game.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(
    err,
    game
  ) {
    if (err)
      return res.status(500).send("There was a problem updating the game.");
    res.status(200).send(game);
  });
});

module.exports = router;
