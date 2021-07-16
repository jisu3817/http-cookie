const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('*', (req, res) => {
    //쿠키 읽기.
    if (Object.keys(req.cookies).length !== 0) {
        const cookies = req.cookies;
        console.log(cookies);
    }
    //쿠키 생성.
    res.cookie('yummy_cookie', 'choco');
    res.cookie('tasty_cookie', 'strawberry');
    res.cookie('path', 'cookie', {path:'/cookie'});
    //쿠키 삭제.
    res.clearCookie('yummy_cookie');
    res.send('Cookie!');
});

app.listen(3000, () => {
    console.log('서버 가동!');
});