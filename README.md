# HTTP Cookie

HTTP 쿠키(웹 쿠키, 브라우저 쿠키)는 **서버**가 사용자의 **웹 브라우저**에 전송하는 작은 **데이터 조각**이다. 브라우저는 그 데이터 조각들을 저장해 놓았다가, **동일한 서버에 재 요청 시 저장된 데이터를 함께 전송**한다. 쿠키는 두 요청이 동일한 브라우저에서 들어왔는지 아닌지를 판단할 때 주로 사용한다. 상태가 없는([stateless](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#HTTP_is_stateless_but_not_sessionless)) HTTP 프로토콜에서 상태 정보를 기억시켜준다. 

# 쿠키 사용 목적

- **세션 관리(Session management):** 서버에 저장해야 할 로그인, 장바구니, 게임 스코어 등의 정보 관리
- **개인화(Personalization):** 사용자 선호, 테마 등의 세팅
- **트래킹(Tracking):** 사용자 행동을 기록하고 분석하는 용도

# npm으로 cookie parser 사용하기

요청된 쿠키를 쉽게 추출할 수 있도록 도와주는 미들웨어이다.

### **cookie parser 미들웨어 설치**

```jsx
npm install cookie-parser --save
```

### **cookie parser 미들웨어 등록**

```jsx
const express = require('express');
const cookieParser = require('cookie-parser');
 
const app = express();
app.use(cookieParser());
```

### **cookie 생성**

```jsx
res.cookie('key', 'value', {option});
```

쿠키의 키와 값을 넣어주고, object형태로 option을 부여할 수 있다. 

### 🔎 option

- maxAge

    만료 시간을 밀리초 단위로 설정

- expires

    만료 날짜를 GMT 시간으로 설정

> session cookie

  클라이언트가 종료되면 세션 쿠키가 제거된다. 

> permanent cookie

  클라이언트가 닫힐 때 만료되지만 Expires,  Max-Age 옵션을 지정하면 그 기간 동안 쿠키가 유지된다. 

---

- path

    cookie의 경로 설정 가능 default “/“

       ⇒ path로 쿠키의 경로를 설정하면 그 경로로 접속했을 때 해당 쿠키에 전송된다. (하위 디렉터리 이동 포함)

- domain

    도메인 네임 설정 가능 default “loaded”

    ⇒ domain으로 도메인 네임을 설정해주면 어떤 서브 도메인이 앞에 붙어도 쿠키가 전송된다. 

    ---

- secure

    https에서만 cookie 사용할 수 있도록 한다.

    ⇒ http를 사용할 경우 쿠키를 쉽게 훔쳐갈 수 있다. 

- httpOnly

    웹서버를 통해서만 cookie 접근할 수 있도록 한다.

    ⇒ 자바스크립트의 Document.cookie를 이용해 쿠키에 접속하는 것을 막을 수 있다. 

    ---

- signed

    cookie가 서명되어야 할 지를 결정한다.

### cookie 읽기

req.cookies를 console에 찍어보면 전송된 쿠키들을 object 타입으로 읽을 수 있다. 

### cookie 삭제

```jsx
res.clearCookie('key', {path: '/cookie'})
```

경로를 설정한 쿠키는 path 옵션을 통해 삭제 가능.

