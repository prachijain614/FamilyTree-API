const CONSTANTS = {
  APP_URL: "http://staging-pongopay.herokuapp.com/",
  EMAIL_AUTH: {
    USERNAME: "pongopay",
    PASSWORD: "Pongo@123"
  },
  PUBNUB_PUBLISH_KEY: "pub-c-86b61b6d-e757-49f6-a555-952497097ee2",
  PUBNUB_SUBSCRIBE_KEY: "sub-c-e631f274-305f-11ea-a820-f6a3bb2caa12",

  // TWILIO_ACCOUNTSID: "AC6eb2333023c5ae15604e5c4cbb724fe3",
  // TWILIO_AUTHTOKEN: "34329909db1f8c13e9a2f8df9010a854",
  // TWILIO_FROM: "+12017332906",
  TWILIO_ACCOUNTSID: "ACfe91cb47766f235bad22952c75ffd683",
  TWILIO_AUTHTOKEN: "7961fe8f4862699c64a936103e2cbb72",
  TWILIO_FROM: "+12013892959",
  // TWILIO_ACCOUNTSID: "ACfe91cb47766f235bad22952c75ffd683",
  // TWILIO_AUTHTOKEN: "7961fe8f4862699c64a936103e2cbb72",
  // TWILIO_FROM: "+19802234399",


  CLOUDNARY_AUTH: {
    cloud_name: "nimble-chapps",
    api_key: "613265315456439",
    api_secret: "Gb-OhPlxtiXI9li6cw4qsmVsnNY",
  },
  USER_ROLE: {
    SUPERADMIN: "UR001",
    EMPLOYEES: "UR002",
    PROPERTYMANAGER: "UR003",
    BUILDER: "UR004",
    CLIENT: "UR005",
  },
  STATUS: {
    ENABLE: 1,
    DISABLE: 0,
    DELETE: 2
  },
  JOBSTATUS: {
    PENDING: 0,
    REQUESTED: 1,
    AWAITING_RESPONSE: 2,
    ACCEPTED: 3,
    ON_GOING: 4,
    REJECTED: 5,
    OPEN_DISPUTE: 6,
    COMPLETED: 7,
    RESOLVED_DISPUTE: 8,
    DORMANT: 9,
    CANCELLED: 10,
    IN_ARBITRATION: 11

  },
  DECISION: {
    BUILDER: 0,
    CLIENT: 1,
    ARBITRATION: 2
  },

  ACCEPT_MILESTONE_STATUS: {
    PENDING: 0,
    ACCEPTED: 1,

  },
  MILESTONESTATUS: {
    PENDING: 0,
    APPROVED: 1,
    ON_GOING: 2,
    WORK_REVIEW_REQUEST: 3,
    COMPLETED: 4,
    REJECT_WITHOUT_DISPUTE: 5,
    DISPUTE: 6
  },

  TYPE: {
    ISSUE: 0,
    PROGRESS: 1
  },
  PAYBASE: {
    INDIVIDUAL: "individual",
    SOLE_TRADER: "sole_trader",
    INCORPORATE_BUSINESS: "incorporate_business",

    BUSINESS_PERSON_ROLES: {
      PRIMARY: 'PRIMARY',
      SECONDARY: 'SECONDARY'
    }

  },

  ADDMILESTONESTATUS: {
    ACCEPT: 0,
    ADD: 1,
    SUBMIT: 2
  },
  MODIFICATIONREQUESTSTATUS: {
    PENDING: 0,
    ACCEPTED: 1,
    REJECTED: 2,
  },
  ACCEPTREJECTSTATUS: {
    DONTSHOW: -1,

    PENDING: 0,
    ACCEPT: 1,
    REJECT: 2
  },
  PAYMENT_STATUS: {
    PENDING: 0,
    ESCROW: 1,
    COMPLETE: 2
  },
  REPLY_TO: "support@pongopay.com",
  // FORGOT_PASSWORD_LINK: "http://localhost:3000/forgotpassword/",
  // RESET_PASSWORD_LINK: "http://localhost:3000/resetpassword/",
  // FIRSTTIME_VERIFY_LINK: "http://localhost:3000/firsttimelogin/",
  // SIGNUP_EMAIL_LINK: "http://localhost:3000/verifierUser",

  FORGOT_PASSWORD_LINK: "http://staging-pongopay.herokuapp.com/forgotpassword/",
  RESET_PASSWORD_LINK: "http://staging-pongopay.herokuapp.com/resetpassword/",
  FIRSTTIME_VERIFY_LINK: "http://staging-pongopay.herokuapp.com/firsttimelogin/",
  SIGNUP_EMAIL_LINK: "http://staging-pongopay.herokuapp.com/verifierUser",
  RESET_SUCCESS_LINK: "http://staging-pongopay.herokuapp.com/login",


  USER_PLACEHOLDER: "https://res.cloudinary.com/nimble-chapps/image/upload/v1579755732/PongoPay/evhkx8gafuth6ykt6yor.png"


};


export default CONSTANTS;
