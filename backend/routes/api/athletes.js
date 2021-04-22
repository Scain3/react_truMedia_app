const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
// const general = require('./general');
const { Cookies } = require('react-cookies');


const getNewToken = async() => {
    try {
        // get holderToken cookie
        let holderToken = new Cookies().get('holderToken');
        if (!holderToken) {
            const res = await data;
            tempToken = res.data.token;
        }
        let storedData  = new Cookies().get('allQBData');
        if (!storedData) {
            const newData = await axios.get('https://project.trumedianetworks.com/api/nfl/players', {
                headers: {
                    'tempToken':  holderToken,
                }
            }).then(res => res.newData);
            new Cookies().set('allQBData', newData);
            // return newData;
        }
    } catch (e){
        console.error(e)
    }
   return newData;
}
router.get('/', asyncHandler(async(req, res) => {
    // try {
        // get holderToken cookie
        let holderToken = new Cookies().get('holderToken');
        if (!holderToken) {
            const res = await getNewToken();
            tempToken = res.token;
        }
        let storedData  = new Cookies().get('allQBData');
        if (!storedData) {
            const newData = await axios.get('https://project.trumedianetworks.com/api/nfl/players', {
                headers: {
                    'holderToken':  holderToken,
                }
            }).then(res => res.newData);
            new Cookies().set('allQBData', newData);
            // return newData;
        }
    // } catch (e){
    //     console.error(e)
    // }
    return res.json({
        newData
    })
}))

module.exports = router;
