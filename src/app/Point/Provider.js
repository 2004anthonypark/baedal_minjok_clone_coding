const res = require("express/lib/response");
const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const Dao = require("./Dao");

// Provider: Read 비즈니스 로직 처리 ( 조회 API )

//사용자 아이디 가져오기
exports.getUserbyId = async function (userId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.getUserbyIdd(connection, userId);
    connection.release();
    return result;
}


//사용자별 포인트 조회 API
exports.getPointbyUseridp = async function(userId){
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.getPointbyUseridd(connection, userId);
    connection.release();
    return result;
}
