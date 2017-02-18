module.exports = {
  missingPassword: {status: 400, code: 'missingPassword', text: 'Password missing from body'},
  missingUsername: {status: 400, code: 'missingUsername', text: 'Username missing from body'},
  missingEmail: {status: 400, code: 'missingEmail', text: 'Email missing from body'},

  usernameLength: {status: 400, code: 'usernameLength', text: 'Username must be between 3 and 10 characters'},
  passwordLength: {status: 400, code: 'passwordLength', text: 'Password must be between 6 and 30 characters'},

  invalidEmail: {status: 400, code: 'invalidEmail', text: 'Email is not valid'},
  invalidJson: {status: 400, code: 'invalidJson', text: 'Invalid JSON format'},

  incorrectLogin: {status: 401, code: 'incorrectLogin', text: 'Incorrect username or password'},
  notAuthorized: {status: 401, code: 'notAuthorized', text: 'Not authorized to perform this operation'},
  adminOnly: {status: 401, code: 'adminOnly', text: 'Only admin users can perform this operation'},
  missingAuthToken: {status: 401, code: 'missingAuthToken', text: 'No authorization token provided'},

  notFound: {status: 404, code: 'notFound', text: 'Resource not found'},

  usernameRegistered: {status: 409, code: 'usernameRegistered', text: 'Username already registered'},
  emailRegistered: {status: 409, code: 'emailRegistered', text: 'Email already registered'},

  dbConnectionRefused: {status: 500, code: 'dbConnectionRefused', text: 'Could not connect to database'}
}
