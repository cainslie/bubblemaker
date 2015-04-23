var dbc = require('../dbconn.js');
var documents = require('../documents.js');

currentDate = function() {
    var nowIs = new Date();
    var day = nowIs.getDate();
    var month = nowIs.getMonth()+1;
    var year = nowIs.getFullYear();
    return (day +'/'+ month +'/'+ year);
};

currentTime = function () {
    var nowIs = new Date();
    hour = nowIs.getHours();
    minute = nowIs.getMinutes();
    return (hour+':'+minute);
};

documents.userDoc = {
    diverName : 'Chris', 
    diverSurname: 'Ainslie', 
    qualification : 'AOW', 
    email : 'chris@ainslie.co.za',
    phone : '0782098955'
};

documents.spotsDoc = {
    spotName : 'No. 1',
    spotDepth : '30m',
    spotRequirement : 'AOW'
}

documents.divesDoc = {
    diveSpot : 'No. 1',
    diveDate : currentDate(),
    diveLaunch : currentTime(),
    diveLimit : 10,
    diveDM : 'Jim',
    diveSkipper : 'Bob'
}

/*
 * GET home page.
 */

exports.index = function (req, res) {
    db.dives.find({}, function (err, doc) {
        //console.log(doc);
        res.render('index', { dives : doc });
    });
};

//db.dives.insert(documents.divesDoc);

//exports.diveSpots = function (req, res) {
//    db.spots.find({}, function (err, doc) {
//        console.log(doc);
//        res.render('diveSpots', { spots : doc });
//    });
//};

//exports.booking = function (req, res) {
//      res.render('booking');
//};

//exports.contact = function (req, res) {
//    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page.' });
//};
