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

//사용자별 식당 찜여부 수정
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

//특정식당조회 api
exports.getRestByRestIdp = async function (restId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.getRestByRestIdd(connection, restId);
    connection.release();
    return result;
}

exports.getRegionById = async function (regionId){
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.getRegionByIdd(connection, regionId);
    connection.release();
    return result;
}

exports.getCategoryById = async function (categoryId){
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.getCategoryByIdd(connection, categoryId);
    connection.release();
    return result;
}

//지역별 카테고리별 식당조회 Api
exports.getRestp = async function (params){
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.getRestd(connection, params);
    connection.release();
    return result;
}

//광고조회 API
exports.getAdvertisep = async function (){
    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.getAdvertised(connection);
    connection.release();
    return result;

}

