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



 

//특정식당조회 api
exports.getRestByRestId = async function (req,res){
    const restId = req.params.restId;
    if(!restId){
        return res.send(errResponse(baseResponse.WRONG_INPUT));
    }
    
    const result = await Provider.getRestByRestIdp(restId);
    if(result.length<1){
        return res.send(errResponse(baseResponse.NO_EXIST_ID));
    }
    return res.send(response(baseResponse.SUCCESS, result));
}

//지역별 카테고리별 식당조회 Api
exports.getRest = async function (req,res){
    const regionId = req.query.regionId;
    const categoryId = req.query.categoryId
    if(!regionId||!categoryId){
        return res.send(errResponse(baseResponse.WRONG_INPUT));
    }
    const regionResult = await Provider.getRegionById(regionId);
    const categoryResult = await Provider.getCategoryById(categoryId);
    if(regionResult.length<1){
        return res.send(errResponse(baseResponse.NO_EXIST_REGIONID));
    }
    if(categoryResult.length<1){
        return res.send(errResponse(baseResponse.NO_EXIST_CATEGORYID));
    }
    const params =[categoryId,regionId];
    const result = await Provider.getRestp(params);
    return res.send(response(baseResponse.SUCCESS, result));

}

//광고조회 API
exports.getAdvertise = async function (req, res){
    const result = await Provider.getAdvertisep();
    return res.send(response(baseResponse.SUCCESS, result));
}
