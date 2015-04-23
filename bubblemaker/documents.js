exports.userDoc = {
    diverName : String,
    diverSurname : String,
    qualification : String,
    email : String,
    phone : String,
    isAdmin : Boolean
};

exports.spotsDoc = {
    spotName : { type : String, required : true },
    spotDepth : { type : Number, required : true },
    spotDescription : { type : String },
    spotRequirement : { type : String, required : true, enum : ['OW', 'AOW', 'Deep'] }
};

exports.divesDoc = {
    diveSpot : { type : String, required : true },
    diveDate : { type: Date, required : true },
    diveLaunch : {type : Date, required : true},
    diveLimit : { type : Number, required : true },
    diveDM : {type : String },
    diveSkipper : { type: String }
};
