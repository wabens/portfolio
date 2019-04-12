const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  console.log('Getting all projects');
  let sqlText = `SELECT * FROM "projects" JOIN "tags" ON "tags"."id" = "projects"."tag_id";`
  pool.query(sqlText)
    .then ( result => {
      res.send(result.rows)
    })
    .catch( error => {
      console.log(`Couldn't get data `, error);
      res.sendStatus(500);
    })
})

module.exports = router;