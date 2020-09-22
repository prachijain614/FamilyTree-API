var mongoose = require("mongoose");

var FamilySchema = new mongoose.Schema(
    {
        familyId: {type:Number},
        familyName: {type:String},
        familyHead: {type:String},
        gender: {type: String},
    }
);
mongoose.model("Family", FamilySchema);