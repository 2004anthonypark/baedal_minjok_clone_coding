const nunjucks = require('nunjucks');
module.exports = function(app){
    const cont = require('./Controller');
    const jwtMiddleware = require('../../../config/jwtMiddleware');
    const passport = require('passport');
    app.set('view engine','html');
    nunjucks.configure('views',{
        express:app,
    })

    // app.post('/app/post-user',user.postUser);
      

    app.get('/app/rest/keep/:userId',cont.getRestByUserId);

   

    app.get('/app/rest/:restId', cont.getRestByRestId);

    app.get('/app/rest', cont.getRest);

    app.get('/app/advertise', cont.getAdvertise);
};


// TODO: 자동로그인 API (JWT 검증 및 Payload 내뱉기)
// JWT 검증 API
// app.get('/app/auto-login', jwtMiddleware, user.check);

// TODO: 탈퇴하기 API