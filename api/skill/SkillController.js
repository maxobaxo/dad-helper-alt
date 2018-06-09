var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
var Skill = require("./Skill");

// creates new Skill
router.post("/", function(req, res) {
  Skill.create(
    {
      name: req.body.name
    },
    function(err, skill) {
      if (err)
        return res
          .status(500)
          .send("There was a problem adding the information to the database.");
    }
  );
});

// returns all skills in the database
router.get("/", function(req, res) {
  Skill.find({}, function(err, skills) {
    if (err)
      return res.status(500).send("There was a problem finding the skills.");
    res.status(200).send(skills);
  });
});

// gets a single skill from the database
router.get("/:id", function(req, res) {
  Skill.findById(req.params.id, function(err, skill) {
    if (err)
      return res.status(500).send("There was a problem finding the skill.");
    if (!skill) return res.status(404).send("No skill found.");
    res.status(200).send(skill);
  });
});

// deletes a single skill from the database
router.delete("/:id", function(req, res) {
  Skill.findByIdAndRemove(req.params.id, function(err, skill) {
    if (err)
      return res.status(500).send("There was a problem deleting the user.");
    res.status(200).send("Skill " + skill.name + " was deleted.");
  });
});

// updates a single skill in the database
router.put("/:id", function(req, res) {
  Skill.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(
    err,
    skill
  ) {
    if (err)
      return res.status(500).send("There was a problem updating the skill.");
    res.status(200).send(skill);
  });
});

module.exports = router;
