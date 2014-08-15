'use strict';

exports.colors = function(req, res){
  res.render('games/colors');
};

exports.pacman = function(req, res){
  res.render('games/pacman');
};
