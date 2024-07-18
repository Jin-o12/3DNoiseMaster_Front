import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import jwt from 'jsonwebtoken';                                                                                             //토큰 생성 및 검증
import bodyParser from 'body-parser';                                                                                       //요청 본문을 json형으로 파싱
import cors from 'cors';                                                                                                    //cors를 허용

const app = express();                                                                                  
const PORT = process.env.PORT || 3000;                                                                                  
const SECRET_KEY = 'JMT';                                                                                                   //jmt 토큰 설정

app.use(bodyParser.json());                                                                                                 //json 형으로 파싱
app.use(cors());                                                                                                            //cors 허용

// 인증 미들웨어
function verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];                                                                            //요청 헤더에서 토큰을 추출
    if (!token) {                                                                                                           //토큰이 없을 경우
        return res.status(403).send({ auth: false, message: 'No token provided.' });                                        
    }
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {                                                                                                          //토큰 검증 실패시
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }
        req.userId = decoded.id;                                                                                            //검증된 토큰의 사용자 id를 요청 객체에 저장
        next();
    });
}

// 인증된 요청 예시
app.get('/protected', verifyToken, (req, res) => {
    res.status(200).send("Access granted to protected resource");
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 정적 파일 제공 설정
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// 모든 요청을 React 앱으로 라우팅
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
