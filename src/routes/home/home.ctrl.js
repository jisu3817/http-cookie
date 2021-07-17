"use strict";

const output = {
    home: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login');
    }
}

const process = {
    login: (req, res) => {
        const id = req.body.id;
        const psword = req.body.psword;
        const rememberId = req.body.rememberId;

        if (rememberId === "checked") {
            console.log('아이디 저장 체크!');

            res.cookie('loginId', `${id}`, {maxAge:60, secure: true})
        }
        console.log(req.body);
    }
}
module.exports = {
    output, 
    process
};