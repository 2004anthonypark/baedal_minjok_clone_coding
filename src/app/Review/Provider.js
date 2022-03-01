const res = require("express/lib/response");
const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const Dao = require("./Dao");

// Provider: Read 비즈니스 로직 처리 ( 조회 API )

//식당별 리뷰조회 API
exports.getReviewByRestIdp = async function (restId){
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.getReviewByRestIdd(connection, restId);
    connection.release();
    return result;
}

//사용자별 리뷰조회 API
exports.getReviewByUserIdp = async function (userId){
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.getReviewByUserIdd(connection, userId);
    connection.release();
    return result;
}

//review아이디 조회
exports.getReviewByIdp = async function(reviewId){
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.getReviewByIdd(connection, reviewId);
    connection.release();
    return result;
    
}