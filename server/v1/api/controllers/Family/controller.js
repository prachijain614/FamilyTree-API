import { addFamilyService, addMemberService } from "./service";

var handlebars = require("handlebars");
var mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

var path = require("path");
var pathname = path.resolve();

const Family = mongoose.model("Family");
const Member = mongoose.model("Member");

export class Controller {
    async addFamily(req, res) {
        let familyData = await addFamilyService(req.body)
        if (familyData) {
            let member = {
                familyId: familyData._id,
                memberName: familyData.familyHead,
                gender: familyData.gender
            }
            await addMemberService(member)
            return res.json({
                status: true,
                msg: 'Family added successfully.',
                data: familyData
            })
        } else {
            return res.json({
                status: true,
                msg: 'Error while adding family.'
            })
        }
    }

    async getFamilies(req, res) {
        let families = await Family.find({})
        if (families) {
            return res.json({
                status: true,
                data: families
            })
        } else {
            return res.json({
                status: false,
                msg: 'Error while getting families.'
            })
        }
    }

    async deleteFamily(req, res) {
        let { _id } = req.body
        let success = await Family.deleteOne({ _id: ObjectId(_id) })
        if (success) {
            return res.json({
                status: true,
                msg: "Family deleted successfully."
            })
        } else {
            return res.json({
                status: false,
                msg: "Error while deleting family."
            })
        }
    }

    async addMember(req, res) {
        let memberData = await addMemberService(req.body)
        if (memberData) {
            return res.json({
                status: true,
                msg: 'Family added successfully.',
                data: memberData
            })
        } else {
            return res.json({
                status: true,
                msg: 'Error while adding family.'
            })
        }
    }

    async getMemberList(req, res) {
        //await Member.remove({})

        let { familyId } = req.body

        let members = await Member.find({ familyId: ObjectId(familyId) })

       
    //     console.log(tree)
        return res.json({
            status: true,
            data: members
        })
    }
}

export default new Controller();