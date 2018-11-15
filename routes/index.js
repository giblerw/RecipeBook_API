const express = require('express');
const db = require('../db/queries');
const router = express.Router();

router.get('/', (req, res) => {

  let body = "";
        // Read the data
        response.on('data', chunk => {
            body += chunk;
        });
        response.on('end', () => {
            console.log(body);
            //Parse data
            //Print the data
        });
})


module.exports = router;
