const fs = require('fs')

// const { fetch } = require('node-fetch')
const userObj = {
    getUser: function (req, res) {
        fs.readFile("./detail.json", "utf-8", (err, jsonString) => {
            if (err) {
                res.json({ "error": err.message })
            }
            const detailJSON = JSON.parse(jsonString)
            res.json(detailJSON)
        })
    },
    deleteUser: function (req, res) {
        res.json({ "message": "All users deleted" })
        console.log(`Delete User`)
    },
    addUser: function (req, res) {
        res.json({ "message": "All users added" });
    },
    dashboard: function (req, res) {
        res.json({ "message": "Welcome to your dashboard" });
    }
}


module.exports = userObj;