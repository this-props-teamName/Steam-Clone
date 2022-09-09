DROP TABLE IF EXISTS game CASCADE;
DROP TABLE IF EXISTS gameInfo;
DROP TABLE IF EXISTS carousel;
DROP TABLE IF EXISTS min;
DROP TABLE IF EXISTS req;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS logIn;
DROP TABLE IF EXISTS news;


CREATE TABLE game (
    id SERIAL PRIMARY KEY,
    game_id INTEGER UNIQUE
);

CREATE TABLE gameInfo (
    id SERIAL PRIMARY KEY,
    prepur_offer TEXT,
    dd_edition TEXT,
    dd_img TEXT,
    recent_events_img TEXT[],
    recent_events_info TEXT[],
    prepur_included TEXT,
    dd_included TEXT[],
    about TEXT[],
    rating TEXT,
    game_id INTEGER REFERENCES game(id)
);

CREATE TABLE carousel (
    id SERIAL PRIMARY KEY,
    title_img_url TEXT,
    large_img_url TEXT[],
    small_img_url TEXT[],
    huge_img_url TEXT[],
    carousel_game_info TEXT,
    developer TEXT,
    publisher TEXT,
    release_date TEXT,
    tags TEXT[],
    title TEXT[],
    dd_title TEXT,
    genres TEXT[],
    game_id INTEGER REFERENCES game(id)
);

CREATE TABLE min (
    id SERIAL PRIMARY KEY,
    min_required_info TEXT,
    os TEXT,
    processor TEXT,
    memory TEXT,
    graphics TEXT,
    directX TEXT,
    storage TEXT,
    additional_notes TEXT,
    copy_write TEXT[],
    game_id INTEGER REFERENCES game(id)
);

CREATE TABLE req (
    id SERIAL PRIMARY KEY,
    required_info TEXT,
    os TEXT,
    processor TEXT,
    memory TEXT,
    graphics TEXT,
    directX TEXT,
    storage TEXT,
    additional_notes TEXT,
    game_id INTEGER REFERENCES game(id)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    username TEXT,
    description TEXT,
    review_num SERIAL,
    recommended TEXT,
    time TIMESTAMP,
    replay TEXT,
    game_id INTEGER REFERENCES game(id)
);

CREATE TABLE logIn (
    id SERIAL,
    username TEXT
);

CREATE TABLE news (
    id SERIAL,
    hoverText TEXT[],
    mainText TEXT[],
    images TEXT[],
    game_id INTEGER REFERENCES game(id)
);