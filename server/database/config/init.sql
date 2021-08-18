BEGIN;
DROP TABLE IF EXISTS USERS CASCADE ;

CREATE TABLE users(
id BIGSERIAL PRIMARY KEY NOT NULL,
username VARCHAR(100) NOT NULL,
fname VARCHAR(100) NOT NULL);

CREATE TABLE posts(
id BIGSERIAL PRIMARY KEY NOT NULL,
user_id VARCHAR(100) NOT NULL,
text VARCHAR(500) NOT NULL,
link_img VARCHAR(TEXT) NOT NULL,
likes VARCHAR(10) NOT NULL);

CREATE TABLE profile(
id BIGSERIAL PRIMARY KEY NOT NULL,
post_id VARCHAR(100) NOT NULL);

INSERT INTO users (username, fname) VALUES ('divluffy', 'ibrahim jomaa');
INSERT INTO users (username, fname) VALUES ('sabbah', 'ahmad sabah');
INSERT INTO users (username, fname) VALUES ('mostafa', 'mostafa mnoon');
INSERT INTO users (username, fname) VALUES ('ahmed', 'ahmad qadura');
INSERT INTO posts (user_id, text, link_img, likes) VALUES (22 , 'this is text default about  this image', '../storage/0.jpg' , 540);
INSERT INTO profile (post_id) VALUES (1);


-- UPDATE posts SET likes = 556 WHERE id = 109;
-- SELECT likes FROM posts WHERE id = 5;
-- SELECT * FROM posts WHERE id = 5;

-- SELECT * FROM users;
-- SELECT * FROM posts;
-- SELECT * FROM profile;

COMMIT;