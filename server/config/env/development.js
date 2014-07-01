'use strict';

module.exports = {
    db: 'mongodb://localhost/mean-dev',
    //db:'mongodb://cuongcua:12345678@kahana.mongohq.com:10069/piolist',
    app: {
        name: 'MEAN - FullStack JS - Development'
    },
    facebook: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    twitter: {
        clientID: 'g7oiUjkYaFAocZPA7HaTALGED',
        clientSecret: '68z1fmwRKj8l77cYJeMXmjQGJJn5AcIpmwXw3xkcG65SmblUJZ',
        callbackURL: 'http://localhost:3000/auth/twitter/callback'
    },
    github: {
        clientID: '3a9a74b2bdce0487024f',
        clientSecret: '19aca50afa70ec5b025d7c87aad5db48e237ce1c',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    google: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    linkedin: {
        clientID: 'API_KEY',
        clientSecret: 'SECRET_KEY',
        callbackURL: 'http://localhost:3000/auth/linkedin/callback'
    }
};
