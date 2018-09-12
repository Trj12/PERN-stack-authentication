CREATE TABLE users (
    username_hash character(64),
    password_hash character(64),
    session_id character(36)
    );

INSERT INTO users (
    username_hash,password_hash
) VALUES (
    'FOO123','Pass123'
),(
    'gOO123','Pass123'
);