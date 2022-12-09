const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');


const loginMiddleWareObj = {
    loginMiddleware: (req, res, next) => {
        fs.readFile("./detail.json", "utf-8", (err, jsonString) => {
            if (err) {
                console.log('gsgsg')
                res.json({ "error": err.message })
            }
            const detailJSON = JSON.parse(jsonString)
            for (let i = 0; i <= detailJSON.length; i++) {
                if (detailJSON[i].email === "sakintola3@gmail.com") {
                    return next()
                }
                else {
                    return res.json({ "error": `User does not exist` })
                }
            }
        })
    }
}

module.exports = loginMiddleWareObj


