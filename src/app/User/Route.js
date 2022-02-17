const nunjucks = require('nunjucks');
module.exports = function(app){
    const cont = require('./Controller');
    const jwtMiddleware = require('../../../config/jwtMiddleware');
    const passport = require('passport');
    app.set('view engine','html');
    nunjucks.configure('views',{
        express:app,
    })

    // 1. 유저 조회 API (모든 유저 조회 Test용 예시)
    app.get('/app/user',cont.getUsers);
    // 2. 유저 생성 (회원가입) API
    app.post('/app/post-user',cont.postUser);
    // 3. 특정 유저 조회 API
    app.get('/app/user/:userId', cont.getUserById);
    // 4. 비밀번호 수정 API
    app.patch('/app/change-password/:userId', cont.changePassword);
    
    app.post('/app/phone-validation', cont.phonevalidation);
};


// TODO: 자동로그인 API (JWT 검증 및 Payload 내뱉기)
// JWT 검증 API
// app.get('/app/auto-login', jwtMiddleware, user.check);

// TODO: 탈퇴하기 API