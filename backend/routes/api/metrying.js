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

        return res.json({
            data
        })
}))
router.get('/:id(\\d+)', asyncHandler(async(req, res, next) => {
    // const getPlayerId = async(id) => {
        const data = await fetch('https://project.trumedianetworks.com/api/token', {
            headers: {
                'apiKey': `${process.env.API_KEY}`
            }
        })
        .then(res => res.json())
        .then(data => fetch(`https://project.trumedianetworks.com/api/mlb/player/${req.params.id}`, {
            headers: {
                'temptoken': data.token
            }
        }))
        .then(res => res.json())
        .then((data) => {
            return data
        })

        // return res.json({
        //     eachPlayer
        // })
    //}
    return res.json({
        data
    })
}))

// router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
//     const data = await fetch('https://project.trumedianetworks.com/api/token', {
//         headers: {
//             'apiKey': `${process.env.API_KEY}`
//         }
//     })
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//         })

//     // fetch(`https://project.trumedianetworks.com/api/mlb/player/${id}`, {
//     //     headers: {
//     //         'temptoken': newData.token
//     //     }
//     // }))
//     // .then(res => res.json())
//     // .then((returnedData) => {
//     //     return returnedData
//     // })
//     // fetch(`https://project.trumedianetworks.com/api/mlb/player/${data.playerId}`, {
//     //     method: 'POST',
//     //     headers: {
//     //         'temptoken': data.token,
//     //     },
//     //     body: {
//     //         data
//     //     }
//     // }))
//     // .then(res => res.json())
//     //     .then((data) => {
//     //         console.log(data);
//     //     })

//     return res.json({
//         data
//     })
// }))

module.exports = router;
