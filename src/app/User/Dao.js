const { UserBindingContext } = require("twilio/lib/rest/chat/v2/service/user/userBinding");

/* Dao : Query (in mysql) 실행 */

// 모든 유저 조회
async function selectUser(connection) {
  const selectUserListQuery = `
                select *
                FROM User;
                `;
  const [result] = await connection.query(selectUserListQuery);
  return result;
}

// id로 유저 정보 조회 (내 정보 조회)
async function selectUserById(connection, userId) {
  const query = 
    `select id, photoUrl, name, email, password, mailAgree, smsAgree, phoneNumber
    From User 
    Where id = ?;`;

    const [result] = await connection.query(query, userId);
    return result;

}

// email로 유저 정보 조회 (for post-user vaildation)
async function selectUserByEmail(connection, email) {
  const query = 
    `select id, photoUrl, name, email, password, mailAgree, smsAgree, phoneNumber
    From User 
    Where email = ?;`;

    const [result] = await connection.query(query, email);
    return result;

}


// 회원가입
async function postUser(connection, params){
  const query =
  `insert into User(name, email, password, regionId, mailAgree, smsAgree, vip, photoUrl, phoneNumber)
values(?, ?, ?, ?, ?, ?, ?, ?, ?);`;

      const result = await connection.query(query, params);
      return result;
}

// 비밀번호 변경
async function changePasswords(connection, params){
  const query =
  `Update User Set password = ? Where id = ? ;`;

  const result = await connection.query(query, params);
  return result;
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
  selectUser,
  selectUserById,
  selectUserByEmail,
  postUser,
  changePasswords,
};
