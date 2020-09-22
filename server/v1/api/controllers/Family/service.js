var mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const Family = mongoose.model("Family");
const Member = mongoose.model("Member");

export const addFamilyService = async (param) => {
    let familyObj = new Family()
    familyObj.familyId = Math.floor(100000 + Math.random() * 900000)
    familyObj.familyName = param.familyName
    familyObj.familyHead = param.familyHead
    familyObj.gender = param.gender
    let familyData = await familyObj.save()
    return familyData
}

export const addMemberService = async (param) => {
    let memberObj = new Member()
    memberObj.familyId = param.familyId
    memberObj.memberName = param.memberName
    memberObj.gender = param.gender
    param.parentId && (memberObj.parentId = ObjectId(param.parentId))
    let memberData = await memberObj.save()
    return memberData
}