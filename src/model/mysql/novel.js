'use strict';

let Model = function () {
  this.article = require('../../schema/mysql/article');
  this.author = require('../../schema/mysql/author');
  this.book = require('../../schema/mysql/book');
  this.category = require('../../schema/mysql/category');
  this.director = require('../../schema/mysql/director');
};

module.exports = new Model();