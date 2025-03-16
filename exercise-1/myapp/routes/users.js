var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', function (req, res) {
    console.log("Received data:", req.body);
    res.send("POST request received!");
});

module.exports = router;
