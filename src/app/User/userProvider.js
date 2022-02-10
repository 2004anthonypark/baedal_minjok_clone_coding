const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const userDao = require("./userDao");

// Provider: Read 비즈니스 로직 처리

exports.retrieveUserList = async function (email) {

    const connection = await pool.getConnection(async (conn) => conn);
    const userListResult = await userDao.selectUser(connection);
    connection.release();
    return userListResult;
};

exports.userGetById = async function(userId){
     const connection = await pool.getConnection(async (conn) => conn);
     const Result = await userDao.selectUserById(connection,userId);
     connection.release();
     return Result;
}

exports.userGetByEmail = async function(email){
    const connection = await pool.getConnection(async (conn) => conn);
    const Result = await userDao.selectUserByEmail(connection,email);
    connection.release();
    return Result;
}
// exports.retrieveUser = async function (userId) {
//   const connection = await pool.getConnection(async (conn) => conn);
//   const userResult = await userDao.selectUserId(connection, userId);

//   connection.release();
//   return userResult[0];
// };
// exports.selectUserStatus = async function(userId){
//   const connection = await pool.getConnection(async (conn) => conn);
//   const result = await userDao.selectUserStatus(connection,userId);
//   connection.release();
//   return result[0];
// };

// exports.emailCheck = async function (email) {
//   const connection = await pool.getConnection(async (conn) => conn);
//   const emailCheckResult = await userDao.selectUserEmail(connection, email);
//   connection.release();

//   return emailCheckResult;
// };

// exports.passwordCheck = async function (selectUserPasswordParams) {
//   const connection = await pool.getConnection(async (conn) => conn);
//   const passwordCheckResult = await userDao.selectUserPassword(
//       connection,
//       selectUserPasswordParams
//   );
//   connection.release();
//   return passwordCheckResult[0];
// };

// exports.accountCheck = async function (email) {
//   const connection = await pool.getConnection(async (conn) => conn);
//   const userAccountResult = await userDao.selectUserAccount(connection, email);
//   connection.release();

//   return userAccountResult;
// };