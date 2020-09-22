import CONSTANTS from "./constants";
import { response } from "express";
var mongoose = require("mongoose");
var PubNub = require('pubnub')
var ObjectId = mongoose.Types.ObjectId;
let pubnub;
exports.initPubNub = async () => {
  pubnub = new PubNub({
    publishKey: CONSTANTS.PUBNUB_PUBLISH_KEY,
    subscribeKey: CONSTANTS.PUBNUB_SUBSCRIBE_KEY
  })

  return pubnub
}
exports.getAllUsers = async () => {
  let allUsers = [];
  pubnub = new PubNub({
    publishKey: CONSTANTS.PUBNUB_PUBLISH_KEY,
    subscribeKey: CONSTANTS.PUBNUB_SUBSCRIBE_KEY
  })

  return Promise.resolve(pubnub.getUsers(
    {},
  )
  )
}
exports.addUserToPubnub = async (user) => {
  let pubnub = new PubNub({
    publishKey: CONSTANTS.PUBNUB_PUBLISH_KEY,
    subscribeKey: CONSTANTS.PUBNUB_SUBSCRIBE_KEY
  })
  pubnub.createUser(
    {
      id: user._id,
      name: user.sFirstName + " " + user.sLastName
    },
    function (status, response) {
      console.log("status" + JSON.stringify(status))
      console.log("response" + JSON.stringify(response))
    }
    // return Promise.resolve( pubnub.createUser(
    //   {
    //     id: user._id,
    //     name: user.sFirstName + " " + user.sLastName
    //   },

    // )
  );
}
exports.createGroup = async (job) => {
  await pubnub.createSpace(
    {
      id: job._id,
      name: job.sJobTitle
    },
    function (status, response) {
      console.log("createSpace status" + JSON.stringify(status))
      console.log("createSpace response" + JSON.stringify(response))
    }
  );
}
exports.addUsersToChannels = async (user, spaceId) => {
  let pubnub = new PubNub({
    publishKey: CONSTANTS.PUBNUB_PUBLISH_KEY,
    subscribeKey: CONSTANTS.PUBNUB_SUBSCRIBE_KEY
  })
  console.log("==>" + JSON.stringify(user))
  // let abc = user[0]
  // await pubnub.addMembers(
  //   {
  //     spaceId: spaceId,
  //     users: [
  //         {
  //             id: "5e0eb5510dfcc6021656ac26"
  //         }
  //       ]
  //     //     {
  //     //         id: "user-2"
  //     //     }
  //     // ]
  //     // users: user
  //   },
  //   function (status, response) {
  //     console.log(status,"addSpace status")
  //     console.log(response,"addSpace response")
  //   }
  // );
// console.log("SpaceId=>",spaceId)
//   pubnub.joinSpaces(
//     {
//       userId: "5e0eb5510dfcc6021656ac26",
//       spaces: [
//         {
//           id: spaceId
//         }
//       ]
//     },
//     function (status, response) {
//       console.log(status, "addSpace status")
//       console.log(response, "addSpace response")
//     }
//   );
}

exports.getAllGroups = async (job) => {
  let pubnub = new PubNub({
    publishKey: CONSTANTS.PUBNUB_PUBLISH_KEY,
    subscribeKey: CONSTANTS.PUBNUB_SUBSCRIBE_KEY
  })
  return Promise.resolve(pubnub.getSpaces(
    { limit: 100 },
  )

  );
}

exports.initPubNubWithUser = async (user) => {
  const pubnub = new PubNub({
    subscribeKey: CONSTANTS.PUBNUB_SUBSCRIBE_KEY,
    publishKey: CONSTANTS.PUBNUB_PUBLISH_KEY,
    uuid: user._id,
    autoNetworkDetection: true, // enable for non-browser environment automatic reconnection
    restore: true, // enable catchup on missed messages
  });
  pubnub.getUsers(
    {
      include: {
        customFields: true
      }
    },
    function (status, response) {
      console.log("status" + JSON.stringify(status))
      console.log("all users response" + JSON.stringify(response))

    }
  );
  pubnub.getUser(
    {
      userId: user._id,
      include: {
        customFields: true
      }
    },
    function (status, response) {
      console.log("status" + JSON.stringify(status))
      console.log("response" + JSON.stringify(response))

    }
  );


}

exports.deleteSpace = async (spaceId) => {
  let pubnub = new PubNub({
    publishKey: CONSTANTS.PUBNUB_PUBLISH_KEY,
    subscribeKey: CONSTANTS.PUBNUB_SUBSCRIBE_KEY
  })
  pubnub.deleteSpace(spaceId, function (status, response) {
    console.log("status", status)
    console.log("response", response)

  });
}
exports.viewMemberInSpaces = async (spaceId) => {
  console.log("Members=>", spaceId)
  let pubnub = new PubNub({
    publishKey: CONSTANTS.PUBNUB_PUBLISH_KEY,
    subscribeKey: CONSTANTS.PUBNUB_SUBSCRIBE_KEY
  })
  pubnub.getMembers({
    spaceId: spaceId
  }),
    function (status, response) {
      console.log("status" + JSON.stringify(status))
      console.log("all users response" + JSON.stringify(response))

    }
  // return Promise.resolve(await pubnub.getMembers(
  //   {
  //     spaceId: spaceId
  //   })
  // );
}



