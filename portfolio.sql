CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id")
VALUES ('Saga Gardens', 'a small group project', '', '', 'https://github.com/wabens/redux-saga-garden', '2019-04-11', '1');

SELECT * FROM "projects" 
JOIN "tags" ON "tags"."id" = "projects"."tag_id"