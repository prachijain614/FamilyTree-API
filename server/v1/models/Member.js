var mongoose = require("mongoose");

var MemberSchema = new mongoose.Schema(
    {
        familyId: {  
            type: mongoose.Schema.Types.ObjectId,
            ref: "Family"
        },
        parentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Member"
        },
        memberName: {type:String},
        gender: {type: String},
    }
);
mongoose.model("Member", MemberSchema);