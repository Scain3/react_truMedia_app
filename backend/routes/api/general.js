// import axios from 'axios';
// import { Cookies } from 'react-cookie';
// import router from './session';

const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const axios = require('axios');
// const { Cookies } = require('react-cookie');


router.get('/', asyncHandler(async(req, res) => {
    let data;
    try{
        data = await axios.get('https://project.trumedianetworks.com/api/token', {
            headers: {
                'apiKey':  `${process.env.API_KEY}`
            }
        }).then(res => res.data);
    } catch(e){
        console.error(e)
        error = `An error occurred that reads "${e.message}". Check the console for more details.`;
    }
    return res.json({
        data
    })
}))

// const getToken = async() => {
//     try {
//         const data = await axios.get('https://project.trumedianetworks.com/api/token', {
//             headers: {
//                 'apiKey':  `${process.env.REACT_APP_APIKEY}`
//             }
//         }).then(res => res.data);
//         // set temp token as cookie w/ expirery = res.expires
//         new Cookies().set('tempToken', data.token, {expires: new Date(data.expires)});
//         return data;
//     } catch (e) {
//         console.error(e);
//     }
// }

// const getAthletes = async() => {
//     try {
//         // get temptoken cookie
//         let tempToken = new Cookies().get('tempToken');
//         if (!tempToken) {
//             const res = await getToken();
//             tempToken = res.token;
//         }

//         // check for previously stored data
//         let prevData  = new Cookies().get('allQBData');
//         if (!prevData) {
//             const data = await axios.get('https://project.trumedianetworks.com/api/nfl/players', {
//                 headers: {
//                     'tempToken':  tempToken,
//                 }
//             }).then(res => res.data);

//             // data manipulation
//             new Cookies().set('allQBData', data);
//             return data;
//         } else {
//             return prevData;
//         }
//     } catch (e) {
//         console.error(e);
//     }
// }

module.exports = router;
