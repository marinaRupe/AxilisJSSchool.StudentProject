'use strict';

module.exports = function(user) {
    return {
        username: user.username,
        movies: user.movies,
    };
};