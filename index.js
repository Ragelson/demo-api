
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 5000;

const quotes = {
    "success": true,
    "data": [
        {
            "id": 1,
            "title": "Мудрость",
            "image": "http://mskko2021.mad.hakta.pro/uploads/files/quote_1.png",
            "description": "Когда сидишь - ты совсем не лежишь, а сидишь"
        },
        {
            "id": 2,
            "title": "О вечном",
            "image": "http://mskko2021.mad.hakta.pro/uploads/files/quote_2.png",
            "description": "Когда ты думаешь, то время идёт быстрее"
        },
        {
            "id": 3,
            "title": "Самое-самое",
            "image": "http://mskko2021.mad.hakta.pro/uploads/files/quote_2.png",
            "description": "Чем скорее ты закончишь - тем скорее пойдешь поесть"
        }
    ]
}

const feelings = {
    "success": true,
    "data": [
        {
            "id": 1,
            "title": "Спокойным",
            "position": 2,
            "image": "http://mskko2021.mad.hakta.pro/uploads/feeling/calm%20(4).png"
        },
        {
            "id": 2,
            "title": "Расслабленным",
            "position": 1,
            "image": "http://mskko2021.mad.hakta.pro/uploads/feeling/Relax.png"
        },
        {
            "id": 3,
            "title": "Сосредоточенным",
            "position": 3,
            "image": "http://mskko2021.mad.hakta.pro/uploads/feeling/Focus.png"
        },
        {
            "id": 4,
            "title": "Уставшим",
            "position": 4,
            "image": "http://mskko2021.mad.hakta.pro/uploads/feeling/Focus.png"
        },
        {
            "id": 5,
            "title": "Радостным",
            "position": 5,
            "image": "http://mskko2021.mad.hakta.pro/uploads/feeling/calm%20(4).png"
        }
    ]
}

const users = [
    {
        "id": 1,
        "email": "junior@wsr.ru",
        "password": "junior",
        "nickName": "onicsan",
        "avatar": "https://a.ppy.sh/11517928?1550826273.jpeg",
    },
    {
        "id": 2,
        "email": "general@wsr.ru",
        "password": "general",
        "nickName": "delure",
        "avatar": "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/66/6630a69388a03a56f5cea1fbc31a54bc5f955a45_full.jpg",
    },
    {
        "id": 3,
        "email": "wsr",
        "password": "wsr",
        "nickName": "sugjo",
        "avatar": "https://avatars.githubusercontent.com/u/64595362?v=4",
    },
]

try {
    app.get('/api/quotes', (req, res) => {
        return res.send(quotes);
    });

    app.get('/api/feelings', (req, res) => {
        return res.send(feelings);
    });

    app.post('/api/user/login', (req, res) => {
        const { email, password } = req.body
	console.log(req.body)

        users.forEach((e, i) => {
            if ((e.email == email) & (e.password == password)) {
                const { id, email, nickName, avatar } = users[i]
                return res.send({ id, email, nickName, avatar, token: (new Date().getTime()).toString(36) });
            }
        })
        return res.send('Пользователь не найден')
    });
} catch (error) {
}

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
