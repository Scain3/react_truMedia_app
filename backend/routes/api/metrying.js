const express = require('express');
const asyncHandler = require('express-async-handler');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
    const data = await fetch('https://project.trumedianetworks.com/api/token', {
        headers: {
            'apiKey': `${process.env.API_KEY}`
        }
    })
        .then(res => res.json())
        .then(data => fetch('https://project.trumedianetworks.com/api/mlb/players', {
            headers: {
                'temptoken': data.token
            }
        }))
        .then(res => res.json())
        .then((data) => {
            return data
        })

        // const playerData = fetch('https://project.trumedianetworks.com/api/mlb/players', {
        //     headers: {
        //         'token': await getNewToken()
        //     }
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))

        return res.json({
            data
        })
}))

module.exports = router;
