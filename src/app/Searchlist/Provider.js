const res = require("express/lib/response");
const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const Dao = require("./Dao");

// Provider: Read 비즈니스 로직 처리 ( 조회 API )



//사용자정보 가져오기
exports.getUserbyId = async function (userId){
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.getUserbyIdd(connection, userId);
    connection.release();
    return result;
}
//사용자별 검색기록 조회 API 
exports.getSearchlistByUseridp = async function (userId){
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.getSearchlistByUseridd(connection, userId);
    connection.release();
    return result;
}

//설치리스트가져오기 API
exports.getSearchlistByid = async function (searchId){
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.getSearchlistByidd(connection, searchId);
    connection.release();
    return result;
}