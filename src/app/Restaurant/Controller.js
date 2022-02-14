const jwtMiddleware = require("../../../config/jwtMiddleware");
const Provider = require("./Provider");
const Service = require("./Service");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");
const request = require("request");
const regexEmail = require("regex-email");
const axios = require("axios");
const {emit} = require("nodemon");
const crypto = require('crypto');
const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;
const nodemailer = require('nodemailer');
var accountSid = 'AC4ee04f92ba678ce4b14e0a37dc0fb3c2';
var authToken = 'a46775e31b9b19ca8190d43cb5c9538c';
var twilio = require('twilio');
var client = new twilio(accountSid,authToken);

var CryptoJS = require("crypto-js");
var SHA256 = require("crypto-js/sha256");
var Base64 = require("crypto-js/enc-base64");
const { SUCCESS } = require("../../../config/baseResponseStatus");

/* Controller : Validation, query body path variables 핸들링. */


//사용자별 모든 찜식당 조회
exports.getRestByUserId = async function (req, res) {
    const userId = req.params.userId;
    const result = await Provider.getRestByUserId(userId);
    return res.send(response(baseResponse.SUCCESS, result));
};


//사용자별 식당별 찜여부 조회
exports.isKeepByUserId = async function (req,res){
    const userId = req.query.userId;
    const restId = req.query.restId;
    if(!userId||!restId){
        return res.send(errResponse(baseResponse.WRONG_INPUT));
    }
    const params = [userId, restId];
    const result = await Provider.isKeepByUserIdp(params);
    return res.send(response(baseResponse.SUCCESS, result));
}
 