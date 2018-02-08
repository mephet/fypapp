const express = require('express');
const router = express.Router();
const TweetController = require('../controllers/tweet_controller');
const POIController = require('../controllers/poi_controller');

router.post('/gettweets', TweetController.getTweetsByUser);
router.post('/gettweetsc', TweetController.getTweetsByCountry);
router.post('/addtweet', TweetController.addTweet);
router.post('/gettweetscircle', TweetController.getTweetsInCircle);
// router.post('/gettweetspolygon', TweetController.getRepresentativeArray);
router.post('/gettweetspolygon', TweetController.getTweetsInPolygon);
router.post('/getpoicircle', POIController.getPOIInCircle);
router.post('/getpoipolygon', POIController.getPOIInPolygon);

module.exports = router;