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
      

    

   
    app.post('/app/search-post',cont.postSearch);
    app.get('/app/search',cont.getSearchlistByUserid);
    app.patch('/app/search-delete/:searchId',cont.deleteSearchlistbyId);
    app.patch('/app/seachall-delete',cont.deleteSearchlistbyUserId);
    app.get('/app/search-rank',cont.searchRank);
};


// TODO: 자동로그인 API (JWT 검증 및 Payload 내뱉기)
// JWT 검증 API
// app.get('/app/auto-login', jwtMiddleware, user.check);

// TODO: 탈퇴하기 API