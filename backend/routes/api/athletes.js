const express = require('express');
const asyncHandler = require('express-async-handler');
const fetch = require('node-fetch');
const router = express.Router();


//Get All MLB Player Data
router.get('/', asyncHandler(async(req, res) => {
    //Get the token
    const data = await fetch('https://project.trumedianetworks.com/api/token', {
        headers: {
            'apiKey': `${process.env.API_KEY}`
        }
    })
        .then(res => res.json())
        //Get all of the players data by using temptoken
        .then(data => fetch('https://project.trumedianetworks.com/api/mlb/players', {
            headers: {
                'temptoken': data.token
            }
        }))
        .then(res => res.json())
        .then((data) => {
            return data
        })

        return res.json({
            data
        })
}))

//Get each players data by using the playerId
router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    //Get the token
        const data = await fetch('https://project.trumedianetworks.com/api/token', {
            headers: {
                'apiKey': `${process.env.API_KEY}`
            }
        })
        .then(res => res.json())
    //Use token and req.params to access the id to match player to the id and retrieve the matched player data
        .then(data => fetch(`https://project.trumedianetworks.com/api/mlb/player/${req.params.id}`, {
            headers: {
                'temptoken': data.token
            }
        }))
        .then(res => res.json())
        .then((data) => {
            return data
        })

    return res.json(
        data[0]
    )
}))


module.exports = router;
