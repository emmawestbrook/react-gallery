--this database is named react-gallery

CREATE TABLE "galleryItems" (
"id" SERIAL PRIMARY KEY,
"path" VARCHAR (256) NOT NULL,
"description" VARCHAR (256) NOT NULL,
"likes" INTEGER
);

INSERT INTO "galleryItems" ("id", "path", "description", "likes")
VALUES ('1', 'images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', '0');

INSERT INTO "galleryItems" ("id", "path", "description", "likes")
VALUES ('2', 'images/olga.jpg', 'olga of kiev', '0');

INSERT INTO "galleryItems" ("id", "path", "description", "likes")
VALUES ('3', 'images/potato.jpg', 'my online mahjong avatar', '0');

INSERT INTO "galleryItems" ("id", "path", "description", "likes")
VALUES ('4', 'iimages/sun.jpg', 'a sun i tattooed on a melon', '0');