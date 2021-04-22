const express = require('express');
const asyncHandler = require('express-async-handler');
const fetch = require('node-fetch');
// const { Cookies } = require('react-cookies');
const cookieParser = require('cookie-parser');
const router = express.Router();
router.use(cookieParser())

const axios = require('axios');
const { Cookies } = require('react-cookies');



const getNewToken = async() => {
    const data = await fetch('https://project.trumedianetworks.com/api/token', {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'apiKey': `${process.env.API_KEY}`
        }
    })
    new Cookies().set('tempToken', res.token, {expires: newDate(res.expires)})
    return data;
}


// router.get('/', asyncHandler(async(req, res) => {
//     let data;
//     try{
//         data = await fetch('https://project.trumedianetworks.com/api/token', {
//             method: 'GET',
//             headers: {
//                 'accept': 'application/json',
//                 'apiKey': `${process.env.API_KEY}`
//             }
//         }).then(res => res.data)
//     } catch(e){
//         console.error(e)
//         error = `An error occured that reads ${e.message}. Check the console for more details.`
//     }
//     // res.cookie('tempToken', data.token, {expires: new Date(data.expires)});
//     return res.json({
//         data
//     })
// }))

// const getNewToken = async() => {
//     try {
//             const data = await fetch('https://project.trumedianetworks.com/api/token', {
//                 headers: {
//                     'apiKey':  `${process.env.API_KEY}`
//                 }
//             }).then(res => res.data);
//                 // set temp token as cookie w/ expirery = res.expires
//                 // new Cookies().set('tempToken', data.token, {expires: new Date(data.expires)});
//                 return data;
//             } catch (e) {
//                 console.error(e);
//             }
// }

router.get('/', asyncHandler(async(req, res) => {
    let data;
    try{
        let tempToken = new Cookies().get('tempToken');
        if(!tempToken){
            const res = await getNewToken();
            tempToken = res.token;
        }
        let savedData = new Cookies().get('mlbData');
        if(!savedData){

            data = await fetch('https://project.trumedianetworks.com/api/mlb/players', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'tempToken': await getNewToken()
                }

            })
            new Cookies().set('mlbData', data);
        } else {
            return res.json({
                savedData
            })
        }
    } catch(e){
        console.error(e)
    }
    return res.json({
        data
    })
}))

// router.get('/', asyncHandler(async(req, res) => {
//     try {
//         // get holderToken cookie
//         // let holderToken = new Cookies().get('holderToken');
//         if (!holderToken) {
//             const res = await getNewToken();
//             tempToken = res.token;
//         }
//         // let storedData  = new Cookies().get('MLB');
//         if (!storedData) {
//            const newData = await axios.get('https://project.trumedianetworks.com/api/mlb/players', {
//                 headers: {
//                     'holderToken':  holderToken,
//                 }
//             }).then(res => res.newData);
//             new Cookies().set('allQBData', newData);
//             // return newData;

//         }
//         // else{
//         //     return storedData;

//         // }
//     } catch (e){
//        console.error(e)
//     }
//     return res.json({
//         newData
//     })
// }))


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
