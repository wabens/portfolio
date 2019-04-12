const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
  console.log('Getting all projects');
  let sqlText = 
      `SELECT "projects"."id", "projects"."name", "projects"."description", "projects"."thumbnail", "projects"."website",
"projects"."github", "projects"."date_completed", "tags"."name" as "tag_name" FROM "projects" 
JOIN "tags" ON "tags"."id" = "projects"."tag_id";`;
  pool.query(sqlText)
    .then ( result => {
      res.send(result.rows)
    })
    .catch( error => {
      console.log(`Couldn't get data `, error);
      res.sendStatus(500);
    })
})

router.post('/', (req, res) => {
  console.log(`Adding a project`);
  let sqlText = `INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
      VALUES ($1, $2, $3, $4, $5, $6, $7);`
  pool.query(sqlText, [req.body.name, req.body.description, req.body.thumbnail, req.body.website, 
                      req.body.github, req.body.date_completed, req.body.tag_id])
    .then(result => {
      res.sendStatus(201)
    })
    .catch(error => {
      console.log(`Couldn't add data `, error);
      res.sendStatus(500);
    })
    
  
})

module.exports = router;