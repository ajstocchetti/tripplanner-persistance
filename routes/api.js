var router = require('express').Router();
var models = require('../models/index');
var Hotel = models.Hotel;
var Restaurant = models.Restaurant;
var Activity = models.Activity;
var Day = models.Day;


router.get('/:day', function(req, res) {
  // return the day
  var dayNum = req.params.day;
  Day.find({number: dayNum}, function(err, data) {
    res.send(data);
  });
});

router.post('/:day', function(req, res) {
  // make new day
  var dayNum = req.params.day;
  var x = new Day({ number: dayNum});
  x.save(function(err, data) {
    if(!err) {
      res.send(data);
    }
  });
  // var newDay = Day.create({number: dayNum});
  // res.send(newDay);
});
router.delete('/:day', function(req, res) {
  // delete a day
  var dayNum = req.params.day;
  Day.find({number: dayNum}).remove().exec();
  res.send(true);
});

router.get('/:day/:id', function(req, res) {
  var dayNum = req.params.day;
  var id = req.params.id;
  var m_day = Day.findOne({number:dayNum}, function(err, day) {
    if(err) {
      console.log(err);
      return
    }
    day.set('activities', "55fb56190c709c3a5673ddd8");
    day.save(function(err,data) {
      if(err) res.send(err)
      res.send(data)
    });
    // res.send("done")
  })
});
module.exports = router;
