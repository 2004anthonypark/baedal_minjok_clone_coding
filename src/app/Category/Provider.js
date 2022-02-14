const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const Dao = require("./Dao");

// Provider: Read 비즈니스 로직 처리 ( 조회 API )

// 전체유저 정보 조회
exports.getCategory_provider = async function () {

    const connection = await pool.getConnection(async (conn) => conn);
    const result = await Dao.selectCategory(connection);
    connection.release();
    return result;
};

