const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const Dao = require("./Dao");

// Provider: Read 비즈니스 로직 처리 ( 조회 API )

// 전체유저 정보 조회
exports.retrieveUserList = async function (email) {

    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.selectUser(connection);
    connection.release();
    return result;
};

// 아이디로 유저 정보 조회(내 정보 조회)
exports.userGetById = async function(userId){
     const connection = await pool.getConnection(async (conn) => conn);
     const result = await Dao.selectUserById(connection,userId);
     connection.release();
     return result;
}

// 이메일로 유저 정보 조회(내 정보 조회)
exports.userGetByEmail = async function(email){
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.selectUserByEmail(connection,email);
    connection.release();
    return result;
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