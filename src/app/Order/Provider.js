const res = require("express/lib/response");
const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const Dao = require("./Dao");

// Provider: Read 비즈니스 로직 처리 ( 조회 API )

// 사용자별 전체 찜식당 조회
exports.getRestByUserId = async function (userId) {

    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.getRestByUserIdd(connection, userId);
    connection.release();
    return result;
};

//사용자별 식당 찜여부 조회
exports.isKeepByUserIdp = async function (params) {

    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.isKeepByUserIdd(connection, params);
    connection.release();
    if(result.length>0){
        return true;
    }
    else{
        return false;
    }
};

//사용자별 주문내역조회 APi
exports.getOrderByUserIdp = async function (userId){
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.getOrderByUserIdd(connection, userId);
    connection.release();
    return result;
}

//testOrderId
exports.testOrderId = async function (orderId){
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.testOrderIdd(connection, orderId);
    connection.release();
    return result;

}
