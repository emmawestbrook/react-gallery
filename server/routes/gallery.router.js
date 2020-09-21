const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const sqlQuery = `UPDATE "galleryItems" SET "likes" = "likes"+1 WHERE id=$1;`;

    pool.query(sqlQuery, [galleryId])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log(`Error making database query`, error);
            res.sendStatus(500);
        })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlQuery = `SELECT * FROM "galleryItems" ORDER BY "id";`;
    pool.query(sqlQuery)
        .then(result => {
            console.log('got stuff back from the database', result);
            res.send(result.rows);
        }).catch(error => {
            console.error(`error making database get query`, error);
            res.sendStatus(500);
        })
}); // END GET Route

module.exports = router;