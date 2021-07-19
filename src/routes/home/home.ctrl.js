"use strict";

const users = {
    id: ["지수", "jisu", "wltn"],
    psword: ["1234", "123", "1111"],
};

const output = {
    home: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        let userId = "";
        if (req.cookies['loginId'] !== undefined) {
            console.log("로그인 정보있음!")
            userId = req.cookies['loginId'];
        }
        res.render('home/login', {userId: userId});
    },
    welcome: (req, res) => {
        const userId = req.params;
        console.log(userId);
        res.render('home/welcome', userId);
    },
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
        psword = req.body.psword,
        rememberId = req.body.rememberId;

        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);

            if (users.psword[idx] === psword) {
                if (rememberId === "checked") {
                    res.cookie('loginId', id);
                    console.log("아이디 저장!");
                    console.log(req.cookies);
                }
                response.success = true;
                response.userId = id;
                return res.json(response);
            }
        };
        response.success = false;
		response.msg = "로그인에 실패하셨습니다.";
        return res.json(response);
    }
}
module.exports = {
    output, 
    process
};