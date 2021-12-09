/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get User Info by User ID
* Retrieve the information of the user with the matching user ID.
*
* userId String the id of an existing user
* userAgent String the user agent
* correlationId String the correlation-id (optional)
* returns User
* */
const getUsersUserId = ({ userId, userAgent, correlationId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userId,
        userAgent,
        correlationId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Create New User
* Create a new user.
*
* userAgent String the user agent
* correlationId String the correlation-id (optional)
* inlineObject InlineObject  (optional)
* returns User
* */
const postUser = ({ userAgent, correlationId, inlineObject }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userAgent,
        correlationId,
        inlineObject,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update User Information
* Update the information of an existing user.
*
* userId String the id of an existing user
* userAgent String the user agent
* correlationId String the correlation-id (optional)
* returns User
* */
const putUsersUserId = ({ userId, userAgent, correlationId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userId,
        userAgent,
        correlationId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  getUsersUserId,
  postUser,
  putUsersUserId,
};
