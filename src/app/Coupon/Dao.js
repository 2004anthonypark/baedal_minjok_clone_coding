const { UserBindingContext } = require("twilio/lib/rest/chat/v2/service/user/userBinding");

/* Dao : Query (in mysql) 실행 */


//쿠폰아이디 가져오기
async function getCouponByIdd(connection, couponId){
  const Query = `select * from Coupon where id=?;`;
  const [result] = await connection.query(Query, couponId);
  return result;
}

// 사용자별 쿠폰 등록 API
async function changeCouponByUserIdd(connection, params){
  const Query = `INSERT INTO CouponUser(userId,couponId) VALUES(?,?);`;
  const [result] = await connection.query(Query, params);
  return result;
}


//사용자별 쿠폰 조회 API  
async function getCouponByuserIdd(connection, userId){
  const Query =`
  SELECT C.id, C.status, C.couponStartdate, C.couponFinishdate, C.couponId from UserCoupon C where userId=? and status = 'activate';
  `;
  const [Result] = await connection.query(Query,userId);
  return Result;
}

//특정유저조회
async function getUserByIdd(connection, userId){
  const Query=`
  SELECT * from User where id=?;
  `;
  const [Result] = await connection.query(Query,userId);
  return Result;
}

// // 이메일로 회원 조회
// async function selectUserEmail(connection, email) {
//   const selectUserEmailQuery = `
//                 SELECT profileimageUrl, nickname, email, password, phoneNumber
//                 FROM User 
//                 WHERE email = ?;
//                 `;
//   const [emailRows] = await connection.query(selectUserEmailQuery, email);
//   return emailRows;
// }

// // userId 회원 조회
// async function selectUserId(connection, userId) {
//   const selectUserIdQuery = `
//                  SELECT profileimageUrl, nickname, email, password, phoneNumber
//                  FROM User
//                  WHERE id = ?;
//                  `;
//   const [userRow] = await connection.query(selectUserIdQuery, userId);
//   return userRow;
// }

// // 유저 생성
// async function insertUserInfo(connection, insertUserInfoParams) {
//   const insertUserInfoQuery = `
//         INSERT INTO User(email, password, phoneNumber)
//         VALUES (?, ?, ?);
//     `;
//   const insertUserInfoRow = await connection.query(
//     insertUserInfoQuery,
//     insertUserInfoParams
//   );

//   return insertUserInfoRow;
// }

// // 패스워드 체크
// async function selectUserPassword(connection, selectUserPasswordParams) {
//   const selectUserPasswordQuery = `
//         SELECT profileimageUrl, nickname, email, password, phoneNumber
//         FROM User 
//         WHERE email = ? AND password = ?;`;
//   const selectUserPasswordRow = await connection.query(
//       selectUserPasswordQuery,
//       selectUserPasswordParams
//   );

//   return selectUserPasswordRow;
// }

// // 유저 계정 상태 체크 (jwt 생성 위해 id 값도 가져온다.)
// async function selectUserAccount(connection, email) {
//   const selectUserAccountQuery = `
//         SELECT status, id
//         FROM User 
//         WHERE email = ?;`;
//   const selectUserAccountRow = await connection.query(
//       selectUserAccountQuery,
//       email
//   );
//   return selectUserAccountRow[0];
// }

// async function updateUserInfo(connection, id, nickname) {
//   const updateUserQuery = `
//   UPDATE User 
//   SET nickname = ?
//   WHERE id = ?;`;
//   const updateUserRow = await connection.query(updateUserQuery, [nickname, id]);
//   return updateUserRow[0];
// }
// async function updateUserPassword(connection, id, password) {
//   const updateUserQuery = `
//   UPDATE User 
//   SET password = ?
//   WHERE id = ?;`;
//   const updateUserRow = await connection.query(updateUserQuery, [password,id]);
//   return updateUserRow[0];
// }
// async function updateUserPhoneNumber(connection, id, phoneNumber) {
//   const updateUserQuery = `
//   UPDATE User 
//   SET phoneNumber = ?
//   WHERE id = ?;`;
//   const updateUserRow = await connection.query(updateUserQuery, [phoneNumber,id]);
//   return updateUserRow[0];
// }
// async function updateUserPhoneNumber(connection, id, phoneNumber) {
//   const updateUserQuery = `
//     UPDATE User
//     SET phoneNumber = ?
//     WHERE id = ?;`;
//   const updateUserRow = await connection.query(updateUserQuery, [phoneNumber,id]);
//   return updateUserRow[0];
// }
// async function deleteUser(connection, id) {
//   const updateUserQuery = `
//   UPDATE User 
//   SET status = ?
//   WHERE id = ?;`;
//   const updateUserRow = await connection.query(updateUserQuery, ["DELETED",id]);
//   return updateUserRow[0];
// }
// async function selectUserStatus(connection, id) {
//   const selectUserAccountQuery = `
//         SELECT id, status
//         FROM User 
//         WHERE id = ?;`;
//   const selectUserAccountRow = await connection.query(
//       selectUserAccountQuery,
//       id
//   );
//   return selectUserAccountRow[0];
// }

module.exports = {
  getCouponByuserIdd,
  getUserByIdd,
  getCouponByIdd,
  changeCouponByUserIdd,

}
