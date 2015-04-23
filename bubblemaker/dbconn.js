var Datastore = require('nedb');

db = {};
db.dives = new Datastore({ filename: 'dives.db', autoload: true });
db.spots = new Datastore({ filename: 'spots.db', autoload: true });
db.users = new Datastore({ filename: 'users.db', autoload: true });

module.exports = db.users;
module.exports = db.spots;
module.exports = db.dives;

