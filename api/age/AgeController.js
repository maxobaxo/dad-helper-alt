var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
var Age = require("./Age");

// creates new Age
router.post("/", function(req, res) {
  Age.create(
    {
      range: req.body.name,
      skillIds: req.body.skillIds
    },
    function(err, age) {
      if (err)
        return res
          .status(500)
          .send("There was a problem adding the information to the database.");
    }
  );
});

// returns all ages in the database
router.get("/", function(req, res) {
  Age.find({}, function(err, ages) {
    if (err)
      return res.status(500).send("There was a problem finding the ages.");
    res.status(200).send(ages);
  });
});

// gets a single age from the database
router.get("/:id", function(req, res) {
  Age.findById(req.params.id, function(err, age) {
    if (err)
      return res.status(500).send("There was a problem finding the age.");
    if (!age) return res.status(404).send("No age found.");
    res.status(200).send(age);
  });
});

// deletes a single age from the database
router.delete("/:id", function(req, res) {
  Age.findByIdAndRemove(req.params.id, function(err, age) {
    if (err)
      return res.status(500).send("There was a problem deleting the user.");
    res.status(200).send("Age " + age.name + " was deleted.");
  });
});

// updates a single age in the database
router.put("/:id", function(req, res) {
  Age.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(
    err,
    age
  ) {
    if (err)
      return res.status(500).send("There was a problem updating the age.");
    res.status(200).send(age);
  });
});

module.exports = router;
