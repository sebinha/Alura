const express = require('express');
const pessoas = require('./pessoasRoute');
const curso = require('./cursoRoute');
const categoria = require('./categoriaRoute');

module.exports = (app) => {
  app.use(express.json(), pessoas, curso, categoria );
};
