'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	userName: String,
	movies: [String]	
});

module.exports = mongoose.model('User', userSchema);