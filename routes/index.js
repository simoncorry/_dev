
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Simon\'s First Node Project' });
};