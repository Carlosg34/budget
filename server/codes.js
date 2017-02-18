module.exports = {
  duplicateUsername: {status: 400, code: 'duplicateUsername', text: 'Username already in use'},
  duplicateEmail: {status: 400, code: 'duplicateEmail', text: 'Email address already in use'},

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

  notFound: {status: 404, code: 'notFound', text: 'Resource not found'}
}
