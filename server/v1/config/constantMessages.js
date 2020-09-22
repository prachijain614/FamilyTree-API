const MESSAGES = {
  Mail: {
    RegistrationSubject: "Registered successfully.",
    ResetSubject: "Password Reset Recovery Link",
    VerificationSubject: "Verification OTP to activate the account",
    FirstTimeLoginSubject: "Welcome to PongoPay!Reset Your Password with OTP",
    ResetSuccess: "Password Reset Successful",
    VerifyEmail: "Verification email to activate the account",
    EmployeeAccountCreated: "Employee's account created",
    PropertyAccountCreated: "Property Manager's account created",
    BuilderAccountCreated: "Builder's account created",
    ClientAccountCreated: "Client's account created",
    MediatorAccessAllowed: "Allowed access by Super Admin",
    JobAccepted: "Job $ by #",
    // JobRejectedBuilder: "Job Rejected by builder",
    // JobAcceptedClient: "Job Accepted by client",
    // JobRejectedClient: "Job Rejected by client",

  },
  FirstTimeLogin: {
    Success: "You have been verified successfully. Please login with the new password to continue.",
    FirstTimeLoginDone: "You have already been verified.",
    OTPNotFound: "The OTP you have entered is incorrect.",
    NoAccountFound: "Sorry!  We couldn't find an account with that email",
    Deleted: "You have no access to the app further as your account has been deleted by the admin. Please contact the system admin for further details.",


  },
  Validation: {
    EmailNotEmpty: "Email should not be empty."
  },
  Faq: {
    QuestionEmpty: "Question cannot be empty.",
    AnswerEmpty: "Answer cannot be empty."

  },
  Account: {
    UserNotFound: "User not found.",
    UserUpdated: "User updated successfully.",
    PaybaseAccountCreated: "Paybase account created successfully.",
    BusinessPersonAdded: "Business person added successfully.",

    StatusInactive: "You have no access to the app further as your account has been deactivated  by the admin. Please contact the system admin for further details",
    StatusDelete: "You have no access to the app further as your account has been deleted by the admin. Please contact the system admin for further details",
    OldPasswordNotMatch: "The old password is incorrect.",
    PasswordChangedSuccessfully: "Your passwords has been changed successfully.",
    ChangePasswordFailed: "Password changes failed.",
    ValidResetLink: "Your reset password link is valid.",
    ValidFirstTimeLoginLink: "Your first time login link is valid.",
    ValidFirstTimeLoginLinkInvalid: "Your login link is invalid.",

    ResetLinkExpired:
      "Reset Password link is expired. Please go to Forgot Password to process again.",


    ResetPasswordFailed: "Sorry!  We couldn't find an account with that email",
    ResetPasswordUserNotFound: "User not found",
    Updated: "User status updated successfully",
    UpdatedMediator: "User mediator rights updated successfully",

    Deleted: "User deleted successfully"

  },
  ForgotPassword: {
    //Messages from TestCases 
    ResetLinkNotExpired: "We have already sent mail. Please check your mail",
    EmailNotRegistered: "Sorry!  We couldn't find an account with that email",
    InvalidPassword: "Password must be Alphanumeric. Minimum length of 6 characters, minimum of 1 capital letter(s) , minimum of 1 number(s).",
    ResetLinkHasBeenSent:
      "Your password reset request has been successfully sent.",
    ResetPasswordSuccess:
      "Your passwords has been changed successfully."
  },
  Login: {
    // Messages from TestCases
    LoginSuccess: "You have successfully logged in. Redirecting to dashboard...",
    EmailNotRegistered: "Sorry!  We couldn't find an account with that email",
    InvalidPassword: "Incorrect password. Please try again or click on \"Forgot Password\" below.",
    LoginFailure: "Sorry!  We couldn't find an account with that email.",
    LoginFormatFailure: "Are you sure you entered the valid Email?",
    EmailSent: "Email sent to the registered email address.",
    LoginMobileFailure: "Sorry!  We couldn't find an account with that phone number.",
    EmailOTPSent: "OTP has been sent to the provided phone number and email address.",
    UserIdEmpty: "User Id cannot be empty.",
    OtpSent: "OTP has been sent to the provided phone number.",
    PhoneNumberNotRegistered: "Sorry!  We couldn't find an account with that mobile number.",
    VerificationSuccess: "You are logged in successfully.",
    StatusInactive: "",
    StatusDelete: "",

    //Temp Messages
    UnauthorisedLogin: "You are not allowed to login here.",
    FirstTimeLoginIncomplete: "Your login process is incomplete please check mail and verify to go forward",

    InvalidEmail: "Please enter a valid email.",
    EmptyEmail: "Email cannot be empty.",
    EmptyPassword: "Password cannot be empty.",
    EmptyCountryCode: "Country code cannot be empty.",
    EmptyPhoneNumber: "Phone number cannot be empty.",
    InvalidPasswordFormat: "Password must be Alphanumeric. Minimum length of 6 characters, minimum of 1 capital letter(s) , minimum of 1 number(s).",
    InValidPhoneNumber: "Please enter valid phone number",
    PhoneNumberValidations: "Phone number must be between 10-13 digits.",

    ResetSubject: "Password Reset Recovery Link",
    OTPError: "OTP enter is not correct. Please click on Resend for new OTP",
    OTPEmpty: "OTP should be of 6 digits.",
    InvalidFirstName: "Please enter a valid firstName.",
    OTPError: "OTP enter is not correct. Please click on Resend for new OTP",
    InvalidOtp: "Invalid OTP!",
    EmptyFirstName: "First Name cannot be empty.",
    EmptyLastName: "Last Name cannot be empty.",


  },

  Register: {
    RegistrationSuccess: "Registered successfully.",
    AlreadyRegistered: "This email already registered. Please use another email or login with the same email.",
    AlreadyRegisteredPhone: "That phone number is already in use.  Please try another.",
    VerificationLink: "Verification email sent successfully.",
    EmailNotRegistered: "Sorry!  We couldn't find an account with that email",
    UserNotFound: "User Not Found",
    VerificationSuccess: "You are verified successfully.",
    ResetLinkExpired: "Link expired. Please click on resend link for further process.",
    AlreadyVerified: "User is already verified.",


  },
  User: {
    UserAlreadyRegistered: "That E-mail address is already in use.  Please try another.",
    UserAdded: "User added successfully.",
    NotAllowed: "You are not allowed to use this action.",
    UserUpdated: "User details updated.",

    UsersFetched: "Users fetched.",


    ValidResetLink: "Your reset password link is valid.",

    ResetLinkExpired:
      "Reset Password link is expired. Please go to Forgot Password to process again.",


    ResetPasswordFailed: "Sorry!  We couldn't find an account with that email",
    ResetPasswordUserNotFound: "User not found",


    AlphanumericValidation: "This field can only contain \"Alphanumeric\" values. Please try again. ",
    FirstNameEmpty: "First name cannot be empty.",
    LastNameEmpty: "Last name cannot be empty.",

    PhoneNumberValidation: "Phone number must be between 10-13 digits. ",
    PhoneNumberEmpty: "Phone number cannot be empty.",

  },

  Jobs: {
    JobCreatedSuccessfully: "Job created successfully! ",
    JobUnSuccessful: "Unable to create the job ",
    InviteMsg: "You are invited to complete a job in PongoPay. Please download the link and login with this mobile number to view details. http://www.google.com",
    JobDataFetched: "Job data fetched successfully",
    JobDataNotFound: "Sorry no data found.",
    JobAccepted: "You have accepted the job you were invited to.",
    JobRejected: "You have rejected the job you were invited to.",
    JobAddedToList: "This job is added to your list successfully.",
    JobAlreadyAccepted: "This job has already been accepted.",
    JobStarted: "This cannot be edited as it has been approved.",
    NotAllowed: "You are not allowed to do this action.",
    JobAddNotAllowed: "You are not allowed to add this job. Please contact your builder."



  },
  Contract: {
    ContractCreated: "Contract creation successful",
    ContractUpdated: "Contract updated successfully",

    NotAllowed: "You are not allowed to do this action",
    ContractModifiedRequest: "Modification request added.",
    ContractAlreadyAccepted: "You have already accepted the contract.",
    ContractNoDataFound: "No data found.",
  },
  ModificationRequest: {
    RequestAccepted: "You have completed the modification request.",
    RequestRejected: "You have rejected the modification request.",

    NotAllowed: "You are not allowed to do this action",
    ContractModifiedRequest: "Modification request added.",
    ContractAlreadyAccepted: "You have already accepted the contract.",
    ContractNoDataFound: "No data found.",
  },
  Milestone: {
    MilestoneAdded: "Milestone added successfully",
    MilestoneFetched: "Milestone getting successfully",
    MilestoneNoDataFound: "No milestone found",
    MilestoneUpdateNotAllowed: "Milestone cannot be updated as it has been approved.",
    MilestoneAdded: "Milestone added successfully",
    EmployeeAdded: "Employee assigned to resolve the dispute",
    MilestoneDispute: "Dispute has been raised for the milestone.",
    DecisionAnnounced: "Decision announced by employee",
    DecisionAccepted: "Decision of the dispute accepted",
    DecisionRejected: "Decision of the dispute rejected",
    JobRejected: "You cannot create milestone as you have rejected the job.",
    JobPending: "Milestone cannot be created, accept the job to create them.",


  },
  WorkProgress: {
    WorkProgressAdded: "Work Progress add successful.",
    WorkProgressFailed: "Work progress add failed.",
    NotAllowed: "You are not allowed to do this action.",

  },

  Payment: {
    customerExists: 'User already exists in paybase'
  }


};
export default MESSAGES;
