const express = require('express');
const asyncHandler = require('express-async-handler');
const fetch = require('node-fetch');
const router = express.Router();


//Get All NFL Player Data
router.get('/', asyncHandler(async(req, res) => {
    //Get the token
    const allPlayers = await fetch('https://project.trumedianetworks.com/api/token', {
        headers: {
            'apiKey': `${process.env.API_KEY}`
        }
    })
        .then(res => res.json())
        //Get all of the players data by using temptoken
        .then(data => fetch('https://project.trumedianetworks.com/api/nfl/players', {
            headers: {
                'temptoken': data.token
            }
        }))
        .then(res => res.json())
        .then((data) => {
            return data
        })

        return res.json(
            allPlayers
        )
}))

//Get each players data by using the playerId
router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    //Get the token
    const eachPlayer = await fetch('https://project.trumedianetworks.com/api/token', {
        headers: {
            'apiKey': `${process.env.API_KEY}`
        }
    })
    .then(res => res.json())
//Use token and req.params to access the id to match player to the id and retrieve the matched player data
    .then(data => fetch(`https://project.trumedianetworks.com/api/nfl/player/${req.params.id}`, {
        headers: {
            'temptoken': data.token
        }
    }))
    .then(res => res.json())
    .then((data) => {
        return data
    })
    // console.log(eachPlayer);
    return res.json(
        eachPlayer[0]
    )
}))


module.exports = router;
