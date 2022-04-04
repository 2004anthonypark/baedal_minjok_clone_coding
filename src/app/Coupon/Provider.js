const res = require("express/lib/response");
const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const Dao = require("./Dao");

// Provider: Read 비즈니스 로직 처리 ( 조회 API )

//사용자별 쿠폰 조회 API  
exports.getCouponByuserIdp = async function (userId){
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.getCouponByuserIdd(connection, userId);
    connection.release();
    return result;
}

//쿠폰 아이디 가져오기
exports.getCouponById = async function (couponId){
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.getCouponByIdd(connection, couponId);
    connection.release();
    return result;
}

//특정유저조회
exports.getUserById = async function (userId){
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.getUserByIdd(connection, userId);
    connection.release();
    return result;

}