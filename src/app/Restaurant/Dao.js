const { UserBindingContext } = require("twilio/lib/rest/chat/v2/service/user/userBinding");

/* Dao : Query (in mysql) 실행 */





// 사용자별 전체 찜식당 조회
async function getRestByUserIdd(connection, userId) {
  const Query = `
              Select * from Restaurant R
              Inner Join Keep K on K.status= "activate" and K.userId=?
             where R.id = K.resId;
  `;
  const [Result] = await connection.query(Query,userId);
  return Result;
}

//사용자별 식당 찜여부 조회
async function isKeepByUserIdd(connection, params) {
  const Query = `
        Select * from Restaurant  R
        Inner Join Keep K on K.userId = ?
        where R.id = K.resId and R.id = ?
        `;
  const [Result] = await connection.query(Query,params);
  return Result;
}

//특정식당조회
async function getRestByRestIdd(connection, restId) {
  const Query = `
    Select * from Restaurant R
    where R.id = ?;
    `;
    const [result] = await connection.query(Query, restId);
    return result;
}
//for validation
async function getRegionByIdd(connection,regionId) {
  const Query = `
  Select id from Region
  where id = ?;
  `;
  const [result] = await connection.query(Query, regionId);
  return result;
}

async function getCategoryByIdd(connection,categoryId) {
  const Query = `
  Select id from Category
  where id = ?;
  `;
  const [result] = await connection.query(Query, categoryId);
  return result;
}

//지역별 카테고리별 식당조회 Api
async function getRestd(connection, params){
  const Query = `
  Select * from Restaurant R
   Inner Join CategoryRest CR on CR.categoryId = ?
   Inner Join RegionRest RR on RR.regionId = ? AND RR.resId= CR.resId
Where CR.resId = R.id;
  `;
  const [result] = await connection.query(Query, params);
  return result;
}

//광고조회 API
async function getAdvertised(connection){
  const Query = `
  Select id, imageUrl from Advertise;
  `;
  const [result] = await connection.query(Query);
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
  getRestByUserIdd,
  isKeepByUserIdd,
  getRestByRestIdd,
  getRestd,
  getRegionByIdd,
  getCategoryByIdd,
  getAdvertised,
}
