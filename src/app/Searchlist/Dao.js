const { UserBindingContext } = require("twilio/lib/rest/chat/v2/service/user/userBinding");

/* Dao : Query (in mysql) 실행 */





//사용자정보 가져오기
async function getUserbyIdd(connection, userId){
  const Query = `
  Select id from User U where id=?;
  `;
  const [Result] = await connection.query(Query, userId);
  return Result;
}

//사용자별  검색등록  API
async function postSearchd(connection, params){
  const Query = `
  Insert into Searchlist (userId, searchText)
  Values(?,?);
  `;
  const [Result] = await connection.query(Query, params);
  return Result;
}
//사용자별 검색기록 조회 API
async function getSearchlistByUseridd(connection, userId){
  const Query = `
      Select id, searchText from Searchlist where userId=? and status = 'activate' group by searchText order by createdAt desc;
  `;
  const [Result] = await connection.query(Query, userId);
  return Result;
}

//설치리스트가져오기 API
async function getSearchlistByidd(connection, searchId){
    const Query=`
    Select * from Searchlist Where id = ? ;  
  `;
  const [Result] = await connection.query(Query, searchId);
  return Result;
}

//특정검색기록 삭제 API
async function deleteSearchlistbyIdd(connection, searchId){
  const Query=`
 Update Searchlist set status='deleted' where id=?;
`;
const [Result] = await connection.query(Query, searchId);
  return Result;
}

//사용자별 전체검색기록 삭제API
async function deleteSearchlistbyUserIdd(connection, searchId){
  const Query=`
 Update Searchlist set status='deleted' where userId=?;
`;
const [Result] = await connection.query(Query, searchId);
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
  getUserbyIdd,
  postSearchd,
  getSearchlistByUseridd,
  getSearchlistByidd,
  deleteSearchlistbyIdd,
  deleteSearchlistbyUserIdd,
}
